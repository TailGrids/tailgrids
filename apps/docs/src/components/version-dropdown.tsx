"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export default function VersionDropdown() {
  const [open, setOpen] = useState(false);
  const [version, setVersion] = useState("v3.0");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(containerRef, () => setOpen(false));

  return (
    <div ref={containerRef} className="relative">
      <button
        className="flex h-6 cursor-pointer items-center gap-1 rounded-lg border border-[#EDEDED] bg-[#F3F4F6] px-2 py-1 text-xs font-medium text-gray-700 transition duration-200 hover:bg-gray-200 dark:border-[#111827] dark:bg-white/5 dark:text-gray-400 dark:hover:bg-gray-800"
        onClick={() => setOpen(!open)}
      >
        {version}
        <ChevronDown
          className={cn("size-3.5 shrink-0 duration-200", {
            "rotate-180": open
          })}
        />
      </button>
      <div
        className={cn(
          "absolute top-full left-0 z-50 mt-2 min-w-20 rounded-xl border border-tg-border-1 bg-white p-1 shadow-lg transition-all duration-200 dark:bg-gray-950 dark:border-gray-800",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <Link
          href="https://staging.tailgrids.com"
          className="block rounded-lg px-3 py-1.5 text-xs font-medium text-tg-text-color duration-200 hover:bg-gray-100 hover:text-tg-title-color dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => {
            setVersion("v3.0");
            setOpen(false);
          }}
        >
          v3.0
        </Link>
        <Link
          href="https://staging.tailgrids.com/docs/changelog#current-version-230"
          className="block rounded-lg px-3 py-1.5 text-xs font-medium text-tg-text-color duration-200 hover:bg-gray-100 hover:text-tg-title-color dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => {
            setVersion("v2.3");
            setOpen(false);
          }}
        >
          v2.3
        </Link>{" "}
        <Link
          href="https://staging.tailgrids.com/docs/changelog#version-110"
          className="block rounded-lg px-3 py-1.5 text-xs font-medium text-tg-text-color duration-200 hover:bg-gray-100 hover:text-tg-title-color dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => {
            setVersion("v1.1");
            setOpen(false);
          }}
        >
          v1.1
        </Link>
      </div>
    </div>
  );
}

// Close dropdown on outside click and on Escape key press
export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    function onClick(e: MouseEvent | TouchEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") handler();
    }

    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [ref, handler]);
}
