"use client";

import { memo } from "react";

import { CodeBlock } from "./code-block";
import { CopyToClipboard } from "./copy-to-clipboard";

type CodeBlockCardProps = {
  snippet: string;
  lang: string;
  showLineNumbers?: boolean;
  fileName?: string;
};

function CodeBlockCard({
  snippet,
  lang,
  showLineNumbers,
  fileName
}: CodeBlockCardProps) {
  return (
    <div className="mb-4 p-2.5 border bg-[#f9fafb] rounded-[1.75rem] dark:bg-[#111827]">
      <div className="flex items-center gap-1.5 text-gray-500 dark:text-[#9CA3AF] px-5 pb-4 pt-1.5">
        <h5 className="mr-auto text-sm font-mono font-[84]">
          {fileName || "terminal"}
        </h5>

        <CopyToClipboard content={snippet.trim()} showLabel />
      </div>

      <div className="max-h-120 border bg-[#f9fafb] overflow-auto rounded-[1.25rem] dark:bg-[#111827] shadow-terminal">
        <CodeBlock
          snippet={snippet.trim()}
          lang={lang}
          showLineNumbers={showLineNumbers}
        />
      </div>
    </div>
  );
}

export default memo(CodeBlockCard);
