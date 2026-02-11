"use client";

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
      themes={["light", "dark", "navy", "rose", "mint"]}
    >
      {children}
    </NextThemesProvider>
  );
}

// Re-export useTheme with consistent API
export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();

  return {
    theme,
    resolvedTheme,
    setTheme,
  };
}
