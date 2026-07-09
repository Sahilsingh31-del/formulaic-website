import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const csvPath = path.join(root, 'src/master_bank_names_rows.csv');
const domainsPath = path.join(root, 'src/data/bankLogoDomains.ts');
const researchedSourcesPath = path.join(root, 'scripts/researched-logo-sources.json');
const logoDir = path.join(root, 'public/logos');
const manifestPath = path.join(root, 'src/data/clientLogoManifest.ts');

const userAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36';
const timeoutMs = 9000;

const manualLogoUrls = {
  'Au Small Finance Bank Ltd': 'https://upload.wikimedia.org/wikipedia/commons/6/65/AU-Bank-new-logo-for-GBM_1024X1024.png',
  'Aye Finance Pvt. Ltd': 'https://ayefin.com/logo1.jpg',
  'Bajaj Finance Ltd': 'https://cms-assets.bajajfinserv.in/is/image/bajajfinance/bfl-logo-desktop-v6?scl=1&fmt=png-alpha',
  'Icici Home Finance Company Ltd': 'https://www.icicihfc.com/icons/icici-icon.svg',
  'Motilal Oswal Finvest Ltd': 'https://www.motilaloswal.com/icons/logo.webp',
  'Piramal Capital And Housing Finance Ltd': 'https://www.piramalfinance.com/media_1486631d7dab3deb46d8bb3996a56cf5d9272e34a.svg',
  'Ratnaafin Capital Pvt. Ltd': 'https://www.ratnaafin.com/images/ratnaafin_logo.webp',
  'Shivalik Small Finance Bank Ltd': 'https://shivalik.bank.in/public/frontendassets/images/original_logo.png',
  'Suryoday Small Finance Bank Ltd': 'https://suryoday.bank.in/static/79c0a7a48c02415e6b848a14fe9a19fc/da246/Suryodaylogo_1_1_a157d376fe.webp',
  'The Saraswat Co-Operative Bank Ltd': 'https://saraswat.bank.in/images/images2/Saraswat-Bank-logo.png',
  'SARASWAT BANK': 'https://saraswat.bank.in/images/images2/Saraswat-Bank-logo.png',
  'Shriram Finance Ltd': 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/shriram_finance_logo.jpg',
  'Shriram ARC': 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/shriram_finance_logo.jpg',
  'STCI Finance Limited': 'https://www.stcionline.com/Images/logo-main.png',
  'Vridhi Finserv Home Finance Ltd': 'https://www.vridhihomefinance.com/wp-content/uploads/2023/12/logo-2.png',
};

function parseCsv(csv) {
  return csv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => {
      const [id, name, sortOrder] = line.split(',');
      return { id, name, sortOrder: Number(sortOrder) };
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

function parseDomainMap(ts) {
  const map = new Map();
  const entryRegex = /(?:'([^']+)'|([A-Za-z0-9_]+)):\s*'([^']+)'/g;
  let match;
  while ((match = entryRegex.exec(ts))) {
    map.set(match[1] || match[2], match[3]);
  }
  return map;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90);
}

function absoluteUrl(src, base) {
  if (!src || src.startsWith('data:') || src.startsWith('blob:')) return null;
  try {
    return new URL(src, base).href;
  } catch {
    return null;
  }
}

function extensionFromUrl(url, contentType) {
  const pathname = new URL(url).pathname.toLowerCase();
  if (pathname.endsWith('.svg')) return 'svg';
  if (pathname.endsWith('.png')) return 'png';
  if (pathname.endsWith('.webp')) return 'webp';
  if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) return 'jpg';
  if (contentType?.includes('svg')) return 'svg';
  if (contentType?.includes('png')) return 'png';
  if (contentType?.includes('webp')) return 'webp';
  if (contentType?.includes('jpeg')) return 'jpg';
  return 'png';
}

async function fetchText(url) {
  const signal = AbortSignal.timeout(timeoutMs);
  const response = await fetch(url, {
    headers: { 'user-agent': userAgent, accept: 'text/html,application/xhtml+xml' },
    redirect: 'follow',
    signal,
  });
  if (!response.ok) throw new Error(`HTML ${response.status}`);
  return response.text();
}

async function fetchAsset(url) {
  const signal = AbortSignal.timeout(timeoutMs);
  const response = await fetch(url, {
    headers: {
      'user-agent': userAgent,
      accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    },
    redirect: 'follow',
    signal,
  });
  if (!response.ok) throw new Error(`asset ${response.status}`);
  const contentType = response.headers.get('content-type') || '';
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 1000 && !contentType.includes('svg')) {
    throw new Error(`asset too small ${bytes.length}`);
  }
  return { bytes, contentType };
}

function scoreCandidate(candidate, domain) {
  const haystack = `${candidate.src} ${candidate.alt} ${candidate.className} ${candidate.id} ${candidate.title}`.toLowerCase();
  let score = 0;
  if (haystack.includes('logo')) score += 80;
  if (haystack.includes('brand')) score += 25;
  if (haystack.includes('header')) score += 15;
  if (haystack.includes('main')) score += 10;
  if (haystack.includes('footer')) score -= 15;
  if (haystack.includes('icon') || haystack.includes('favicon')) score -= 50;
  if (haystack.includes('sprite')) score -= 60;
  if (candidate.src.includes(domain)) score += 10;
  if (candidate.src.toLowerCase().endsWith('.svg')) score += 20;
  if (candidate.src.toLowerCase().endsWith('.png')) score += 12;
  return score;
}

function extractCandidates(html, baseUrl, domain) {
  const candidates = [];
  const imgRegex = /<img\b([^>]+)>/gi;
  const attrRegex = /([a-zA-Z_:.-]+)\s*=\s*["']([^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(html))) {
    const attrs = {};
    let attrMatch;
    while ((attrMatch = attrRegex.exec(match[1]))) attrs[attrMatch[1].toLowerCase()] = attrMatch[2];
    const srcs = [
      attrs.src,
      attrs['data-src'],
      attrs['data-lazy-src'],
      attrs['data-original'],
      attrs.srcset?.split(',')[0]?.trim().split(/\s+/)[0],
      attrs['data-srcset']?.split(',')[0]?.trim().split(/\s+/)[0],
    ];
    const src = srcs.map((value) => absoluteUrl(value, baseUrl)).find(Boolean);
    if (!src) continue;
    const candidate = {
      src,
      alt: attrs.alt || '',
      className: attrs.class || '',
      id: attrs.id || '',
      title: attrs.title || '',
    };
    candidates.push({ ...candidate, score: scoreCandidate(candidate, domain) });
  }

  const urlRegex = /url\((['"]?)([^)'"]+)\1\)/gi;
  while ((match = urlRegex.exec(html))) {
    const src = absoluteUrl(match[2], baseUrl);
    if (!src) continue;
    const candidate = { src, alt: '', className: 'css-background', id: '', title: '' };
    candidates.push({ ...candidate, score: scoreCandidate(candidate, domain) });
  }

  const linkRegex = /<link\b([^>]+)>/gi;
  while ((match = linkRegex.exec(html))) {
    const attrs = {};
    let attrMatch;
    while ((attrMatch = attrRegex.exec(match[1]))) attrs[attrMatch[1].toLowerCase()] = attrMatch[2];
    const rel = (attrs.rel || '').toLowerCase();
    if (!rel.includes('icon') && !rel.includes('apple-touch-icon')) continue;
    const href = absoluteUrl(attrs.href, baseUrl);
    if (!href) continue;
    candidates.push({ src: href, alt: 'icon', className: '', id: '', title: '', score: 10 });
  }

  return candidates.sort((a, b) => b.score - a.score);
}

function commonLogoCandidates(domain) {
  const bases = [`https://${domain}`, `https://www.${domain}`];
  const paths = [
    '/logo.svg',
    '/logo.png',
    '/assets/logo.svg',
    '/assets/logo.png',
    '/assets/images/logo.svg',
    '/assets/images/logo.png',
    '/images/logo.svg',
    '/images/logo.png',
    '/img/logo.svg',
    '/img/logo.png',
    '/wp-content/uploads/logo.png',
    '/wp-content/uploads/logo.svg',
  ];
  return bases.flatMap((base) => paths.map((logoPath) => `${base}${logoPath}`));
}

async function homepageUrls(domain) {
  return [`https://${domain}/`, `https://www.${domain}/`, `http://${domain}/`];
}

async function downloadLogo(client, domain) {
  const existing = await findExistingLogo(client.name);
  if (existing) return { path: `/logos/${existing}`, source: 'existing-local-file' };

  const urlsToTry = [];

  if (manualLogoUrls[client.name]) {
    urlsToTry.push({ kind: 'manual', url: manualLogoUrls[client.name] });
  }

  for (const base of await homepageUrls(domain)) {
    try {
      const html = await fetchText(base);
      const candidates = extractCandidates(html, base, domain).filter((candidate) => candidate.score >= 20);
      for (const candidate of candidates.slice(0, 4)) {
        urlsToTry.push({ kind: 'scraped', url: candidate.src, score: candidate.score });
      }
    } catch {
      // Some official sites block bots. We keep moving and fall back to other candidates.
    }
  }

  for (const url of commonLogoCandidates(domain)) {
    urlsToTry.push({ kind: 'common-path', url });
  }

  for (const candidate of urlsToTry) {
    try {
      const { bytes, contentType } = await fetchAsset(candidate.url);
      const ext = extensionFromUrl(candidate.url, contentType);
      const filename = `${slugify(client.name)}.${ext}`;
      await writeFile(path.join(logoDir, filename), bytes);
      return { path: `/logos/${filename}`, source: candidate.url };
    } catch {
      // Try next candidate.
    }
  }

  return null;
}

async function findExistingLogo(name) {
  const base = slugify(name);
  for (const ext of ['svg', 'png', 'webp', 'jpg']) {
    const filename = `${base}.${ext}`;
    try {
      await access(path.join(logoDir, filename));
      return filename;
    } catch {
      // Try next extension.
    }
  }
  return null;
}

async function main() {
  await mkdir(logoDir, { recursive: true });
  const [csv, domainsTs, researchedSourcesJson] = await Promise.all([
    readFile(csvPath, 'utf8'),
    readFile(domainsPath, 'utf8'),
    readFile(researchedSourcesPath, 'utf8').catch(() => '[]'),
  ]);
  const clients = parseCsv(csv);
  const domains = parseDomainMap(domainsTs);
  const researchedSources = JSON.parse(researchedSourcesJson);

  for (const source of researchedSources) {
    if (!source?.name || !source?.officialDomain || !source?.logoUrl) continue;
    if (source.confidence !== 'high' && source.confidence !== 'medium') continue;
    domains.set(source.name, source.officialDomain);
    manualLogoUrls[source.name] = source.logoUrl;
  }

  const manifest = {};
  const missing = [];

  for (const [index, client] of clients.entries()) {
    const domain = domains.get(client.name);
    if (!domain) {
      missing.push(client.name);
      continue;
    }

    process.stdout.write(`[${index + 1}/${clients.length}] ${client.name} (${domain}) ... `);
    const result = await downloadLogo(client, domain);
    if (result) {
      manifest[client.name] = { path: result.path, domain, source: result.source };
      process.stdout.write('saved\n');
    } else {
      missing.push(client.name);
      process.stdout.write('pending\n');
    }
  }

  const ts = `export interface ClientLogoAsset {
  path: string;
  domain: string;
  source: string;
}

export const clientLogoManifest: Record<string, ClientLogoAsset> = ${JSON.stringify(manifest, null, 2)};

export const clientLogosPending = ${JSON.stringify(missing, null, 2)};
`;

  await writeFile(manifestPath, ts);
  console.log(`\nSaved ${Object.keys(manifest).length} local logos. Pending ${missing.length}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
