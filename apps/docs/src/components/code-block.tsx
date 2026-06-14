"use client";

import { useTheme } from "next-themes";
import React, { CSSProperties, useId, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import createElement from "react-syntax-highlighter/dist/esm/create-element";
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

function buildUnionPattern(parts: string[] | undefined): RegExp | null {
  if (!parts || parts.length === 0) return null;
  return new RegExp(`(${parts.map(escapeRegExp).join("|")})`, "g");
}

function isAstNode(x: unknown): x is rendererNode {
  return typeof x === "object" && x !== null && "type" in (x as object);
}

function splitTextWithHighlight(
  value: string,
  pattern: RegExp,
  bgColor: string
): rendererNode[] {
  const out: rendererNode[] = [];
  let lastIndex = 0;
  for (const m of value.matchAll(pattern)) {
    const start = m.index ?? 0;
    if (start > lastIndex) {
      out.push({ type: "text", value: value.slice(lastIndex, start) });
    }
    out.push({
      type: "element",
      tagName: "span",
      properties: {
        style: {
          backgroundColor: bgColor,
          borderRadius: 2,
          paddingInline: 4
        },
        className: ["inline-highlight"]
      },
      children: [{ type: "text", value: m[0] }]
    });
    lastIndex = start + m[0].length;
  }
  if (lastIndex < value.length) {
    out.push({ type: "text", value: value.slice(lastIndex) });
  }
  return out;
}

function rewriteNode(
  node: rendererNode,
  wordPattern: RegExp | null,
  bgColor: string
): rendererNode {
  if (node.type === "text" && typeof node.value === "string") {
    if (!wordPattern) return node;
    if (!wordPattern.test(node.value)) {
      wordPattern.lastIndex = 0;
      return node;
    }
    wordPattern.lastIndex = 0;
    return {
      type: "element",
      tagName: "span",
      properties: {
        className: ["inline-highlight"]
      },
      children: splitTextWithHighlight(node.value, wordPattern, bgColor)
    };
  }

  if (node.type === "element" && Array.isArray(node.children)) {
    return {
      ...node,
      children: node.children.map(c => rewriteNode(c, wordPattern, bgColor))
    };
  }

  return node;
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

  const lineBg = isDark
    ? "rgba(94, 132, 252, 0.15)"
    : "rgba(55, 88, 249, 0.08)";
  const lineBorder = isDark ? "#5e84fc" : "#3758f9";
  const wordBg = isDark
    ? "rgba(94, 132, 252, 0.25)"
    : "rgba(55, 88, 249, 0.15)";

  const highlightedLines = useMemo(
    () => expandLineRanges(highlightLines || []),
    [highlightLines]
  );

  const wordPattern = useMemo(
    () => buildUnionPattern(highlightWords),
    [highlightWords]
  );

  const hasInlineHighlight = !!wordPattern;
  const hasLineHighlight = highlightedLines.size > 0;

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
    if (!hasInlineHighlight) return undefined;
    return ({
      rows,
      stylesheet,
      useInlineStyles
    }: {
      rows: unknown[];
      stylesheet: { [key: string]: CSSProperties };
      useInlineStyles: boolean;
    }) =>
      rows.map((row, i) => {
        if (!isAstNode(row)) return row as React.ReactNode;
        const rewritten = rewriteNode(row, wordPattern, wordBg);
        return createElement({
          node: rewritten,
          stylesheet,
          useInlineStyles,
          key: `code-segment-${i}`
        }) as React.ReactNode;
      });
  }, [hasInlineHighlight, wordPattern, wordBg]);

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
        wrapLines={hasLineHighlight || hasInlineHighlight}
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
