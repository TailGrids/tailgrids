"use client";

import { useEffect, useRef } from "react";
import { BorderLine } from "../ui/ContainerWithGrid";
import NavbarPromo from "./NavbarPromo";

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    };

    // Initial update
    updateNavbarHeight();

    // Create a ResizeObserver to watch for navbar size changes
    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current);
    }

    // Also update on window resize
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className="sticky inset-x-0 top-0 z-99999 border-b border-tg-border-1 bg-white"
    >
      <div className="relative mx-auto w-full max-w-[1454px]">
        <BorderLine position="left" className="h-full" />
        <BorderLine position="right" className="h-full" />

        <NavbarPromo />
      </div>
    </div>
  );
}
