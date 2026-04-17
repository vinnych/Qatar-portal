import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arabiakhaleej.com"),
  verification: { google: "fg-taPtjNWtu89uOmajC0OB3XxlZapUPAIItSnSnBQo" },
  title: "Arabia Khaleej",
  description: "Independent community guide for the GCC region.",
  icons: {
    icon: "/favicon-emblem.png",
    apple: "/favicon-emblem.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Providers>
          <main className="flex-grow">{children}</main>
          <ThemeToggle />
          <footer className="p-8 border-t border-brand-gold/10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold/30">
            <a href="/about" className="hover:text-brand-gold transition-colors">About</a>
            <a href="/privacy" className="hover:text-brand-gold transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-brand-gold transition-colors">Terms</a>
            <a href="/disclaimer" className="hover:text-brand-gold transition-colors">Disclaimer</a>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
