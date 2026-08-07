# e-Portfolio – Renato Reoner Jr.

A modern, responsive e-Portfolio built with Next.js, React, and Tailwind CSS. This project showcases my professional experience, projects, skills, and contact information in a visually engaging and interactive format.

## 🚀 Features
- Animated hero section with dynamic typing and background effects
- About Me with quick facts, values, and work style
- Projects carousel highlighting professional and personal work
- Skills section with categorized progress bars and additional skills
- Experience carousel with academic, professional, and early work history
- Contact form with real-time validation and EmailJS integration
- Responsive navigation bar and footer with social/contact links
- Smooth scrolling, glassmorphism, and modern UI/UX

## 🛠️ Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Frontend:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email:** [EmailJS](https://www.emailjs.com/)
- **Linting:** ESLint

## 📁 Project Structure
```
e-portf/
├── public/                # Static assets (profile image, resume)
├── src/
│   ├── app/               # Next.js app entry, layout, global styles
│   └── components/        # All UI components (see below)
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS config (if present)
├── postcss.config.mjs     # PostCSS config
└── README.md
```

### Main Components (src/components)
- **Hero.tsx**: Animated introduction, profile, and quick links
- **AboutMe.tsx**: Story, quick facts, values, and work style
- **Projects.tsx**: Carousel of featured projects (personal, professional)
- **Skills.tsx**: Categorized technical and soft skills with progress bars
- **Experience.tsx**: Carousel of academic, professional, and early work experiences
- **Contact.tsx**: Contact form (EmailJS), contact info, and current status
- **Navbar.tsx**: Responsive navigation bar with scroll tracking
- **Footer.tsx**: Social links, quick links, contact info, and copyright
- **LoadingSpinner.tsx**: Animated loading spinner (used in carousels/loaders)
- **SkeletonLoader.tsx**: Skeleton placeholder for loading states

## ⚙️ Configuration
- **TypeScript**: Strict mode, path aliases (`@/*` → `src/*`)
- **ESLint**: Linting for code quality
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animations and transitions

## 📦 Available Scripts
In the project directory, you can run:

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🖼️ Assets
- `public/profile-konato.jpg`: Profile image
- `public/RReoner_Resume.pdf`: Downloadable resume

## 📝 How to Use
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open** [http://localhost:3000](http://localhost:3000) **in your browser.**

## 🌐 Deployment
Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## 📬 Contact
- **Email:** domasigreoner@gmail.com
- **LinkedIn:** [linkedin.com/in/rreonerjr](https://linkedin.com/in/rreonerjr)
- **GitHub:** [github.com/reyowner](https://github.com/reyowner)
