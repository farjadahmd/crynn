
# CRYN - Next.js + Tailwind Starter (Multi-language, Animations, Hero Video)

This is a **production-ready**, Git-ready Next.js project built to look premium (Apple/Tesla style) and optimized for quick deployment on Vercel or Netlify.

Features included:
- Next.js + Tailwind CSS (preconfigured)
- Hero **video background** and parallax-like overlay
- Micro-animations using **Framer Motion** and CSS reveal classes
- Smooth scrolling navigation (single page)
- Multi-language (English + Urdu) using simple JSON files (`/locales/en/common.json`, `/locales/ur/common.json`) and a language toggle
- Netlify CMS admin placeholder (add `admin/config.yml` to enable in Netlify)
- Netlify-ready form (`data-netlify="true"`) on the Get Involved section
- Content folder (`/content`) for markdown resources (simple CMS flow)
- Logo included in `/public/logo.png` (replace with final SVG/PNG if desired)

## Quick start (locally)


1. Install dependencies:
```bash
cd cr yn-nextjs  # replace path
npm install
```

2. Run dev server:
```bash
npm run dev
# open http://localhost:3000
```

3. Build for production:
```bash
npm run build
npm start
```

## Deployment recommendations
- **Vercel**: connect the GitHub repo and deploy (Next.js first-class support).
- **Netlify**: works too; for Netlify Forms to work, make sure your site is built and deployed from Git (Netlify form detection works on build).

## Customization pointers
- Replace `/public/logo.png` with your final logo. Use SVG for crispness.
- Add more languages by creating `/locales/{code}/common.json` and updating the language switcher.
- To use a full CMS experience, configure Netlify CMS (`/admin/config.yml`) and enable Git Gateway or Netlify Identity.
- Swap the hero video URL in `pages/index.js` with your preferred MP4 or use an uploaded file in `/public`.

---
If you want, I can:
- Push this project to a GitHub repo for you (you'll need to provide access/token) OR I can give you a ZIP ready to upload.
- Connect and deploy to Vercel and set up automatic Git deploys.
- Configure Netlify CMS admin with collections and a simple auth flow.
