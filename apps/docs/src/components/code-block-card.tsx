"use client";

import { memo } from "react";

import { CopyToClipboard } from "./copy-to-clipboard";
import { CodeBlock } from "./code-block";

type CodeBlockCardProps = {
  snippet: string;
  lang: string;
  showLineNumbers?: boolean;
};

function CodeBlockCard({ snippet, lang, showLineNumbers }: CodeBlockCardProps) {
  return (
    <div className="bg-gray-50 rounded-[1.75rem] border p-2.5 mb-4 dark:bg-gray-900">
      <div className="flex items-center gap-1.5 text-gray-500 dark:text-[#9CA3AF] px-5 pb-4 pt-1.5">
        <h5 className="mr-auto text-sm font-mono font-[84]">terminal</h5>

        <CopyToClipboard content={snippet.trim()} showLabel />
      </div>

      <CodeBlock
        snippet={snippet.trim()}
        lang={lang}
        showLineNumbers={showLineNumbers}
      />
    </div>
  );
}

export default memo(CodeBlockCard);
