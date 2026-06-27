# Siddharth Singh - 3D Portfolio

A personal portfolio for Siddharth Singh built with Next.js, React, TypeScript, Tailwind CSS, Motion, GSAP, and Spline. It showcases resume details, technical skills, work experience, projects, blogs, and a contact form.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 App Router, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| Animation | Motion, GSAP, Lenis |
| 3D | Spline runtime |
| Content | MDX blogs, local project data |
| Contact | Resend API |

## Key Files

| File | Purpose |
| --- | --- |
| `src/data/config.ts` | Name, SEO metadata, email, GitHub, and social links |
| `src/data/constants.ts` | Resume-backed skills and experience |
| `src/data/projects.tsx` | Project cards, screenshots, descriptions, and tech stacks |
| `public/assets/nav-link-previews/` | Header menu preview images |
| `public/assets/projects-screenshots/portfolio/` | Portfolio and project screenshots |
| `public/Siddharth Singh - CV.pdf` | Resume PDF served by the app |

## Local Setup

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

Create `.env.local` if you want optional integrations:

```bash
RESEND_API_KEY=
NEXT_PUBLIC_WS_URL=
UMAMI_DOMAIN=
UMAMI_SITE_ID=
NEXT_PUBLIC_GA_ID=
```

## Build

```bash
pnpm build
pnpm start
```

## Customization Notes

Skills and experience are centralized in `src/data/constants.ts`.

Projects use screenshots that must exist under `public/assets/projects-screenshots/portfolio/`.

The navigation hover thumbnails use images from `public/assets/nav-link-previews/`.

The 3D keyboard scene lives at `public/assets/skills-keyboard.spline`. If the Spline object names are changed, keep them aligned with the skill `name` values in `src/data/constants.ts`.
