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
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="flex-grow p-8">{children}</main>
        <footer className="p-8 border-t border-slate-200 flex gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/disclaimer">Disclaimer</a>
        </footer>
      </body>
    </html>
  );
}
