"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useSearchContext } from "fumadocs-ui/provider";
import { useSidebar } from "fumadocs-ui/provider";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  DiscordIcon,
  GithubIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  XIcon,
} from "@/icons";
import VersionDropdown from "./version-dropdown";
import HeaderNav from "./header-nav";

export default function GlobalHeader() {
  const { setOpenSearch } = useSearchContext();
  const { open, setOpen } = useSidebar();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 w-full   bg-white 0 dark:bg-gray-950">
      <div className="border-b dark:border-gray-800 border-gray-200 ">
        <div className="relative mx-auto max-w-[1620px] h-20 flex items-center px-4 2xl:px-8">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-6 flex-1 min-w-0">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <Image
                src="/images/logo.svg"
                width={150}
                height={40}
                className="block dark:hidden"
                alt="TailGrids Logo"
              />
              <Image
                src="/images/logo-white.svg"
                width={150}
                height={40}
                className="hidden dark:block"
                alt="TailGrids Logo"
              />
            </Link>

            <VersionDropdown />

            {/* Navigation */}
            <HeaderNav />
          </div>

          {/* CENTER — SEARCH + THEME (CENTERED ABSOLUTE) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 xl:ml-25">
            {/* Search */}
            <button
              onClick={() => setOpenSearch(true)}
              className="hidden lg:flex h-11 w-[260px] xl:w-[350px]  dark:bg-white/5 items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 text-gray-400 dark:border-[#111827] transition"
            >
              <SearchIcon className="size-5" />
              <span className="hidden xl:flex text-sm flex-1">
                Quick search...
              </span>
              <span className="hidden xl:flex h-6.5 w-10 items-center dark:border-[#111827] justify-center rounded-lg border border-gray-100 text-xs">
                ⌘ K
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden lg:flex size-11 shrink-0 items-center cursor-pointer justify-center dark:shadow-none dark:border-[#111827] dark:bg-white/5 rounded-xl shadow-navbar-icon  transition"
            >
              <SunIcon className="block dark:hidden text-gray-500" />
              <MoonIcon className="hidden dark:block text-gray-400" />
            </button>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex justify-end items-center gap-4 flex-1 min-w-0">
            <div className="hidden md:flex items-center gap-2">
              <a className="flex size-8 items-center justify-center rounded-[9px] dark:shadow-none shadow-navbar-icon dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-none cursor-pointer dark:bg-white/5 dark:border-[#111827] ">
                <XIcon className="size-5 text-gray-400" />
              </a>

              <a className="flex size-8 items-center justify-center dark:shadow-none shadow-navbar-icon dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-none rounded-[9px] cursor-pointer dark:bg-white/5 dark:border-[#111827]">
                <GithubIcon className="size-5 text-gray-400" />
              </a>

              <a className="flex size-8 items-center justify-center rounded-[9px] dark:shadow-none shadow-navbar-icon dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-none cursor-pointer dark:bg-white/5 dark:border-[#111827]">
                <DiscordIcon className="size-5 text-gray-400" />
              </a>

              <a href="https://tailgrids.com/pro" className="custom-link-btn">
                Tailgrids Pro
              </a>
            </div>

            {/* Mobile Menu - Hidden on lg+ where sidebar is always visible */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary-500"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
