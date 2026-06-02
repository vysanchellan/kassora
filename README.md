# Kassora — SaaS Marketing Website

A futuristic, production-grade marketing website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Deployment**: Vercel

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done ✓

## Project Structure

```
kassora/
├── app/
│   ├── globals.css         # Global styles, fonts, animations
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page composition
├── components/
│   ├── ui/
│   │   ├── entropy.tsx           # Particle entropy canvas (loading screen)
│   │   ├── radar-effect.tsx      # Radar sweep animation (features)
│   │   └── confetti-background.tsx # Floating confetti (global)
│   ├── Navbar.tsx
│   ├── HeroSection.tsx     # Loading intro + hero copy
│   ├── FeaturesSection.tsx # Radar display + feature grid
│   ├── PricingSection.tsx  # 3-tier pricing cards
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

- **Colors**: Edit CSS variables in `app/globals.css` — the palette uses deep navy (`#020818`), electric blue (`#0ea5e9`), and silver
- **Content**: Update pricing, features, and copy directly in each section component
- **Fonts**: Bebas Neue (display) + DM Sans (body) + JetBrains Mono — swap in `globals.css` `@import` line
- **Contact form**: Connect to an email service (Resend, SendGrid, Formspree) by replacing the `handleSubmit` in `ContactSection.tsx`
