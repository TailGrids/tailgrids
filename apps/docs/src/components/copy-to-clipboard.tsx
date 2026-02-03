"use client";

import { CopyIcon } from "@/components/ui/icons";
import { cn } from "@/utils/cn";
import { Check } from "@tailgrids/icons";
import copy from "copy-text-to-clipboard";
import { useState } from "react";

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
        "flex items-center gap-1.5 text-sm text-[#6B7280] hover:opacity-85 dark:text-gray-400 font-normal",
        className
      )}
      title={!showLabel ? "Copy to clipboard" : undefined}
    >
      {isCopied ? (
        <Check className="size-5 stroke-[1.5]" />
      ) : (
        <CopyIcon className="size-5 stroke-[1.5]" />
      )}

      {showLabel && (
        <span className="text-[#374151] font-medium -tracking-[0.2px]">
          {isCopied ? "Copied" : "Copy"}{" "}
          <span className="sr-only">to clipboard</span>
        </span>
      )}
    </button>
  );
}
