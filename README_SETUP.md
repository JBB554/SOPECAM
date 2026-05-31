# SOPECAM Capital — README & Deploy Guide

**La plateforme d'intelligence financière de référence d'Afrique Centrale.**

> Données mondiales · Analyses éditoriales · Éducation financière  
> Depuis Yaoundé pour le monde · Bilingue FR / EN

---

## 📁 Repository Structure

```
SOPECAM_CAPITAL/
├── index.html           ← Main platform (homepage, all sections)
├── onboarding.html      ← First-time user onboarding flow (5 steps)
├── offline.html         ← PWA offline fallback page
├── track.html           ← Portfolio watchlist & tracking page
├── lang.js              ← Bilingual engine (FR/EN)
├── sw.js                ← Service Worker (PWA, caching, offline)
├── manifest.json        ← PWA web app manifest
├── vercel.json          ← Vercel routing, headers, cache config
├── icon-192.svg         ← PWA icon 192×192
├── icon-512.svg         ← PWA icon 512×512
├── .gitignore           ← Git ignore rules
├── README_SETUP.md      ← This file
└── assets/
    └── sql/
        └── supabase-schema.sql  ← Full Supabase DB schema
```

---

## 🚀 Deploy to Vercel in 3 Steps

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial SOPECAM Capital deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sopecam-capital.git
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repository
3. **Framework Preset**: `Other` (no framework — pure HTML/JS)
4. **Root Directory**: leave blank (or `./`)
5. **Build Command**: leave blank
6. **Output Directory**: leave blank
7. Click **Deploy**

✅ Your site will be live at `https://sopecam-capital.vercel.app` (or your custom domain)

### Step 3 — (Optional) Add Custom Domain

In Vercel dashboard → **Settings → Domains** → add your domain (e.g. `sopecamcapital.cm`)

---

## 🗄️ Supabase Setup (Optional — for Auth & User Data)

The `assets/sql/supabase-schema.sql` file contains the full database schema.

### Setup Steps

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** → paste the contents of `supabase-schema.sql` → **Run**
3. Copy your project URL and anon key from **Settings → API**
4. Add to your Vercel environment variables:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

### Tables Created by Schema

| Table | Purpose |
|---|---|
| `profiles` | User profiles, investor type, language preference |
| `watchlist` | Personal asset watchlists |
| `price_alerts` | Price threshold notifications |
| `saved_opportunities` | Saved investment opportunities |
| `reading_history` | Article/module read tracking |
| `academy_progress` | Financial Academy module completion |
| `newsletter_subscribers` | Email newsletter signups |
| `contact_messages` | Contact form submissions |

---

## 📱 PWA Features

The platform is a full Progressive Web App (PWA):

- ✅ **Installable** on Android, iOS, and desktop
- ✅ **Offline support** via Service Worker (`sw.js`)
- ✅ **Offline fallback page** (`offline.html`)
- ✅ **App icons** in SVG format (192px & 512px)
- ✅ **Theme color** — SOPECAM Gold (`#C9A84C`)
- ✅ **Splash screen** via manifest
- ✅ **Push notifications** architecture ready

To test PWA locally:
```bash
npx serve .
# Open http://localhost:3000
# In Chrome DevTools → Application → Service Workers
```

---

## 🌐 Bilingual Engine

The `lang.js` file provides full FR/EN switching:

```javascript
// Switch to English
setLang('en');

// Switch to French
setLang('fr');

// Get a translation
t('nav_markets'); // → "Marchés" or "Markets"
```

Add `data-i18n="key"` attributes to HTML elements to auto-translate them.

---

## 🔒 Security Headers

`vercel.json` includes production security headers:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (camera, mic, geolocation blocked)

Service Worker is served with `no-cache` to ensure updates propagate instantly.

---

## 📄 Pages Overview

### `index.html` — Main Platform

Sections:
- **Navigation** — sticky nav with live clock + UTC ticker
- **Market Ticker** — animated scrolling price feed
- **Hero** — headline + market sidebar + stats
- **Feature Strip** — 4 platform pillars
- **Markets** — 6 live market cards with sparklines + tabbed filtering
- **Live Chart** — interactive Chart.js price chart (5 instruments)
- **Editorial** — featured articles + news sidebar
- **Crypto** — 4 digital assets + educational accordion
- **Opportunities Board** — curated investment table with risk badges
- **Portfolio Guidance** — 3 editorial analysis cards
- **Financial Academy** — 6 learning modules (Beginner → Advanced)
- **Africa Focus** — Cameroon & SND30 alignment section
- **Footer** — brand, links, legal disclaimer

### `onboarding.html` — Welcome Flow

5-step interactive onboarding:
1. Welcome
2. Investor profile selection
3. Market interests (multi-select)
4. Language preference (FR/EN)
5. Confirmation & platform entry

### `track.html` — Portfolio Tracker

- Summary KPI cards (total value, weekly change, asset count, alerts)
- Watchlist table with 6 default assets
- Side panel: price alerts, saved opportunities, personal notes
- Full disclaimer per COSUMAF regulations

### `offline.html` — Offline Fallback

Elegant offline page with:
- Auto-retry when connection restores
- Educational investment tips
- Full brand consistency

---

## ⚖️ Legal & Compliance

This platform is designed for **informational and educational purposes only**.

- All market data is illustrative / indicative
- No investment advice is provided
- Aligned with **COSUMAF** and **AMF** regulations
- **SND30** aligned (Stratégie Nationale de Développement 2030)
- Disclaimer present on all financial content sections

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5 + CSS3 + ES6 JS |
| Charts | Chart.js 4.4.1 (CDN) |
| Fonts | Google Fonts (Playfair Display, DM Sans, DM Mono) |
| Icons | SVG (custom designed) |
| PWA | Service Worker + Web App Manifest |
| i18n | Custom bilingual engine (`lang.js`) |
| Database | Supabase (PostgreSQL + Auth) |
| Hosting | Vercel (static + edge) |

---

## 📞 Contact

**SOPECAM Capital**  
Intelligence Financière Mondiale  
Yaoundé, Cameroun · Paris · Londres

---

*© 2026 SOPECAM Capital · Tous droits réservés*  
*Données à titre informatif — Pas de conseil en investissement — Réglementation COSUMAF*
