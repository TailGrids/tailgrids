"use client";
import { ChevronDownIcon } from "@/icons";

import { useEffect, useRef, useState } from "react";

export default function VersionDropdown() {
  const [open, setOpen] = useState(false);
  const [version, setVersion] = useState("v3.0");

  const versions = ["v3.0", "v2.5", "v2.0", "v1.8"];
  const containerRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(containerRef, () => setOpen(false));

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center border-[#EDEDED] gap-1 cursor-pointer border  dark:text-gray-400 rounded-lg h-6 w-15 bg-[#F3F4F6] dark:bg-white/5 dark:border-[#111827] px-2 py-1.5 text-sm font-medium text-gray-700 transition"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {version}
        <ChevronDownIcon
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute left-0 mt-2  w-24 p-1 rounded-lg bg-white dark:bg-gray-950  dark:border-[#111827] shadow-lg border border-gray-100 z-50"
        >
          {versions.map((v) => (
            <button
              key={v}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setVersion(v);
                setOpen(false);
              }}
              role="menuitem"
              tabIndex={0}
              className="w-full text-left block px-3 py-1.5 dark:text-gray-400 dark:hover:bg-gray-800 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {v}
            </button>
          ))}
        </div>
      )}
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
