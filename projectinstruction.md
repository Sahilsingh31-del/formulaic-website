# Project Instructions & Deployment Guide

This document outlines the setup, deployment workflow, domain notes, team structure, SEO/AI schema, and stable version metadata for the **Formulaic Website** project.

**Last updated:** September 3, 2026  
**Status:** Stable Production Release (`v1.2.0`)

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

### Production Domain & Aliases
- **Primary Live Domain**: [https://formulaic.in](https://formulaic.in)
- **Direct Vercel Deployment**: [https://formulaic-website-fmsxngqy1-sandhusahil4-6636s-projects.vercel.app](https://formulaic-website-fmsxngqy1-sandhusahil4-6636s-projects.vercel.app)
- **Vercel Project**: `formulaic-website`
- **Vercel Org / Team**: `sandhusahil4-6636s-projects` (`sandhusahil4-6636`)

### Deploy from Terminal
```bash
# Preview
npx vercel

# Production (instantly aliases to https://formulaic.in)
npx vercel --prod --yes
```

### Build Configuration on Vercel
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## 3. Production Domain & DNS Status (`formulaic.in`)

| Item | Current Status |
|------|----------------|
| **Domain** | `https://formulaic.in` (SSL Active, HTTP -> HTTPS redirection) |
| **Registrar** | GoDaddy |
| **DNS Provider** | WebHostBox / cPanel Zone Editor |
| **A Record (@)** | Pointed to Vercel Production IP (`76.76.21.21`) |
| **CNAME (www)** | Pointed to `cname.vercel-dns.com` |
| **Email (`*@formulaic.in`)** | Google Workspace (MX records preserved on WebHostBox) |

---

## 4. Branding & Favicon Suite

All favicon assets are generated from the official Formulaic logo mark with an elegant white rounded squircle badge, ensuring optimal contrast on both dark and light browser tabs:

- **SVG Icon**: `public/favicon.svg` (Crisp vector/high-res base64)
- **Google Search Favicon**: `public/favicon-48x48.png` (48x48 PNG required by Googlebot)
- **Standard Desktop Icons**: `public/favicon-32x32.png`, `public/favicon-16x16.png`, `public/favicon.ico`
- **Mobile Icons**: `public/apple-touch-icon.png` (180x180), `public/android-chrome-192x192.png`, `public/android-chrome-512x512.png`
- **Cache-Buster**: Configured in `index.html` via `?v=20260903c` to ensure browsers immediately fetch the updated icon without holding stale cache.

---

## 5. SEO & AI Search Engine Optimization (LLM & SGE Ready)

The website is comprehensively optimized for Google Search, Bing, Google Gemini (AI Overviews), SearchGPT, Perplexity, and Claude:

### Structured Data (JSON-LD)
`index.html` includes rich `Corporation` schema with:
- **`knowsAbout` Entity Tags**: Explicit authority mapping for:
  - Asset Valuation, Real Estate Valuation, Plant & Machinery Valuation
  - Engineering Inspection, Technical Due Diligence, Chartered Engineer Certification
  - IBBI Registered Valuers, RICS Standards, Lender Independent Engineers
- **Official Address**: Joy Tower, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
- **Scale Signals**: 1500+ employees, 100+ office locations, Pan-India operations
- **SameAs Entity Linking**: Official LinkedIn company page linked to solidify Google Knowledge Graph entity.

### Dynamic Route Titles
`src/components/Layout.tsx` dynamically updates `document.title` on every route change (e.g., `Leadership & Regional Team | Formulaic Engineers`, `Valuation & Technical Services | Formulaic Engineers`, etc.).

### Sitemaps & Crawlers
- **Sitemap**: `public/sitemap.xml` with all 14 canonical URLs pointing to `https://formulaic.in`.
- **Robots.txt**: `public/robots.txt` allowing all search engine & AI bots (`User-agent: *`) with host and sitemap declarations.

---

## 6. Team Page Architecture (`src/pages/Team.tsx`)

### 1. Featured Leadership
- **Suneet Tyagi** — Managing Director (`/team/suneet.png`)

### 2. Management Team
- **Junaid Kanth** — Chief Executive Officer (`/team/junaid.png`)
- **Satish Bogra** — Chief Technology Officer
- **Mayank Kaushik** — Business Operations
- **Lalit Mohan** — Project Management
- **Zuber Khan** — Operations Head (Updated portrait `/team/zuber-khan.jpg` with `50% 12%` framing)
- **Sarthak Jain** — Head Credit & Risk
- **Mohit Mahajan** — Risk Management
- **Aakash Sharma** — Head Audit & Compliance
- **Pankaj Tyagi** — Head Business Development (`/team/pankaj.png`)

### 3. Finance Team
- **Prakash Kumar** — Chief Financial Officer (`/team/prakash.png` with original top framing)

### 4. Legal Team
- **Khushboo Monga** — Legal Head (`/team/khushboo-monga.jpg` with `50% 12%` framing)

### 5. Technical Team (Regional Operations)
- **Aakash** — Agra (`Regional leadership`)
- **Vikrant Sharma** — Business Development (`Regional Management`, photo `/team/vikrant-sharma.jpg` with `50% 12%` framing)
- **Nishu** — Jharkhand (`Regional leadership`)
- **Manjeet** — Punjab (`Regional technical management`)
- **Ravi** — Punjab (`Regional technical management`)
- **Ankit** — Rajasthan (`Regional technical management`)

### Interactive Profile Modal
- Every team card is clickable and opens an accessible, animated `MemberModal` dialog with backdrop blur, full biography, and responsibilities.

---

## 7. Key Site Routes

| Route | Page Component | Description |
|-------|----------------|-------------|
| `/` | `Home.tsx` | Hero video, core services, statistics, interactive maps |
| `/about` | `About.tsx` | Company history, mission, vision, values |
| `/team` | `Team.tsx` | Executive leadership, management, finance, legal, and technical teams |
| `/services`, `/services/:slug` | `Services.tsx`, `ServiceDetail.tsx` | Valuation, CE certification, TEV studies, Lenders engineer |
| `/sectors`, `/sectors/:slug` | `Sectors.tsx`, `SectorDetail.tsx` | Real estate, infrastructure, industrial, BFSI |
| `/network` | `Network.tsx` | National operational reach and capabilities |
| `/offices` | `Offices.tsx` | 100+ office locations directory with interactive search |
| `/technology` | `Technology.tsx` | Proprietary inspection software & valuation engines |
| `/accreditations` | `Accreditations.tsx` | IBBI, RICS, IOV, CE, ISO compliance credentials |
| `/clients` | `Clients.tsx` | 20+ empanelled national banks & financial institutions |
| `/process` | `Process.tsx` | 6-step rigorous valuation & risk assessment methodology |
| `/insights` | `Insights.tsx` | Industry reports, market trends, whitepapers |
| `/case-studies` | `CaseStudies.tsx` | High-value asset assessment case studies |
| `/testimonials` | `Testimonials.tsx` | Verified institutional client endorsements |
| `/careers` | `Careers.tsx` | Open roles & culture |
| `/faq` | `FAQ.tsx` | Institutional client FAQs |
| `/contact` | `Contact.tsx` | Noida headquarters & contact forms |

---

## 8. Stability Checks & Verification

To verify build and type correctness before any push:
```bash
npm run build   # Vite production build (must output 0 errors)
```

**Current Stability Status (September 3, 2026):**
- Build: Passing (`vite v6.4.2`, 0 errors)
- Production: Live and healthy on `https://formulaic.in`
- Favicon: Multi-size suite active with white squircle contrast badge
- Team: All photo updates, reorderings, and new designations verified
- SEO/AI: Comprehensive Schema.org JSON-LD and dynamic titles deployed
