import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Button } from "./registry/core/button";
import HeaderBanner from "./components/header-banner";
import ComponentCard from "./components/component-card";
import CodeBlockCard from "./components/code-block-card";
import { ComponentPreview } from "./components/component-preview";
import { CodeBlock } from "./components/code-block";
import { getFileContent } from "./utils/get-file-content";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Button,
    HeaderBanner: HeaderBanner,
    ComponentCard: ComponentCard,
    CodeBlockCard,
    CodeBlock,
    ComponentPreview,
    getFileContent
  };
}
