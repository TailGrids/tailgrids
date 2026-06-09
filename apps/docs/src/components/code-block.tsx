"use client";

import { useTheme } from "next-themes";
import React, { useId, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { createStyleObject } from "react-syntax-highlighter/dist/esm/create-element";
import { okaidia, prism } from "react-syntax-highlighter/dist/esm/styles/prism";

export type HighlightLine = number | [number, number];

type PropsType = {
  snippet: string;
  lang: string;
  showLineNumbers?: boolean;
  highlightLines?: HighlightLine[];
  highlightWords?: string[];
};

function expandLineRanges(ranges: HighlightLine[]): Set<number> {
  const lines = new Set<number>();
  for (const range of ranges) {
    if (typeof range === "number") {
      lines.add(range);
    } else {
      const [start, end] = range;
      for (let i = start; i <= end; i++) {
        lines.add(i);
      }
    }
  }
  return lines;
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightWordsInText(
  text: string,
  pattern: RegExp,
  bgColor: string
): React.ReactNode[] {
  const str = String(text);
  const parts = str.split(pattern);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <span
          key={i}
          style={{
            backgroundColor: bgColor,
            borderRadius: 2,
            paddingInline: 4
          }}
        >
          {part}
        </span>
      );
    }
    return part;
  });
}

function renderNode(
  node: any,
  stylesheet: any,
  useInlineStyles: boolean,
  wordPattern: RegExp | null,
  wordBg: string,
  key: string
): React.ReactNode {
  if (!node) return null;
  if (node.type === "text") {
    const textValue = node.value != null ? String(node.value) : "";
    if (wordPattern && textValue) {
      return (
        <span key={key}>
          {highlightWordsInText(textValue, wordPattern, wordBg)}
        </span>
      );
    }
    return textValue;
  }

  if (node.type === "element") {
    const props: any = { key };
    if (useInlineStyles && node.properties?.className) {
      props.style = (createStyleObject as any)(
        node.properties.className,
        node.properties.style || {},
        stylesheet
      );
    } else if (node.properties?.style) {
      props.style = node.properties.style;
    }
    if (node.properties?.className) {
      props.className = node.properties.className.join(" ");
    }

    const children = (node.children || []).map((child: any, i: number) =>
      renderNode(
        child,
        stylesheet,
        useInlineStyles,
        wordPattern,
        wordBg,
        `${key}-${i}`
      )
    );

    return React.createElement(node.tagName, props, ...children);
  }

  return null;
}

export function CodeBlock({
  snippet,
  lang,
  showLineNumbers,
  highlightLines,
  highlightWords
}: PropsType) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const highlightedLines = useMemo(
    () => expandLineRanges(highlightLines || []),
    [highlightLines]
  );

  const wordPattern = useMemo(() => {
    if (!highlightWords?.length) return null;
    return new RegExp(`(${highlightWords.map(escapeRegExp).join("|")})`);
  }, [highlightWords]);

  const hasWordHighlight = !!wordPattern;
  const hasLineHighlight = highlightedLines.size > 0;

  const lineBg = isDark
    ? "rgba(94, 132, 252, 0.15)"
    : "rgba(55, 88, 249, 0.08)";
  const lineBorder = isDark ? "#5e84fc" : "#3758f9";
  const wordBg = isDark
    ? "rgba(94, 132, 252, 0.25)"
    : "rgba(55, 88, 249, 0.15)";

  const linePosition = useMemo(() => {
    const sorted = [...highlightedLines].sort((a, b) => a - b);
    const map = new Map<number, "single" | "first" | "mid" | "last">();
    const len = sorted.length;
    if (len === 0) return map;

    for (let i = 0; i < len; i++) {
      const cur = sorted[i]!;
      const isStart = i === 0 || sorted[i - 1]! !== cur - 1;
      const isEnd = i === len - 1 || sorted[i + 1]! !== cur + 1;

      if (isStart && isEnd) {
        map.set(cur, "single");
      } else if (isStart) {
        map.set(cur, "first");
      } else if (isEnd) {
        map.set(cur, "last");
      } else {
        map.set(cur, "mid");
      }
    }

    return map;
  }, [highlightedLines]);

  const lineProps = useMemo(() => {
    if (!hasLineHighlight) return undefined;

    return (lineNumber: number) => {
      if (!highlightedLines.has(lineNumber))
        return {
          style: { paddingLeft: "0.75rem" }
        };

      const pos = linePosition.get(lineNumber) || "single";
      return { className: `hl-line-${pos}` };
    };
  }, [hasLineHighlight, highlightedLines, linePosition]);

  const renderer = useMemo(() => {
    if (!hasWordHighlight) return undefined;

    return ({ rows, stylesheet, useInlineStyles }: any) =>
      rows
        .filter(Boolean)
        .map((row: any, index: number) =>
          renderNode(
            row,
            stylesheet,
            useInlineStyles,
            wordPattern,
            wordBg,
            `line-${index}`
          )
        );
  }, [hasWordHighlight, wordPattern, wordBg]);

  const uid = useId();

  const highlightCss = useMemo(() => {
    if (!hasLineHighlight) return null;
    return `
      #${CSS.escape(uid)} .hl-line-single,
      #${CSS.escape(uid)} .hl-line-first,
      #${CSS.escape(uid)} .hl-line-mid,
      #${CSS.escape(uid)} .hl-line-last {
        display: block;
        width: max-content;
        min-width: 100%;
        background-color: ${lineBg};
        position: relative;
        padding-left: 12px;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
      }
      #${CSS.escape(uid)} .hl-line-single::before,
      #${CSS.escape(uid)} .hl-line-first::before,
      #${CSS.escape(uid)} .hl-line-mid::before,
      #${CSS.escape(uid)} .hl-line-last::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background-color: ${lineBorder};
      }
      #${CSS.escape(uid)} .hl-line-single::before {
        border-radius: 0 2.5px 2.5px 0;
      }
      #${CSS.escape(uid)} .hl-line-first::before {
        border-radius: 0 2.5px 0 0;
      }
      #${CSS.escape(uid)} .hl-line-mid::before {
        border-radius: 0;
      }
      #${CSS.escape(uid)} .hl-line-last::before {
        border-radius: 0 0 2.5px 0;
      }
    `;
  }, [hasLineHighlight, uid, lineBg, lineBorder]);

  return (
    <div id={uid} className="w-full">
      {highlightCss && <style>{highlightCss}</style>}
      <SyntaxHighlighter
        showLineNumbers={showLineNumbers}
        wrapLines={hasLineHighlight || hasWordHighlight}
        lineProps={lineProps}
        renderer={renderer}
        language={lang}
        key={resolvedTheme}
        style={isDark ? okaidia : prism}
        customStyle={{
          overflow: "initial",
          background: "none",
          fontSize: "0.875rem",
          margin: 0,
          padding: 0,
          textShadow: "none"
        }}
        codeTagProps={{
          className: `language-${lang} border-none [&>*.react-syntax-highlighter-line-number]:text-neutral-400!`,
          style: {
            padding: "1.4rem 1rem",
            display: "block",
            minWidth: "100%",
            backgroundColor: isDark ? "#030712" : "#fff"
          }
        }}
      >
        {snippet.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
