"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";
import { CodeBlock, type HighlightLine } from "./code-block";
import { CopyToClipboard } from "./copy-to-clipboard";
import { SegmentedControl } from "./segmented-control";
import { SelectTheme } from "./select-theme";

const ITEMS = [
  {
    label: "Preview",
    value: "preview"
  },
  {
    label: "Code",
    value: "code"
  }
];

type PropsType = {
  codeSnippetLang?: string;
  codeSnippet: string;
  children: React.ReactNode;
  noPaddingOnPreviewForMobile?: boolean;
  noPaddingOnPreviewForLaptop?: boolean;
  highlightLines?: HighlightLine[];
  highlightWords?: string[];
};

export function ComponentPreview({
  codeSnippet,
  codeSnippetLang = "tsx",
  noPaddingOnPreviewForMobile,
  noPaddingOnPreviewForLaptop,
  highlightLines,
  highlightWords,
  children
}: PropsType) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div>
      <div className="flex min-[462px]:justify-between flex-wrap gap-x-3 gap-y-3 items-center">
        <SegmentedControl
          items={ITEMS}
          value={activeTab}
          onChange={setActiveTab}
        />

        <SelectTheme />

        <CopyToClipboard
          className="py-2 pr-3 pl-2.5 gap-2 font-medium rounded-[10px] border hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:shadow-none"
          content={codeSnippet}
          showLabel
        />
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-[1.75rem] border p-2.5 my-4">
        {activeTab === "preview" && (
          <div
            className={cn(
              "min-h-100 bg-card-background-50 border flex flex-col items-center justify-center rounded-[20px] not-prose shadow-terminal",
              noPaddingOnPreviewForMobile
                ? "p-0 sm:px-15 sm:py-10"
                : "px-15 py-10",
              noPaddingOnPreviewForLaptop
                ? "p-0 2xl:px-15 2xl:py-10"
                : "px-15 py-10"
            )}
          >
            {children}
          </div>
        )}

        {activeTab === "code" && (
          <div className="max-h-150 h-full border bg-white dark:bg-[#030712] rounded-[20px] shadow-terminal overflow-auto">
            <CodeBlock
              lang={codeSnippetLang}
              showLineNumbers
              snippet={codeSnippet}
              highlightLines={highlightLines}
              highlightWords={highlightWords}
            />
          </div>
        )}
      </div>
    </div>
  );
}
