import ProBadge from "@/components/pro-badge";
import ThemeToggleLink from "@/components/theme-toggle-link";
import {
  BlocksIcon,
  BoltIcon,
  ComponentsIcon,
  FigmaIcon,
  TemplateIcon
} from "@/icons";
import { OpenBook, Bolt1 } from "@tailgrids/icons";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: false // Disable default navbar since we have custom global header
    },
    links: [
      {
        text: "Introduction",
        url: "/",
        icon: <OpenBook className="shrink-0" />
      },
      {
        text: "Installation",
        url: "/installation",
        icon: <BoltIcon className="shrink-0" />,
        active: "nested-url"
      },
      {
        text: "Components",
        url: "/components",
        icon: <ComponentsIcon className="shrink-0 " />,
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
        icon: <BlocksIcon className="shrink-0" />,
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
        icon: <TemplateIcon className="shrink-0" />,
        external: false
      },
      {
        text: (
          <span className="flex items-center gap-2">
            Figma File
            <ProBadge />
          </span>
        ),
        icon: <FigmaIcon className="shrink-0" />,
        url: "https://tailgrids.com/figma",
        external: false
      }
    ]
  };
}

export { ThemeToggleLink };
