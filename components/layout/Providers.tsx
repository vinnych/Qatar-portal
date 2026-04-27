"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { LanguageProvider, Language } from "@/lib/i18n";

export function Providers({ children, initialLanguage }: { children: ReactNode, initialLanguage?: Language }) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}
