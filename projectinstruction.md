# Project Instructions & Deployment Guide

This document outlines the setup, deployment workflow, and stable version metadata for the **Formulaic Website** project.

---

## 1. Project Overview & Repository

- **GitHub Repository**: [https://github.com/Sahilsingh31-del/formulaic-website](https://github.com/Sahilsingh31-del/formulaic-website)
- **Primary Branch**: `main`

### How to Save & Push Changes to GitHub
To push local changes to GitHub, run the following commands in the project root directory:
```bash
# Stage all changes
git add .

# Commit changes
git commit -m "Commit description"

# Push to the main branch
git push origin main
```

---

## 2. Vercel Deployment

The project is linked to Vercel for hosting.

- **Vercel Project Name**: `formulaic-website`
- **Vercel Organization / Team ID**: `team_PSwAP2QRD4m2e8JS4i4jFGL1`

### Local Vercel Deployment via CLI
If you want to deploy manually from your terminal, you can run:

#### Deploy to Preview (Development)
```bash
npx vercel
```

#### Deploy to Production
```bash
npx vercel --prod
```

### Build Configuration on Vercel
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## 3. Last Stable Versions & Dependencies

As of July 9, 2026, the application compiles and bundles successfully with the following stable stack:

- **React**: `^19.0.0`
- **React DOM**: `^19.0.0`
- **Vite**: `^6.2.0`
- **Tailwind CSS**: `^4.1.14` (utilizing `@tailwindcss/vite` integration)
- **TypeScript**: `~5.8.2`
- **Motion (Framer Motion)**: `^12.23.24` (imported as `motion/react`)
- **React Router DOM**: `^7.14.0`

### Current Stability Status
- **Type Checking**: Clean (`npm run lint` executes with 0 errors).
- **Production Build**: Successful (`npm run build` bundles without issues).
- **Management Team Section**: Restored to the stable grid cards layout (`ManagementCard` in `Team.tsx`).
