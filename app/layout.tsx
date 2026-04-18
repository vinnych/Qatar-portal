import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

import { pageMeta, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";

export const metadata = pageMeta({
  title: `${SITE_NAME} — Independent Community Guide`,
  description: SITE_DESCRIPTION,
  path: "/",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <Providers>
          <OrganizationSchema />
          <WebSiteSchema />
          <main className="flex-grow">{children}</main>
          <ThemeToggle />
          <footer className="p-10 border-t border-brand-gold/15 flex flex-wrap justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="/about" className="px-5 py-2 rounded-full bg-white/70 dark:bg-brand-obsidian/30 text-foreground/80 dark:text-brand-gold hover:text-accent transition-all hover:scale-105 active:scale-95 border border-brand-gold/20 shadow-sm hover:shadow-xl">About</a>
            <a href="/privacy" className="px-5 py-2 rounded-full bg-white/70 dark:bg-brand-obsidian/30 text-foreground/80 dark:text-brand-gold hover:text-accent transition-all hover:scale-105 active:scale-95 border border-brand-gold/20 shadow-sm hover:shadow-xl">Privacy</a>
            <a href="/terms" className="px-5 py-2 rounded-full bg-white/70 dark:bg-brand-obsidian/30 text-foreground/80 dark:text-brand-gold hover:text-accent transition-all hover:scale-105 active:scale-95 border border-brand-gold/20 shadow-sm hover:shadow-xl">Terms</a>
            <a href="/disclaimer" className="px-5 py-2 rounded-full bg-white/70 dark:bg-brand-obsidian/30 text-foreground/80 dark:text-brand-gold hover:text-accent transition-all hover:scale-105 active:scale-95 border border-brand-gold/20 shadow-sm hover:shadow-xl">Disclaimer</a>
          </footer>

        </Providers>
      </body>
    </html>
  );
}
