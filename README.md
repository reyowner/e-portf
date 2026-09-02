# Renato Reoner Jr. — Fullstack Developer Portfolio

**Live:** [e-portfolio-reyowners-projects.vercel.app](https://e-portfolio-reyowners-projects.vercel.app)  
**Built to:** get you to the right information fast so we can start a conversation.

---

## What this is

My personal e-portfolio. Not a template, not a tutorial project. It's a **Next.js 15 (App Router)** application I designed, built, and deploy to Vercel. It serves three routes:

| Route | Purpose |
|-------|---------|
| `/` | The main portfolio — a single scrolling page with Hero, About, Projects, Skills, Experience, and Contact sections. |
| `/resume` | An interactive resume page: timeline (Oaktree Innovations internship → Junior Fullstack Engineer, BS IT from TIP Manila), four skill categories with progress bars, and a one-click PDF download. |
| `/projects/[slug]` | Static detail pages for each featured project (4 total, pre-rendered at build time). |

**The goal is simple:** you're a recruiter or a potential client. You land here. You see real work (PREDIKTA at Netopia AI, Black Rose gaming platform, client portfolio projects), my actual resume, and multiple ways to reach me. You decide I'm worth talking to. You click one of the contact paths. That's a successful visit.

---

## What's real (and what isn't)

- **Projects & experience are real.** PREDIKTA (12+ months, sole frontend dev, 3.4× CTR / 2.6× CPC improvement), Black Rose (live at blackrose.asia, VALORANT/Riot partnered event), client e-portfolio (live), and this site itself. Backed by `public/RReoner_Resume.pdf`.
- **No fabricated testimonials, metrics, or clients.** If it's not on the live site or the resume PDF, I didn't put it here.
- **The contact form works.** It hits EmailJS with my actual service/template IDs. You submit → I get an email. Try it.

---

## Tech choices (and why)

| Area | Choice | Why it matters to you |
|------|--------|----------------------|
| **Framework** | Next.js 15 (App Router) | Modern React patterns, server components where useful, SSG for project pages, great DX |
| **Language** | TypeScript (strict) | No `any` leaks, type-safe project data model in `src/lib/projects.ts` |
| **Styling** | Tailwind CSS v4 (CSS-first) | No config file, fast builds, utility-first means consistent design system |
| **Animation** | Framer Motion | Smooth, performant animations that respect `prefers-reduced-motion` |
| **Fonts** | Geist Sans + Mono (self-hosted via `next/font`) | Zero layout shift, no third-party font requests |
| **Email** | EmailJS | Zero backend needed; form works on static export too |
| **Quality** | ESLint (flat, Next core-web-vitals + TS) + Prettier | Clean, consistent code; `npm run lint` passes on CI |
| **Deploy** | Vercel | Native Next.js support, preview deployments, edge functions if needed |

> One honest note: `react-type-animation` is in `package.json` but unused. The hero's typing effect is a custom hook I wrote — fewer dependencies, full control.

---

## Project structure (what matters)

```
src/
├── app/
│   ├── page.tsx                 # Homepage — composes all sections
│   ├── layout.tsx               # Root layout, fonts, global metadata
│   ├── globals.css              # Tailwind v4 entry + CSS variables
│   ├── resume/page.tsx          # Interactive resume (timeline + skills + PDF)
│   ├── projects/[slug]/page.tsx # SSG project detail pages
│   ├── sitemap.ts               # Auto-generated sitemap.xml
│   └── robots.ts                # Auto-generated robots.txt
├── components/
│   ├── Hero.tsx                 # Animated intro, typewriter roles, CTAs, code card
│   ├── AboutMe.tsx              # Story, quick facts, values, work style (tabs)
│   ├── Projects.tsx             # Carousel → links to /projects/[slug]
│   ├── Skills.tsx               # Categorized progress bars + soft skills
│   ├── Experience.tsx           # Carousel: pro, academic, early work
│   ├── Contact.tsx              # EmailJS form + validation + status + availability
│   ├── Navbar.tsx               # Fixed, scroll-progress, active-section, mobile drawer
│   ├── Footer.tsx               # Social, quick links, resume link, copyright
│   └── LoadingSpinner/SkeletonLoader.tsx  # Loading states for carousels
├── lib/
│   └── projects.ts              # Single source of truth: Project[] + helpers
└── global.d.ts                  # CSS module types
```

**Key data lives in `src/lib/projects.ts`** — 4 projects, each with slug, title, duration, company/role, category, description, features, technologies, stats, and SEO fields. Adding a project = add one object to that array. No CMS, no Markdown parsing, no magic.

---

## Scripts

```bash
npm run dev      # Turbopack dev server at localhost:3000
npm run build    # Production build (pre-renders 4 project pages + resume)
npm run start    # Production server
npm run lint     # ESLint (flat config)
```

---

## SEO & discoverability

- Every route exports `Metadata` (title, description, Open Graph, Twitter card, canonical URL)
- Dynamic `sitemap.xml` includes `/`, `/resume`, and all `/projects/[slug]` pages
- `robots.txt` allows indexing, disallows `/api/`, `/_next/`, `/admin/`
- `vercel.json` adds `X-Robots-Tag: index, follow` headers
- `next.config.ts` 301-redirects legacy Vercel preview domains to the canonical one

---

## How to run locally

```bash
git clone https://github.com/reyowner/e-portf-main.git
cd e-portf-main
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The contact form works immediately against my EmailJS account — if you fork this, swap the service/template/user IDs in `src/components/Contact.tsx` to point at your own.

---

## Contact me

| Channel | Link |
|---------|------|
| **Email** | [domasigreoner@gmail.com](mailto:domasigreoner@gmail.com) |
| **Phone** | +63 967 205 4484 |
| **LinkedIn** | [linkedin.com/in/rreonerjr](https://linkedin.com/in/rreonerjr) |
| **GitHub** | [github.com/reyowner](https://github.com/reyowner) |
| **Location** | Taguig, Metro Manila, Philippines |

**Availability:** Open to freelance, part-time, and full-time roles. Remote / hybrid / on-site — flexible.

---

## License

© 2025–{current year} Renato Reoner Jr. All rights reserved.  
The code is here for transparency and reference — not for copy-paste deployment as your own portfolio. Build your own story; this one's mine.