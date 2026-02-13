"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Code, Users, Award } from 'lucide-react';
import { AuthModal } from './AuthModal';

export function Hero() {
  const { t } = useLang();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [authOpen, setAuthOpen] = useState(false);

  const handleCTA = () => {
    if (isAuthenticated) {
      router.push('/courses');
    } else {
      setAuthOpen(true);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-gray-950 transition-colors">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.05),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700/50 mb-8 shadow-sm dark:shadow-none">
            <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
            <span className="text-sm text-slate-600 dark:text-gray-300">Solana Devnet</span>
            <span className="text-slate-300 dark:text-gray-600">&bull;</span>
            <span className="text-sm text-slate-500 dark:text-gray-400">Season 1 Live</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">
            Sol<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400">Forge</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-500 dark:text-gray-300">Academy</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-300 dark:to-cyan-300 font-medium mb-4 max-w-2xl mx-auto">
            {t('hero.tagline')}
          </p>

          <p className="text-slate-500 dark:text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={handleCTA}
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:scale-105"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => router.push('/courses')}
              className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-gray-700 text-slate-600 dark:text-gray-300 font-semibold text-lg hover:bg-white dark:hover:bg-gray-800/50 hover:border-slate-400 dark:hover:border-gray-600 transition-all shadow-sm dark:shadow-none"
            >
              {t('hero.cta2')}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-gray-800/40 border border-slate-200 dark:border-gray-700/30 backdrop-blur shadow-sm dark:shadow-none">
              <Code className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white">5+</div>
              <div className="text-xs text-slate-500 dark:text-gray-500">{t('hero.stats.courses')}</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-gray-800/40 border border-slate-200 dark:border-gray-700/30 backdrop-blur shadow-sm dark:shadow-none">
              <Users className="w-6 h-6 mx-auto mb-2 text-cyan-600 dark:text-cyan-400" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white">1.2K</div>
              <div className="text-xs text-slate-500 dark:text-gray-500">{t('hero.stats.builders')}</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-gray-800/40 border border-slate-200 dark:border-gray-700/30 backdrop-blur shadow-sm dark:shadow-none">
              <Award className="w-6 h-6 mx-auto mb-2 text-amber-500 dark:text-amber-400" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white">890</div>
              <div className="text-xs text-slate-500 dark:text-gray-500">{t('hero.stats.nfts')}</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 text-slate-300 dark:text-gray-600 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-gray-700 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-slate-400 dark:bg-gray-500 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
