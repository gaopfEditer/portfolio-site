# Pengfei — Portfolio site

Static portfolio and services site for a freelance developer. Built with **Next.js** (static export), **TypeScript**, and **Tailwind CSS**. Deploy on [Vercel](https://vercel.com) free tier with zero backend.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output is written to `out/`. Vercel detects Next.js automatically; static export works with the default settings in `next.config.ts`.

To preview the export locally:

```bash
npx serve out
```

## Edit site info (one file)

Update **`site.config.ts`**:

- Display name, email, site URL (for SEO and sitemap)
- Upwork, GitHub, optional LinkedIn/Twitter
- Formspree endpoint (leave empty to use `mailto:` fallback)
- Service “starting from” prices
- Bug-fix support days

## Add a case study

1. Copy `content/cases/ai-document-extractor.json` to a new file, e.g. `content/cases/my-project.json`.
2. Set a unique `slug`, fill in copy, and set `"draft": false` when ready to publish.
3. Add an image under `public/work/<slug>/`.
4. Rebuild — cases are loaded automatically from `content/cases/*.json`.

Draft cases (`"draft": true`) are hidden from the site.

## Contact form on static hosting

1. Create a form at [Formspree](https://formspree.io).
2. Paste the form URL into `formspreeEndpoint` in `site.config.ts`.

If empty, the submit button opens the visitor’s email client with a pre-filled message to your configured email.

## Deploy to Vercel (free)

1. Push this repo to GitHub.
2. In Vercel: **Add New Project** → import the repo.
3. Framework preset: **Next.js** (defaults are fine).
4. After deploy, set `siteUrl` in `site.config.ts` to your production URL and redeploy.

## Project structure

```
site.config.ts          # Links, pricing, form endpoint
content/cases/*.json    # Case studies
app/                    # Routes and layout
components/             # UI sections
public/                 # Images, og.png, favicon (app/icon.svg)
```

## License

Private — © Pengfei.
