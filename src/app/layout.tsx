import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SolForge Academy — The Ultimate Interactive Hub for Solana Native Builders",
  description: "Learn Rust, Anchor, and Solana development with interactive coding challenges, earn XP on-chain, and mint cNFT certificates — all in your browser.",
  keywords: ["Solana", "Web3", "Blockchain", "Learn", "Rust", "Anchor", "NFT", "DeFi"],
  openGraph: {
    title: "SolForge Academy",
    description: "The Ultimate Interactive Hub for Solana Native Builders",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
