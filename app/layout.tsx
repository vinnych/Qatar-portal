import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arabiakhaleej.com"),
  verification: { google: "fg-taPtjNWtu89uOmajC0OB3XxlZapUPAIItSnSnBQo" },
  title: "Arabia Khaleej",
  description: "Independent community guide for the GCC region.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-slate/20 via-brand-obsidian to-brand-obsidian text-brand-champagne antialiased`}>
        <main className="flex-grow">{children}</main>
        <footer className="p-8 border-t border-brand-gold/10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold/30">
          <a href="/about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="/privacy" className="hover:text-brand-gold transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-brand-gold transition-colors">Terms</a>
          <a href="/disclaimer" className="hover:text-brand-gold transition-colors">Disclaimer</a>
        </footer>
      </body>
    </html>
  );
}
