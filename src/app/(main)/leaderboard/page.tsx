"use client";

import { useLang } from '@/contexts/LanguageContext';
import { Trophy, Zap, Flame, Medal } from 'lucide-react';

const mockLeaderboard = [
  { rank: 1, name: 'CryptoNinja.sol', xp: 12500, streak: 42, avatar: '🥇', wallet: '7xKXt...3fNq' },
  { rank: 2, name: 'RustMaster', xp: 11200, streak: 38, avatar: '🥈', wallet: '4mPQx...8gVr' },
  { rank: 3, name: 'AnchorDev', xp: 9800, streak: 25, avatar: '🥉', wallet: '9kLzW...2hNp' },
  { rank: 4, name: 'SolanaBuilder', xp: 8400, streak: 20, avatar: '🏗️', wallet: '2nFyR...7jKm' },
  { rank: 5, name: 'Web3Wizard', xp: 7600, streak: 18, avatar: '🧙', wallet: '5tGhE...1dWs' },
  { rank: 6, name: 'TokenForger', xp: 6900, streak: 15, avatar: '🪙', wallet: '8cVxZ...4bAq' },
  { rank: 7, name: 'NFTCollector', xp: 5500, streak: 12, avatar: '🎨', wallet: '3pYwK...9eFt' },
  { rank: 8, name: 'DegenDev', xp: 4800, streak: 10, avatar: '💎', wallet: '6rMsJ...0cHv' },
  { rank: 9, name: 'ChainCoder', xp: 3200, streak: 7, avatar: '⛓️', wallet: '1qXbN...5iGu' },
  { rank: 10, name: 'SolNewbie', xp: 1500, streak: 3, avatar: '🐣', wallet: '0wDfL...6kRp' },
];

export default function LeaderboardPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 pt-20 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-amber-500" />
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{t('leaderboard.title')}</h1>
          </div>
          <p className="text-slate-500 dark:text-gray-400 text-lg">{t('leaderboard.subtitle')}</p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
          {[mockLeaderboard[1], mockLeaderboard[0], mockLeaderboard[2]].map((user, idx) => {
            const order = [2, 1, 3];
            const heights = ['h-28', 'h-36', 'h-24'];
            const colors = [
              'from-gray-300 to-gray-400 dark:from-gray-500 dark:to-gray-600',
              'from-amber-400 to-yellow-500 dark:from-amber-500 dark:to-yellow-600',
              'from-orange-300 to-orange-400 dark:from-orange-500 dark:to-orange-600',
            ];

            return (
              <div key={user.rank} className="flex flex-col items-center">
                <div className="text-4xl mb-2">{user.avatar}</div>
                <p className="text-slate-900 dark:text-white font-bold text-sm mb-1 truncate max-w-full">{user.name}</p>
                <p className="text-amber-600 dark:text-amber-400 font-semibold text-xs mb-2">{user.xp.toLocaleString()} XP</p>
                <div className={`w-full ${heights[idx]} rounded-t-xl bg-gradient-to-t ${colors[idx]} flex items-end justify-center pb-3`}>
                  <span className="text-white font-black text-2xl">#{order[idx]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Leaderboard */}
        <div className="rounded-2xl bg-white dark:bg-gray-900/80 border border-slate-200 dark:border-gray-800 overflow-hidden shadow-sm dark:shadow-none">
          <div className="grid grid-cols-[60px_1fr_100px_80px] sm:grid-cols-[60px_1fr_120px_100px_100px] gap-2 p-4 bg-slate-50 dark:bg-gray-800/50 text-slate-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider border-b border-slate-200 dark:border-gray-800">
            <div>Rank</div>
            <div>Builder</div>
            <div className="text-right">XP</div>
            <div className="text-right hidden sm:block">Streak</div>
            <div className="text-right">Wallet</div>
          </div>
          {mockLeaderboard.map((user) => (
            <div
              key={user.rank}
              className={`grid grid-cols-[60px_1fr_100px_80px] sm:grid-cols-[60px_1fr_120px_100px_100px] gap-2 p-4 items-center border-b border-slate-100 dark:border-gray-800/50 hover:bg-slate-50 dark:hover:bg-gray-800/30 transition-colors ${
                user.rank <= 3 ? 'bg-amber-50/50 dark:bg-amber-500/5' : ''
              }`}
            >
              <div className="flex items-center justify-center">
                {user.rank <= 3 ? (
                  <Medal size={20} className={
                    user.rank === 1 ? 'text-amber-500' :
                    user.rank === 2 ? 'text-gray-400' :
                    'text-orange-400'
                  } />
                ) : (
                  <span className="text-slate-500 dark:text-gray-500 font-medium">{user.rank}</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">{user.avatar}</span>
                <span className="text-slate-900 dark:text-white font-medium text-sm truncate">{user.name}</span>
              </div>
              <div className="text-right flex items-center justify-end gap-1">
                <Zap size={12} className="text-amber-500" />
                <span className="text-slate-900 dark:text-white font-semibold text-sm">{user.xp.toLocaleString()}</span>
              </div>
              <div className="text-right hidden sm:flex items-center justify-end gap-1">
                <Flame size={12} className="text-orange-500" />
                <span className="text-slate-600 dark:text-gray-400 text-sm">{user.streak}d</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 dark:text-gray-500 text-xs font-mono">{user.wallet}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
