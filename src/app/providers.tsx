"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { WalletContextProvider } from "@/contexts/WalletProvider";
import { AuthProvider } from "@/contexts/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <LanguageProvider>
          <WalletContextProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </WalletContextProvider>
        </LanguageProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
