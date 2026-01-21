"use client";

import LogoDarkMode from "@/assets/logo/dark-mode.svg";
import LogoLightMode from "@/assets/logo/light-mode.svg";
import {
  DiscordIcon,
  GithubIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  XIcon
} from "@/icons";
import { useSearchContext, useSidebar } from "fumadocs-ui/provider";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./header-nav";
import VersionDropdown from "./version-dropdown";

export default function GlobalHeader() {
  const { setOpenSearch } = useSearchContext();
  const { open, setOpen } = useSidebar();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full   bg-white 0 dark:bg-gray-950">
      <div className="border-b dark:border-gray-800 border-gray-200 ">
        <div className="relative mx-auto max-w-[1620px] h-20 flex items-center px-4 2xl:px-8">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-6  min-w-0">
            {/* Logo */}
            <Link
              href="https://staging.tailgrids.com"
              className="flex shrink-0 items-center gap-2"
            >
              <Image
                src={LogoLightMode}
                width={150}
                height={40}
                className="dark:hidden"
                alt="TailGrids Logo"
              />
              <Image
                src={LogoDarkMode}
                width={150}
                height={40}
                className="not-dark:hidden"
                alt="TailGrids Logo"
              />
            </Link>

            <VersionDropdown />

            {/* Navigation */}
            <HeaderNav />
          </div>

          {/* RIGHT SECTION */}
          <div className="flex  justify-end items-center gap-5 flex-1 min-w-0">
            <div className="flex gap-3 items-center">
              <button
                onClick={() => setOpenSearch(true)}
                className="hidden lg:flex h-11 w-[260px] xl:w-[250px]  dark:bg-white/5 items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 text-gray-400 dark:border-[#111827] transition"
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
                className="hidden lg:flex size-10 shrink-0 items-center cursor-pointer justify-center dark:shadow-none dark:border-[#111827] dark:bg-white/5 rounded-xl shadow-navbar-icon  transition"
              >
                <SunIcon className="block dark:hidden text-gray-500" />
                <MoonIcon className="hidden dark:block text-gray-400" />
              </button>
            </div>
            <div className="hidden md:flex gap-6">
              <div className="items-center gap-2 flex">
                <a className="flex size-8 items-center justify-center rounded-[9px] dark:shadow-none shadow-navbar-icon dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-none cursor-pointer dark:bg-white/5 dark:border-[#111827] ">
                  <XIcon className="size-5 text-gray-400" />
                </a>
                <a className="flex size-8 items-center justify-center dark:shadow-none shadow-navbar-icon dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-none rounded-[9px] cursor-pointer dark:bg-white/5 dark:border-[#111827]">
                  <GithubIcon className="size-5 text-gray-400" />
                </a>
                <a className="flex size-8 items-center justify-center rounded-[9px] dark:shadow-none shadow-navbar-icon dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-none cursor-pointer dark:bg-white/5 dark:border-[#111827]">
                  <DiscordIcon className="size-5 text-gray-400" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://staging.tailgrids.com/signin"
                  className="text-gray-700 dark:text-gray-400 font-medium text-base hover:text-tg-text-color-secondary"
                >
                  Account
                </a>
                <a
                  className="custom-link-btn-blue ml-4
                  "
                  href="https://staging.tailgrids.com/pricing"
                >
                  Pricing & Faq
                </a>
              </div>
            </div>
            {/* Mobile Menu - Hidden on lg+ where sidebar is always visible */}
            {/* Mobile Search Button */}
            <button
              onClick={() => setOpenSearch(true)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-primary-500"
            >
              <SearchIcon className="size-6" />
            </button>
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
