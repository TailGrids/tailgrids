import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./components/code-block";
import CodeBlockCard from "./components/code-block-card";
import ComponentCard from "./components/component-card";
import { ComponentPreview } from "./components/component-preview";
import HeaderBanner from "./components/header-banner";
import { PageHeaderButtons } from "./components/page-header-buttons";
import { Button } from "./registry/core/button";
import { getFileContent } from "./utils/get-file-content";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    h1: ({ children, ...props }) => (
      <div className="flex items-center gap-5 mb-8">
        <h1
          {...props}
          className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 m-0!"
        >
          {children}
        </h1>
        <PageHeaderButtons />
      </div>
    ),
    Button,
    HeaderBanner: HeaderBanner,
    ComponentCard: ComponentCard,
    CodeBlockCard,
    CodeBlock,
    ComponentPreview,
    getFileContent
  };
}
