# Project Instructions & Deployment Guide

This document outlines the setup, deployment workflow, domain notes, and stable version metadata for the **Formulaic Website** project.

**Last updated:** July 29, 2026

---

## 1. Project Overview & Repository

- **GitHub Repository**: [https://github.com/Sahilsingh31-del/formulaic-website](https://github.com/Sahilsingh31-del/formulaic-website)
- **Primary Branch**: `main`
- **Stack**: React 19 + Vite + TypeScript + Tailwind CSS 4 + Motion + React Router 7
- **Local Dev**: `npm run dev` (Vite on port `3000`)

### How to Save & Push Changes to GitHub
```bash
git add .
git commit -m "Commit description"
git push origin main
```

---

## 2. Live URLs & Vercel Deployment

### Production / Beta Alias
- **Primary live link**: [https://formulaic-website-beta.vercel.app](https://formulaic-website-beta.vercel.app)
- **Vercel Project**: `formulaic-website`
- **Vercel Org / Team**: `sandhusahil4-6636s-projects` (`team_PSwAP2QRD4m2e8JS4i4jFGL1`)

### Deploy from Terminal
```bash
# Preview
npx vercel

# Production (aliases to formulaic-website-beta.vercel.app)
npx vercel --prod --yes
```

### Build Configuration on Vercel
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## 3. Custom Domain (`formulaic.in`) — Important

| Item | Current status |
|------|----------------|
| **Registrar** | GoDaddy |
| **DNS provider** | **WebHostBox** (not GoDaddy DNS Records) |
| **Nameservers** | `ns1.bh-69.webhostbox.net` / `ns2.bh-69.webhostbox.net` |
| **Old website A record** | `208.91.199.118` (WebHostBox) |
| **Email (`*@formulaic.in`)** | **Google Workspace** (MX → `ASPMX.L.GOOGLE.COM` etc.) |
| **cPanel login** | `https://bh-69.webhostbox.net:2083` |

### Safe cutover to Vercel (do not break mail)
1. In Vercel → Project → **Settings → Domains**, add `formulaic.in` and `www.formulaic.in`.
2. In **WebHostBox / cPanel → Zone Editor**, update **only**:
   - **A** `@` → Vercel IP (usually `76.76.21.21`, or whatever Vercel shows)
   - **CNAME** `www` → `cname.vercel-dns.com` (or whatever Vercel shows)
3. **Do not touch** MX, SPF/TXT, DMARC, or EasyDMARC-related records — email stays on Google.

### If WebHostBox access is missing
- Search welcome / “New Account Information” email for cPanel credentials.
- Or temporarily move nameservers to GoDaddy **only after copying all MX + SPF/DMARC records**, otherwise mail breaks.

---

## 4. Site Structure (Key Routes)

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/team` | Team |
| `/careers` | Careers |
| `/network` | Network |
| `/offices` | Offices |
| `/technology` | Technology |
| `/accreditations` | Accreditations |
| `/services`, `/services/:slug` | Services + detail |
| `/sectors`, `/sectors/:slug` | Sectors + detail |
| `/process` | Process |
| `/clients` | Clients (curated 20 banks) |
| `/insights` | Insights |
| `/case-studies` | Case Studies |
| `/testimonials` | Testimonials |
| `/faq` | FAQ |
| `/contact` | Contact |
| `/privacy`, `/terms` | Legal |
| `*` | 404 |

Shared data lives in:
- `src/data/site.ts` — services, sectors, nav/content helpers
- `src/data/offices.ts` — office locations
- `src/data/featuredClients.ts` — curated Clients page list
- `src/data/clientLogoManifest.ts` / `bankLogoDomains.ts` — logo assets & domains
- `src/components/animated.tsx` — shared motion / hero / reveal helpers
- `src/components/Layout.tsx` — nav + footer

---

## 5. Team Page Notes (`src/pages/Team.tsx`)

### Featured leadership
- **Suneet Tyagi** — Managing Director
- **Junaid Kanth** — Chief Executive Officer
- **Prakash Kumar** — Chief Financial Officer

### Management (selected)
Includes Satish Bogra, Mayank Kaushik, Deepak Swain, **Lalit Mohan**, Zuber Khan, Sarthak Jain, Mohit Mahajan, Aakash Sharma, **Pankaj Tyagi** (Head Business Development).

### Other sections
- **Human Resource**: Khushboo, Devanshi
- **Technical Team**: region-labeled cards (first names); photos under `public/team/`

### Photo assets
- Team headshots: `public/team/*.png` (and some `.jpg`)
- Crop tweaks per card via optional `photoPosition`, `photoHeight`, `photoZoom` on member objects
- Example: Pankaj Tyagi uses top-aligned crop so hair is not clipped

---

## 6. Clients Page

- Shows a curated list of **20** banking / finance partners from `src/data/featuredClients.ts`
- Logos resolved via `clientLogoManifest`
- Logo download helper script: `scripts/download-client-logos.mjs`

---

## 7. Last Stable Versions & Dependencies

As of July 29, 2026, the application builds successfully with:

- **React / React DOM**: `^19.0.0`
- **Vite**: `^6.2.0`
- **Tailwind CSS**: `^4.1.14` (`@tailwindcss/vite`)
- **TypeScript**: `~5.8.2`
- **Motion**: `^12.23.24` (`motion/react`)
- **React Router DOM**: `^7.14.0`
- **Leaflet**: `^1.9.4` (offices / map UI)
- **Lucide React**: `^0.546.0`

### Stability checks
```bash
npm run lint    # tsc --noEmit
npm run build   # vite production build
```

### Current Stability Status
- Production deploys to Vercel are succeeding and aliased to `formulaic-website-beta.vercel.app`.
- Team leadership titles/names updated (CFO title, Lalit Mohan, Ankit & Pankaj photos).
- Clients page uses curated featured banks (not the full CSV dump in UI).
- Custom domain `formulaic.in` is **not yet pointed at Vercel**; old site still on WebHostBox until DNS A/CNAME cutover.
