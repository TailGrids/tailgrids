import ProBadge from "@/components/pro-badge";
import ThemeToggleLink from "@/components/theme-toggle-link";
import {
  BlocksIcon,
  BookOpenIcon,
  ComponentsIcon,
  FigmaIcon,
  TemplateIcon,
  ZapIcon
} from "@/icons";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: false // Disable default navbar since we have custom global header
    },
    links: [
      {
        text: <span>Introduction</span>,
        url: "/",
        icon: (
          <span className="p-1.25 bg-[rgba(30,183,255,0.15)] rounded-[7px] shrink-0">
            <BookOpenIcon />
          </span>
        )
      },
      {
        text: "Installation",
        url: "/installation",
        icon: (
          <span className="p-1.25 bg-[rgba(13,188,95,0.15)] rounded-[7px] shrink-0">
            <ZapIcon />
          </span>
        ),
        active: "nested-url"
      },
      {
        text: "Components",
        url: "/components",
        icon: (
          <span className="p-1.25 bg-[rgba(116,98,244,0.15)] rounded-[7px] shrink-0">
            <ComponentsIcon />
          </span>
        ),
        active: "nested-url"
      },
      {
        text: (
          <span className="flex items-center gap-2">
            Pro Blocks
            <ProBadge />
          </span>
        ),
        url: "https://tailgrids.com/blocks",
        icon: (
          <span className="p-1.25 bg-[rgba(247,132,69,0.15)] rounded-[7px] shrink-0">
            <BlocksIcon />
          </span>
        ),
        external: false
      },
      {
        text: (
          <span className="flex items-center gap-2">
            Templates
            <ProBadge />
          </span>
        ),
        url: "https://tailgrids.com/templates",
        icon: (
          <span className="p-1.25 bg-[rgba(198,68,239,0.15)] rounded-[7px] shrink-0">
            <TemplateIcon />
          </span>
        ),
        external: false
      },
      {
        text: (
          <span className="flex items-center gap-2">
            Figma File
            <ProBadge />
          </span>
        ),
        icon: (
          <span className="p-1.25 bg-[rgba(253,71,40,0.15)] rounded-[7px] shrink-0">
            <FigmaIcon />
          </span>
        ),
        url: "https://tailgrids.com/figma",
        external: false
      }
    ]
  };
}

export { ThemeToggleLink };
