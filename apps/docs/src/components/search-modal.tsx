"use client";

import { SearchResultItem, useSearch } from "@/hooks/use-search";
import {
  ArrowDownward,
  ArrowUpward,
  ChevronRight,
  TurnDownLeft
} from "@tailgrids/icons";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const { blocks, templates, pages, docs } = useSearch(searchQuery);

  const allResults = useMemo(() => {
    return [...docs, ...blocks, ...templates, ...pages];
  }, [blocks, templates, pages, docs]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowDown":
          e.preventDefault();

          setSelectedIndex(prev =>
            prev < allResults.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();

          setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();

          if (allResults[selectedIndex]) {
            const item = allResults[selectedIndex];

            if (item.url) {
              window.location.href = item.url;
            }

            onClose();
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, allResults, onClose]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Reset selected index when search query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  if (!isOpen) return null;

  const renderSection = (
    title: string,
    items: SearchResultItem[],
    startIndex: number
  ) => {
    if (items.length === 0) return null;

    return (
      <div key={title} className="">
        <div className="py-3">
          <div className="px-5 py-3">
            <h3 className="text-sm leading-5 font-medium tracking-[0.2px] text-gray-400">
              {title}
            </h3>
          </div>

          <div>
            {items.map((item, index) => {
              const globalIndex = startIndex + index;

              return (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={() => onClose()}
                  className={`flex w-full items-center justify-between rounded-lg px-5 py-3 text-left transition-colors ${
                    selectedIndex === globalIndex
                      ? "bg-gray-100 dark:bg-[#111827]"
                      : "hover:bg-gray-50 dark:hover:bg-[#111827]"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm leading-5 font-medium tracking-[0.2px] text-gray-700 dark:text-white/90">
                        {item.title}
                      </span>

                      {item.tag && (
                        <span className="rounded bg-primary-500 px-2 py-0.5 text-[10px] font-medium text-white uppercase">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedIndex === globalIndex && (
                    <ChevronRight className="size-5 text-gray-400" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center px-4 pt-[14vh]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-150 overflow-hidden rounded-3xl bg-white p-3 shadow-2xl dark:bg-[#030712] dark:border-[#111827]"
      >
        {/* Search Input */}
        <div className="flex h-12.5 items-center gap-3 rounded-xl border border-[#EDEDED] bg-gray-50 p-2.5 pl-5 dark:bg-[#111827] dark:border-[#111827]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.125 0C11.0601 0 14.2509 3.1894 14.251 7.12402C14.251 8.82173 13.6556 10.3796 12.6641 11.6035L15.1562 14.0957C15.4484 14.3886 15.4479 14.8636 15.1553 15.1562C14.8625 15.4487 14.3875 15.4487 14.0947 15.1562L11.6025 12.6631C10.3786 13.6531 8.8218 14.248 7.125 14.248C3.19008 14.2478 0 11.0586 0 7.12402C7.65495e-05 3.18955 3.19013 0.000227494 7.125 0ZM7.125 1.5C4.01827 1.50023 1.50008 4.01826 1.5 7.12402C1.5 10.2299 4.01822 12.7478 7.125 12.748C10.232 12.748 12.751 10.23 12.751 7.12402C12.7509 4.01812 10.2319 1.5 7.125 1.5Z"
              fill="#9CA3AF"
            />
          </svg>

          <input
            ref={inputRef}
            type="text"
            placeholder="Type something to search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="placeholder:text-md flex-1 bg-transparent text-base text-gray-900 outline-none placeholder:leading-6 placeholder:tracking-[-0.2px] placeholder:text-gray-400 dark:placeholder:text-[#6B7280] dark:text-white"
          />

          {searchQuery.length > 0 && (
            <button
              onClick={() => {
                setSearchQuery("");
              }}
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg bg-transparent text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="Close search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.736 4.99a.9.9 0 011.274 1.273L11.273 10l3.737 3.737a.9.9 0 01-1.274 1.274L10 11.274 6.262 15.01a.9.9 0 01-1.274-1.274L8.726 10 4.988 6.263a.9.9 0 011.274-1.274l3.737 3.738 3.737-3.738z"
                  fill="currentColor"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-100 overflow-y-auto">
          {allResults.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-gray-500">
              {searchQuery
                ? `No results found for "${searchQuery}"`
                : "No results found"}
            </div>
          ) : (
            <>
              {renderSection("Docs", docs, 0)}
              {docs.length > 0 &&
                (blocks.length > 0 ||
                  templates.length > 0 ||
                  pages.length > 0) && (
                  <div className="space-5 border-t border-dashed border-gray-100 dark:border-[#1F2937]" />
                )}

              {renderSection("Blocks", blocks, docs.length)}
              {blocks.length > 0 &&
                (templates.length > 0 || pages.length > 0) && (
                  <div className="space-5 border-t border-dashed border-gray-100 dark:border-[#1F2937]" />
                )}

              {renderSection(
                "Templates",
                templates,
                docs.length + blocks.length
              )}
              {templates.length > 0 && pages.length > 0 && (
                <div className="space-5 border-t border-dashed border-gray-100 dark:border-[#1F2937]" />
              )}

              {renderSection(
                "Pages",
                pages,
                docs.length + blocks.length + templates.length
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-dashed border-gray-200 px-5 pt-5 pb-3 dark:border-[#1F2937]">
          <div className="flex items-center justify-center gap-x-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-xs leading-4 tracking-[-0.2px] text-gray-500 dark:text-[#9CA3AF]">
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded-md bg-gray-100 p-1.5 text-[10px] font-medium dark:bg-[#111827]">
                  <ArrowDownward className="size-3" />
                </kbd>
                <kbd className="rounded-md bg-gray-100 p-1.5 text-[10px] font-medium dark:bg-[#111827]">
                  <ArrowUpward className="size-3" />
                </kbd>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="rounded-md bg-gray-100 p-1.5 text-[10px] font-medium dark:bg-[#111827]">
                <TurnDownLeft className="size-3.5" />
              </kbd>
              <span className="text-xs leading-4 tracking-[-0.2px] text-gray-500 dark:text-[#9CA3AF]">
                Enter
              </span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="rounded-md bg-gray-100 p-1.5 text-xs leading-4 font-medium tracking-[-0.2px] dark:bg-[#111827]">
                esc
              </kbd>
              <span className="text-xs leading-4 tracking-[-0.2px] text-gray-500 dark:text-[#9CA3AF]">
                Close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
