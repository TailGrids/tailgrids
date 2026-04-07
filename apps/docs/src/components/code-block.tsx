"use client";

import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia, prism } from "react-syntax-highlighter/dist/esm/styles/prism";

type PropsType = {
  snippet: string;
  lang: string;
  showLineNumbers?: boolean;
};

export function CodeBlock({ snippet, lang, showLineNumbers }: PropsType) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full">
      <SyntaxHighlighter
        showLineNumbers={showLineNumbers}
        language={lang}
        key={resolvedTheme}
        style={resolvedTheme === "dark" ? okaidia : prism}
        customStyle={{
          overflow: "initial",
          background: "none",
          fontSize: "0.875rem",
          margin: 0,
          padding: 0
        }}
        codeTagProps={{
          className: `language-${lang} bg-[#fff]! border-none [&>*.react-syntax-highlighter-line-number]:text-neutral-400! dark:bg-[#030712]!`,
          style: {
            padding: "1.4rem 1.1rem",
            display: "inline-block",
            minWidth: "100%"
          }
        }}
      >
        {snippet.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
