# ilkcankose.com — Portfolio Template

A minimal, single-page portfolio template built with Next.js (App Router) and TypeScript.

## Layout

- **Left sidebar** — fixed to the viewport: name, social links, short bio, year.
- **Right panel** — scrollable: project list with title, type, and image.
- **Mobile** — stacks vertically into a single page scroll.

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Plain CSS (global)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customizing

- **Sidebar content** — edit `app/page.tsx` (name, socials, bio).
- **Projects** — edit the `projects` array in `app/page.tsx`. Drop images into `public/` and reference by path.
- **Styling** — `app/globals.css`.
- **Font** — replace the Typekit `<link>` in `app/layout.tsx` with your own kit.
