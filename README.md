# SolForge Academy

> **The Ultimate Interactive Hub for Solana Native Builders**

SolForge Academy is a gamified, interactive learning platform for mastering Solana blockchain development. Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

![SolForge Academy](https://img.shields.io/badge/Solana-Devnet-green?style=for-the-badge&logo=solana) ![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)

## Features

- **In-Browser IDE** -- Write and test Rust, TypeScript, and Anchor code with Monaco Editor
- **Web3 Gamification** -- Earn XP tokens, level up, maintain streaks, unlock achievements
- **cNFT Certificates** -- Mint compressed NFT certificates via Metaplex Bubblegum
- **Multi-Auth System** -- Connect with Phantom, Solflare, Google, or GitHub
- **Multi-Language** -- English, Portuguese (BR), Spanish
- **Dark/Light Mode** -- Glassmorphism design with theme toggle
- **Leaderboard** -- Compete with other builders globally
- **Clean Architecture** -- Service interfaces ready for real Smart Contract integration

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Code Editor | Monaco Editor (@monaco-editor/react) |
| Icons | Lucide React |
| UI Components | Radix UI (via shadcn/ui) |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── (main)/                 # Route group with Navbar + Footer
│   │   ├── page.tsx            # Home / Landing Page
│   │   ├── courses/page.tsx    # Course Catalog
│   │   ├── dashboard/page.tsx  # Builder Dashboard
│   │   ├── leaderboard/page.tsx # Leaderboard
│   │   └── profile/page.tsx    # User Profile
│   ├── lesson/[courseId]/      # Dynamic Lesson View
│   ├── layout.tsx              # Root Layout
│   ├── providers.tsx           # Context Providers
│   └── globals.css             # Global Styles
├── components/
│   ├── layout/                 # Layout components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   └── Footer.tsx          # Footer
│   ├── shared/                 # Reusable components
│   │   ├── AuthModal.tsx       # Authentication modal
│   │   ├── CodeEditor.tsx      # Monaco code editor
│   │   └── Hero.tsx            # Hero section
│   └── ui/                     # shadcn/ui components
├── contexts/                   # React Context providers
│   ├── AuthContext.tsx          # Authentication state
│   ├── LanguageContext.tsx      # i18n translations
│   └── ThemeContext.tsx         # Dark/Light theme
├── data/
│   └── courses.ts              # Course & lesson data
├── i18n/
│   └── translations.ts         # EN, PT-BR, ES translations
├── services/
│   └── interfaces.ts           # Smart contract service interfaces
└── lib/
    └── utils.ts                # Utility functions (cn)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/panzauto46-bot/SolForge-Academy.git
cd SolForge-Academy

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build

```bash
npm run build
npm start
```

## Deployment (Vercel)

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Next.js -- no extra configuration needed
4. Click **Deploy**

## Roadmap

### Phase 1: Concept & UI/UX (DONE)
- [x] Theme & Design (Dark Mode Glassmorphism)
- [x] Landing Page (Hero, Features, Stats)
- [x] Course Catalog (Card UI)
- [x] Multi-Auth Modal (Solana Wallet + Google/GitHub)

### Phase 2: Next.js Migration & Architecture (DONE)
- [x] Next.js 16 (App Router) with TypeScript & Tailwind CSS
- [x] shadcn/ui + Radix for interactive components
- [x] Reusable React components
- [x] Routing (/courses, /dashboard, /leaderboard, /profile)

### Phase 3: Backend & Smart Contracts (Next)
- [ ] Solana program integration (Anchor)
- [ ] Real wallet connection (Phantom, Solflare)
- [ ] On-chain XP token system
- [ ] cNFT certificate minting via Metaplex Bubblegum
- [ ] Leaderboard from on-chain data

### Phase 4: Production
- [ ] Database integration (PostgreSQL / Supabase)
- [ ] Real authentication (NextAuth.js)
- [ ] API routes for course progress
- [ ] SEO optimization
- [ ] Performance optimization

## License

MIT

---

Built with love for the Solana ecosystem
