<p align="center">
  <img src="https://img.shields.io/badge/Solana-Devnet-14F195?style=for-the-badge&logo=solana&logoColor=white" alt="Solana Devnet" />
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License" />
</p>

<h1 align="center">SolForge Academy</h1>

<p align="center">
  <strong>The Ultimate Interactive Hub for Solana Native Builders</strong>
</p>

<p align="center">
  A gamified, interactive learning platform for mastering Solana blockchain development.<br/>
  Write real Solana programs in your browser, earn XP, collect NFT certificates, and compete on the leaderboard.
</p>

<p align="center">
  <a href="https://solforge-academy.vercel.app">Live Demo</a> &bull;
  <a href="#getting-started">Getting Started</a> &bull;
  <a href="#features">Features</a> &bull;
  <a href="#tech-stack">Tech Stack</a> &bull;
  <a href="./ARCHITECTURE.md">Architecture</a>
</p>

---

## Features

- **In-Browser Code Editor** -- Write and test Rust, TypeScript, and Anchor code with Monaco Editor (VS Code engine)
- **Course Detail Pages** -- Rich course pages with overview, learning objectives, prerequisites, and full syllabus
- **Split-Screen Learning** -- Left panel for lesson content (Markdown), right panel for live code editor
- **Web3 Gamification** -- Earn XP tokens, level up, maintain daily streaks, unlock achievements
- **cNFT Certificates** -- Mint compressed NFT certificates via Metaplex Bubblegum on course completion
- **Multi-Auth System** -- Connect with Phantom, Solflare (Solana wallets), Google, or GitHub (OAuth)
- **Multi-Language** -- Full i18n support for English, Portuguese (BR), and Spanish
- **Dark/Light Mode** -- Modern glassmorphism design with seamless theme toggle
- **Leaderboard** -- Compete with other builders globally
- **Service Layer Architecture** -- Clean service interfaces ready for real Smart Contract integration

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 + shadcn/ui (New York style) |
| **Code Editor** | Monaco Editor (`@monaco-editor/react`) |
| **Markdown** | react-markdown |
| **Authentication** | NextAuth.js v5 (Google, GitHub) + Solana Wallet Adapter (Phantom, Solflare) |
| **Blockchain** | Solana Web3.js + Wallet Adapter + Helius DAS API |
| **Icons** | Lucide React |
| **UI Primitives** | Radix UI (via shadcn/ui) |
| **Error Monitoring** | Sentry (client + server + edge) |
| **Analytics** | Google Analytics 4 (via @next/third-parties) |
| **Deployment** | Vercel |

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Route group with Navbar + Footer
│   │   ├── page.tsx              # Home / Landing Page
│   │   ├── courses/
│   │   │   ├── page.tsx          # Course Catalog Grid
│   │   │   └── [slug]/page.tsx   # Course Detail Page (NEW)
│   │   ├── dashboard/page.tsx    # Builder Dashboard
│   │   ├── leaderboard/page.tsx  # Leaderboard
│   │   └── profile/page.tsx      # User Profile
│   ├── lesson/[courseId]/        # Split-screen Lesson View
│   ├── api/
│   │   ├── auth/[...nextauth]/   # NextAuth API Route
│   │   └── nfts/[wallet]/        # Helius DAS API proxy (cNFT reading)
│   ├── layout.tsx                # Root Layout
│   ├── providers.tsx             # All Context Providers
│   └── globals.css               # Global Styles
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── shared/                   # AuthModal, CodeEditor, Hero
│   └── ui/                       # shadcn/ui (badge, button, dialog, etc.)
├── contexts/
│   ├── AuthContext.tsx            # Unified auth (wallet + social) + game state
│   ├── ServiceContext.tsx         # Service layer (enrollment, lesson completion)
│   ├── LanguageContext.tsx        # i18n context
│   ├── ThemeContext.tsx           # Dark/Light theme
│   └── WalletProvider.tsx        # Solana Wallet Adapter
├── data/
│   └── courses.ts                # 5 courses, 15 lessons, achievements
├── i18n/
│   └── translations.ts           # EN, PT-BR, ES translations
├── hooks/
│   └── useNFTs.ts                # Custom hook for fetching on-chain cNFTs
├── services/
│   └── interfaces.ts             # Service interfaces + stub implementations
├── lib/
│   ├── auth.ts                   # NextAuth.js configuration
│   └── utils.ts                  # Utility functions
└── types/
    └── next-auth.d.ts            # NextAuth type augmentations
```

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (or yarn/pnpm)
- A Solana wallet browser extension (optional, for wallet auth): [Phantom](https://phantom.app/) or [Solflare](https://solflare.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/panzauto46-bot/SolForge-Academy.git
cd SolForge-Academy

# Install dependencies
npm install

# Copy environment variables template
cp .env.local.example .env.local
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# NextAuth.js (Required)
NEXTAUTH_SECRET=your_random_secret_here    # generate with: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (optional - for Google login)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth (optional - for GitHub login)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Solana (optional - defaults shown)
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com

# Helius DAS API (optional - for reading on-chain cNFT certificates)
HELIUS_API_KEY=your_helius_api_key

# Google Analytics 4 (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Sentry Error Monitoring (optional)
NEXT_PUBLIC_SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0
```

> **Note:** Only `NEXTAUTH_SECRET` and `NEXTAUTH_URL` are required. All other variables are optional -- features gracefully degrade when not configured. Wallet connection works without any environment variables.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build & Production

```bash
npm run build
npm start
```

## Deployment (Vercel)

This project is optimized for [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables in **Settings > Environment Variables**:
   - `NEXTAUTH_SECRET` (required)
   - `NEXTAUTH_URL` (your Vercel domain, e.g., `https://your-app.vercel.app`)
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` (for Google OAuth)
   - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` (for GitHub OAuth)
   - `HELIUS_API_KEY` (for on-chain cNFT reading)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (for Google Analytics)
   - `NEXT_PUBLIC_SENTRY_DSN` (for error monitoring)
4. Deploy -- Vercel auto-detects Next.js

> **OAuth Callback URLs:**
> - Google: `https://your-domain.vercel.app/api/auth/callback/google`
> - GitHub: `https://your-domain.vercel.app/api/auth/callback/github`

## Courses

| # | Course | Level | Lessons | XP |
|---|--------|-------|---------|-----|
| 1 | Solana 101: Foundations | Beginner | 3 | 800 |
| 2 | Anchor Framework Essentials | Intermediate | 3 | 1,200 |
| 3 | Solana Web3.js Client | Beginner | 3 | 800 |
| 4 | SPL Token Mastery | Intermediate | 3 | 1,200 |
| 5 | NFTs with Metaplex | Advanced | 3 | 1,600 |

## Roadmap

### Phase 1: Concept & UI/UX
- [x] Theme & Design (Dark Mode Glassmorphism)
- [x] Landing Page (Hero, Features, Stats)
- [x] Course Catalog (Card UI)
- [x] Multi-Auth Modal Design

### Phase 2: Next.js Migration & Architecture
- [x] Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- [x] shadcn/ui + Radix for interactive components
- [x] Reusable React components & route groups
- [x] Routing (/courses, /dashboard, /leaderboard, /profile)

### Phase 3: Web3 & Authentication
- [x] Solana Wallet Adapter (Phantom, Solflare)
- [x] NextAuth.js v5 (Google, GitHub OAuth)
- [x] Unified AuthContext (wallet + social)
- [x] Environment variables & Vercel deployment

### Phase 4: LMS Engine & Content
- [x] Extended course data model (overview, objectives, prerequisites, syllabus)
- [x] Course detail pages (/courses/[slug])
- [x] Enhanced split-screen lesson view with Markdown rendering
- [x] Service layer architecture (ServiceContext with stub implementations)
- [x] i18n translations for all new features

### Phase 5: Killer Features (IDE & Gamification)
- [x] In-browser Monaco Editor with syntax highlighting (Rust, TypeScript, JSON)
- [x] Pass/Fail code checking with keyword-based validation
- [x] XP Balance & Level system (Level = floor(sqrt(xp/100)))
- [x] Streak calendar (28-day grid) & interactive leaderboard with user ranking
- [x] Helius DAS API integration for reading on-chain cNFT certificates

### Phase 6: Final Polish
- [x] Complete i18n coverage (100+ keys across EN, PT-BR, ES)
- [x] Google Analytics 4 integration
- [x] Sentry error monitoring (client + server + edge)
- [x] Lighthouse accessibility optimizations (skip links, ARIA, semantic HTML)
- [x] Technical documentation (README.md, ARCHITECTURE.md)

### Phase 7: Smart Contracts & Production (Next)
- [ ] Anchor program integration for on-chain XP
- [ ] Real cNFT certificate minting via Metaplex Bubblegum
- [ ] On-chain leaderboard from token balances
- [ ] Database integration (PostgreSQL / Supabase)
- [ ] Advanced SEO & performance optimization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

<p align="center">
  Built with love for the Solana ecosystem<br/>
  <sub>SolForge Academy &copy; 2025-2026</sub>
</p>
