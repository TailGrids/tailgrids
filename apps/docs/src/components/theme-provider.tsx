"use client";

import { useThemeStore } from "@/store/useThemeStore";
import { useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useThemeStore(state => state.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const html = document.documentElement;
      html.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  return <>{children}</>;
}
