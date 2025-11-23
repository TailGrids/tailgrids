import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Button } from "./registry/core/button";
import HeaderBanner from "./components/header-banner";
import ComponentCard from "./components/component-card";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Button: Button,
    HeaderBanner: HeaderBanner,
    ComponentCard: ComponentCard,
  };
}
