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
  const { theme } = useTheme();

  return (
    <div className="w-full">
      <SyntaxHighlighter
        showLineNumbers={showLineNumbers}
        language={lang}
        key={theme}
        style={theme === "dark" ? okaidia : prism}
        customStyle={{
          overflow: "initial",
          background: "none",
          fontSize: "0.875rem",
          margin: 0,
          padding: 0
        }}
        codeTagProps={{
          className: `language-${lang} bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 [&>*.react-syntax-highlighter-line-number]:text-neutral-400!`,
          style: {
            padding: "1.4rem 1.1rem",
            display: "inline-block",
            minWidth: "100%",
            borderRadius: "1.25rem"
          }
        }}
      >
        {snippet.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
