"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DownArrowIcon, HamburgerIcon } from "../ui/icons";
import ComponentsDropdown from "./ComponentsDropdown";
import { menuData } from "./menuData";
import MobileMenu from "./MobileMenu";

import ProductsDropdown from "./ProductsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

export default function NavbarWrapper() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDropdown(null);
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <header className="px-6 py-1 max-lg:py-4 lg:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0 pr-10">
          <Link href="/">
            <Image
              src="/images/tailgrids-full-logo.svg"
              alt="Logo"
              width={142}
              height={42}
              quality={100}
            />
          </Link>
        </div>

        <div className="flex w-full items-center justify-end lg:justify-between">
          {/* Main Navigation */}
          <nav className="max-lg:hidden">
            <ul className="flex items-center gap-2">
              {menuData.map((menuItem, index) => {
                const hasDropdown =
                  menuItem.children && menuItem.children.length > 0;
                const isOpen = openDropdown === menuItem.title;

                return (
                  <li
                    key={index}
                    className={cn("group relative inline-flex py-5.5")}
                    onMouseEnter={() =>
                      hasDropdown && setOpenDropdown(menuItem.title)
                    }
                    onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                  >
                    {menuItem?.path ? (
                      <Link
                        href={menuItem.path}
                        target={menuItem.external ? "_blank" : "_self"}
                        className="inline-flex items-center gap-0.5 rounded-lg px-2 py-1.5 text-sm font-medium text-tg-text-color duration-200 hover:bg-gray-100 hover:text-tg-title-color"
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          className="inline-flex items-center gap-0.5 rounded-lg px-2 py-1.5 text-sm font-medium text-tg-text-color duration-200 hover:bg-gray-100 hover:text-tg-title-color"
                          onClick={() =>
                            setOpenDropdown(isOpen ? null : menuItem.title)
                          }
                        >
                          {menuItem.title}
                          <span
                            className={cn("duration-200", {
                              "-scale-y-100": isOpen
                            })}
                          >
                            <DownArrowIcon className="size-3.5" />
                          </span>
                        </button>

                        {menuItem?.title === "Blocks" && (
                          <ComponentsDropdown
                            menuItem={menuItem}
                            isOpen={isOpen}
                          />
                        )}
                        {menuItem?.title === "Products" && (
                          <ProductsDropdown
                            menuItem={menuItem}
                            isOpen={isOpen}
                          />
                        )}
                        {menuItem?.title === "Resources" && (
                          <ResourcesDropdown
                            menuItem={menuItem}
                            isOpen={isOpen}
                          />
                        )}
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className="flex size-10 items-center justify-center rounded-xl border border-tg-border-1 shadow-menu-button drop-shadow-menu-button lg:hidden"
            onClick={() => setShowMobileMenu(true)}
          >
            <HamburgerIcon className="size-5 text-gray-800" />
          </button>

          <MobileMenu
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        </div>
      </div>
    </header>
  );
}
