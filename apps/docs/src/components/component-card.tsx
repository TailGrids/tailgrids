"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { CopyIcon } from "@/icons";

interface ComponentCardProps {
  title?: string;
  description?: string;
  installCommand?: string;
  className?: string;
  children?: React.ReactNode;
  note?: string;
  step?: number;
}

export default function ComponentCard({
  title,
  description,
  installCommand = "npm install tailgrids",
  className,
  children,
  note,
  step
}: ComponentCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex gap-4 items-start mb-10 relative after:content-[''] after:absolute after:inset-0 after:ml-3 after:-z-10 after:bg-gray-200 after:top-10 after:w-px">
      {step && (
        <div>
          <span className="rounded-full border border-gray-200 inline-flex items-center justify-center size-7 text-gry-700 font-semibold text-sm">
            {step}
          </span>
        </div>
      )}

      <div className="flex-1">
        {(title || description) && (
          <div className="">
            {title && (
              <h3 className="text-base font-semibold mt-0 text-neutral-900 dark:text-white/90">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
        )}
        <div
          className={cn(
            "rounded-[28px] border bg-gray-50 border-neutral-200  dark:border-neutral-800 dark:bg-gray-900",
            className
          )}
        >
          <div className="pb-2.5">
            {/* Terminal-style install command */}
            <div className="pt-3">
              <div className="px-3">
                <div className="flex items-center pl-2.5 justify-between   dark:border-neutral-800">
                  <span className="text-xs font-medium font-mono text-gray-500 dark:text-neutral-400">
                    terminal
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded cursor-pointer px-2 py-1  font-normal text-gray-500 text-sm"
                    aria-label="Copy command"
                  >
                    {copied ? (
                      <>
                        <CopyIcon />
                        Copied
                      </>
                    ) : (
                      <>
                        <CopyIcon />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="py-3 mt-2 px-2.5 rounded-[20px] bg-white shadow-terminal dark:bg-gray-950 dark:border-gray-800 border border-gray-200">
                  <code className="block font-mono text-sm text-neutral-800 dark:text-neutral-200 bg-transparent! border-0 px-3">
                    <span className="select-none text-neutral-400">1</span>{" "}
                    <span className="text-purple-600 dark:text-purple-400">
                      {installCommand}
                    </span>
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Note */}
        {note && (
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            {note}
          </p>
        )}
        {/* Additional content */}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
