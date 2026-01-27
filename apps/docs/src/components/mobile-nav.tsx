"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DashboardSquare1,
  Layout14,
  Megaphone1,
  PieChart1,
  Cart2,
  Sparkle
} from "@tailgrids/icons";
import {
  ColoredReactIcon,
  ColoredVueIcon,
  ColoredFigmaIcon,
  CommunityIcon,
  ChatBubbleIcon,
  RoadMapIcon,
  PencilTextIcon,
  ConfettiIcon
} from "./ui/icons";

interface SubMenuItem {
  title: string;
  desc?: string;
  path: string;
  icon?: React.ReactNode;
  external?: boolean;
}

interface MenuItem {
  title: string;
  path?: string;
  external?: boolean;
  children?: SubMenuItem[];
}

const mobileMenuData: MenuItem[] = [
  {
    title: "Components",
    path: "https://tailgrids.com/components",
    external: true
  },
  {
    title: "Blocks",
    path: "https://tailgrids.com/blocks",
    external: true
  },
  {
    title: "Templates",
    path: "https://tailgrids.com/templates",
    external: true
  },
  {
    title: "Figma",
    path: "https://tailgrids.com/figma",
    external: true
  },

  {
    title: "Resources",
    children: [
      {
        title: "Community",
        path: "https://pimjo.com/community",
        icon: <CommunityIcon className="size-5" />,
        external: true
      },
      {
        title: "Support",
        path: "https://tailgrids.com/support",
        icon: <ChatBubbleIcon className="size-5" />,
        external: true
      },
      {
        title: "Roadmap",
        path: "https://tailgrids.com/roadmap",
        icon: <RoadMapIcon className="size-5" />,
        external: true
      },
      {
        title: "Icons",
        path: "https://tailgrids.com/icons",
        desc: "Get started with our tailgrids free icons",
        icon: <ConfettiIcon className="size-5" />,
        external: false
      },
      {
        title: "Blog",
        path: "https://tailgrids.com/blog",
        icon: <PencilTextIcon className="size-5" />,
        external: true
      }
    ]
  }
];

export default function MobileNav() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
      <div className="space-y-1">
        {mobileMenuData.map(item => {
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openAccordion === item.title;

          if (!hasChildren && item.path) {
            return (
              <Link
                key={item.title}
                href={item.path}
                target={item.external ? "_blank" : "_self"}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {item.title}
              </Link>
            );
          }

          return (
            <div key={item.title}>
              <button
                onClick={() => setOpenAccordion(isOpen ? null : item.title)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {item.title}
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="pl-3 pt-1 space-y-1">
                    {item.children?.map(child => (
                      <Link
                        key={child.title}
                        href={child.path}
                        target={child.external ? "_blank" : "_self"}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      >
                        {child.icon && (
                          <span className="text-gray-500 dark:text-gray-400">
                            {child.icon}
                          </span>
                        )}
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
