"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/icons";

export default function ThemeToggleLink() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" flex size-9 shrink-0 items-center cursor-pointer justify-center dark:shadow-none dark:border-[#111827] dark:bg-white/5 rounded-xl shadow-navbar-icon  transition"
      aria-label="Toggle Theme"
    >
      <SunIcon className="size-4 text-gray-600 dark:text-gray-400 dark:hidden" />
      <MoonIcon className="size-4 text-gray-400 not-dark:hidden" />
    </button>
  );
}
