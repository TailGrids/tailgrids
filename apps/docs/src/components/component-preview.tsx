"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";
import { CodeBlock } from "./code-block";
import { CopyToClipboard } from "./copy-to-clipboard";
import { SegmentedControl } from "./segmented-control";

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
};

export function ComponentPreview({
  codeSnippet,
  codeSnippetLang = "tsx",
  noPaddingOnPreviewForMobile,
  children
}: PropsType) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div>
      <div className="flex justify-between gap-5 items-center">
        <SegmentedControl
          items={ITEMS}
          value={activeTab}
          onChange={setActiveTab}
        />

        <CopyToClipboard
          className="py-2 pr-3 pl-2.5 gap-2 font-medium rounded-[10px] border"
          content={codeSnippet}
          showLabel
        />
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-[1.75rem] border p-2.5 my-4">
        {activeTab === "preview" && (
          <div
            className={cn(
              "min-h-100 flex flex-col items-center justify-center rounded-[20px] border border-gray-200 dark:border-gray-800 bg-white not-prose",
              noPaddingOnPreviewForMobile ? "p-0 sm:px-15 sm:py-10" : "px-15 py-10"
            )}
          >
            {children}
          </div>
        )}

        {activeTab === "code" && (
          <div className="max-h-180 h-full overflow-y-auto overflow-x-auto custom-scrollbar">
            <CodeBlock
              lang={codeSnippetLang}
              showLineNumbers
              snippet={codeSnippet}
            />
          </div>
        )}
      </div>
    </div>
  );
}
