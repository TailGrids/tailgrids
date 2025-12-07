"use client";

import copy from "copy-text-to-clipboard";
import { useState } from "react";
import { Check, Copy4 } from "@tailgrids/icons";
import { cn } from "@/utils/cn";

type PropsType = {
  showLabel?: boolean;
  content: string;
  className?: string;
};

export function CopyToClipboard({ content, showLabel, className }: PropsType) {
  const [isCopied, setIsCopied] = useState(false);

  function handleClick() {
    copy(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center gap-1.5 text-sm text-[#9CA3AF] hover:opacity-85 dark:text-gray-400 font-normal",
        className
      )}
      title={!showLabel ? "Copy to clipboard" : undefined}
    >
      {isCopied ? <Check className="size-5" /> : <Copy4 className="size-5" />}

      {showLabel && (
        <span className="text-[#6B7280]">
          {isCopied ? "Copied" : "Copy"}{" "}
          <span className="sr-only">to clipboard</span>
        </span>
      )}
    </button>
  );
}
