"use client";

import { Theme, useThemeStore } from "@/store/useThemeStore";
import { cn } from "@/utils/cn";
import { Check, ChevronDown } from "@tailgrids/icons";
import { useEffect, useRef, useState } from "react";

const themes: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" }
];

export function SelectTheme() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const theme = useThemeStore(state => state.theme);
  const setTheme = useThemeStore(state => state.setTheme);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    setOpen(false);
  };

  const selectedLabel = themes.find(t => t.value === theme)?.label;

  return (
    <div className="relative text-left min-[462px]:ml-auto" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-[10px] border py-2 pr-2.5 pl-3 text-sm font-medium text-gray-500 dark:text-gray-400 transition focus:outline-none hover:text-[rgb(31,41,55)] hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:shadow-none dark:hover:text-white"
      >
        <span>{selectedLabel} Theme</span>
        <ChevronDown
          className={cn(
            "size-4 text-gray-400 duration-200 group-hover:text-[rgb(31,41,55)] dark:group-hover:text-white",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-32 rounded-xl border bg-white dark:bg-gray-900 p-1">
          <ul className="py-1 text-sm [all:unset]">
            {themes.map(themeOption => (
              <li key={themeOption.value} className="list-none [all:unset]">
                <button
                  onClick={() => handleSelect(themeOption.value)}
                  className={cn(
                    "w-full px-1.5 py-1 cursor-pointer flex items-center justify-between rounded-lg text-left font-medium",
                    theme === themeOption.value
                      ? "bg-gray-100 text-gray-700 dark:text-gray-200 dark:bg-gray-800"
                      : "text-gray-500 dark:text-gray-400 hover:bg-gray-100/60 dark:hover:bg-gray-800"
                  )}
                >
                  {themeOption.label}

                  {theme === themeOption.value && <Check />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
