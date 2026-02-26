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
import { useThemeStore } from "@/store/useThemeStore";
import { MenuHamburger1 } from "@tailgrids/icons";
import { useSidebar } from "fumadocs-ui/provider";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNav from "./header-nav";
import SearchModal from "./search-modal";
import VersionDropdown from "./version-dropdown";

export default function GlobalHeader() {
  const { open, setOpen } = useSidebar();
  const { theme, setTheme } = useTheme();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const setSandboxTheme = useThemeStore(state => state.setTheme);

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    setSandboxTheme(nextTheme);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full   bg-white 0 dark:bg-gray-950">
        <div className="border-b dark:border-gray-800 border-gray-200 ">
          <div className="relative mx-auto max-w-405 h-20 flex items-center px-4 2xl:px-8">
            {/* LEFT SECTION */}
            <div className="flex items-center gap-6  min-w-0">
              {/* Logo */}
              <Link
                href="https://tailgrids.com"
                className="flex shrink-0 items-center gap-2"
              >
                <Image
                  src={LogoLightMode}
                  width={150}
                  height={40}
                  className="dark:hidden max-[400px]:w-30"
                  alt="Tailgrids Logo"
                />
                <Image
                  src={LogoDarkMode}
                  width={150}
                  height={40}
                  className="not-dark:hidden max-[400px]:w-30"
                  alt="Tailgrids Logo"
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
                  onClick={() => setIsSearchOpen(true)}
                  className="group flex md:h-10.5 max-2xl:pr-1.5 max-2xl:pl-2 max-2xl:py-1 2xl:h-11 2xl:w-65  dark:bg-white/5 items-center gap-1.5 2xl:gap-3 rounded-xl border border-gray-200 bg-white px-3 text-gray-400 dark:border-[#111827] transition hover:bg-gray-50 dark:hover:bg-white/10"
                >
                  <SearchIcon className="size-5" />

                  <span className="hidden 2xl:flex text-sm flex-1">
                    Quick search...
                  </span>

                  <span className="flex h-6.5 w-10 bg-white items-center dark:border-[#111827] justify-center rounded-lg border border-gray-100 text-xs  dark:bg-white/10 dark:group-hover:border-transparent">
                    ⌘ K
                  </span>
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={handleThemeToggle}
                  className="hidden sm:flex size-10 shrink-0 items-center cursor-pointer justify-center dark:shadow-none dark:border-[#111827] dark:bg-white/5 rounded-xl shadow-navbar-icon  transition  hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <SunIcon className="block dark:hidden text-gray-500" />
                  <MoonIcon className="hidden dark:block text-gray-400" />
                </button>
              </div>
              <div className="hidden md:flex gap-4">
                <div className="items-center gap-2 flex">
                  <a
                    href="https://x.com/tailgrids"
                    className="flex size-8 items-center justify-center rounded-[9px] dark:shadow-none shadow-navbar-icon dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-none cursor-pointer dark:bg-white/5 dark:border-[#111827] "
                  >
                    <XIcon className="size-5 text-gray-400" />
                  </a>
                  <a
                    href="https://github.com/tailgrids/tailgrids"
                    className="flex size-8 items-center justify-center dark:shadow-none shadow-navbar-icon dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-none rounded-[9px] cursor-pointer dark:bg-white/5 dark:border-[#111827]"
                  >
                    <GithubIcon className="size-5 text-gray-400" />
                  </a>
                  <a
                    href="https://pimjo.com/community"
                    className="flex size-8 items-center justify-center rounded-[9px] dark:shadow-none shadow-navbar-icon dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-none cursor-pointer dark:bg-white/5 dark:border-[#111827]"
                  >
                    <DiscordIcon className="size-5 text-gray-400" />
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://tailgrids.com/signin"
                    className="text-gray-700 dark:text-gray-400 font-medium text-base hover:text-tg-text-color-secondary"
                  >
                    Account
                  </a>

                  <a
                    className="custom-link-btn-blue 
                  "
                    href="https://tailgrids.com/pricing"
                  >
                    Pricing & FAQ
                  </a>
                </div>
              </div>

              {/* Mobile Menu - Hidden on lg+ where sidebar is always visible */}
              {/* Mobile Search Button */}

              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary-500"
              >
                <MenuHamburger1 className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
