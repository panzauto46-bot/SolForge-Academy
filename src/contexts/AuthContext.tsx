"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export interface UserProfile {
  id: string;
  displayName: string;
  avatar: string;
  walletAddress?: string;
  authProvider: 'phantom' | 'solflare' | 'google' | 'github';
  xp: number;
  level: number;
  streak: number;
  streakDates: string[];
  enrolledCourses: string[];
  completedLessons: string[];
  completedCourses: string[];
  achievements: string[];
  nftCertificates: { courseId: string; mintAddress: string; mintedAt: string }[];
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (provider: 'phantom' | 'solflare' | 'google' | 'github') => void;
  logout: () => void;
  addXP: (amount: number) => void;
  enrollCourse: (courseId: string) => void;
  completeLesson: (lessonId: string) => void;
  completeCourse: (courseId: string) => void;
  addAchievement: (achievementId: string) => void;
  recordStreak: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function generateWallet(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789';
  let result = '';
  for (let i = 0; i < 44; i++) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function calcLevel(xp: number): number {
  return Math.floor(xp / 500) + 1;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  const login = useCallback((provider: 'phantom' | 'solflare' | 'google' | 'github') => {
    const names: Record<string, string> = {
      phantom: 'Phantom Builder',
      solflare: 'Solflare Dev',
      google: 'Google Builder',
      github: 'GitHub Builder',
    };
    const today = new Date().toISOString().split('T')[0];
    setUser({
      id: crypto.randomUUID(),
      displayName: names[provider],
      avatar: provider[0].toUpperCase(),
      authProvider: provider,
      walletAddress: ['phantom', 'solflare'].includes(provider) ? generateWallet() : undefined,
      xp: 0,
      level: 1,
      streak: 1,
      streakDates: [today],
      enrolledCourses: [],
      completedLessons: [],
      completedCourses: [],
      achievements: ['first_login'],
      nftCertificates: [],
    });
  }, []);

  const logout = useCallback(() => setUser(null), []);

  const addXP = useCallback((amount: number) => {
    setUser(prev => {
      if (!prev) return prev;
      const newXP = prev.xp + amount;
      return { ...prev, xp: newXP, level: calcLevel(newXP) };
    });
  }, []);

  const enrollCourse = useCallback((courseId: string) => {
    setUser(prev => {
      if (!prev || prev.enrolledCourses.includes(courseId)) return prev;
      return { ...prev, enrolledCourses: [...prev.enrolledCourses, courseId] };
    });
  }, []);

  const completeLesson = useCallback((lessonId: string) => {
    setUser(prev => {
      if (!prev || prev.completedLessons.includes(lessonId)) return prev;
      return { ...prev, completedLessons: [...prev.completedLessons, lessonId] };
    });
  }, []);

  const completeCourse = useCallback((courseId: string) => {
    setUser(prev => {
      if (!prev || prev.completedCourses.includes(courseId)) return prev;
      const mintAddress = generateWallet();
      return {
        ...prev,
        completedCourses: [...prev.completedCourses, courseId],
        nftCertificates: [
          ...prev.nftCertificates,
          { courseId, mintAddress, mintedAt: new Date().toISOString() },
        ],
      };
    });
  }, []);

  const addAchievement = useCallback((achievementId: string) => {
    setUser(prev => {
      if (!prev || prev.achievements.includes(achievementId)) return prev;
      return { ...prev, achievements: [...prev.achievements, achievementId] };
    });
  }, []);

  const recordStreak = useCallback(() => {
    setUser(prev => {
      if (!prev) return prev;
      const today = new Date().toISOString().split('T')[0];
      if (prev.streakDates.includes(today)) return prev;
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const isConsecutive = prev.streakDates.includes(yesterday);
      return {
        ...prev,
        streakDates: [...prev.streakDates, today],
        streak: isConsecutive ? prev.streak + 1 : 1,
      };
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        addXP,
        enrollCourse,
        completeLesson,
        completeCourse,
        addAchievement,
        recordStreak,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be within AuthProvider');
  return ctx;
}
