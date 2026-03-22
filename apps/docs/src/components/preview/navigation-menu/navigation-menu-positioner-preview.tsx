"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger
} from "@/registry/core/navigation-menu";
import Image from "next/image";
import { useRef } from "react";

export default function NavigationMenuPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <NavigationMenu ref={containerRef}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
                <div className="row-span-3">
                  <NavigationMenuLink
                    href="/"
                    className="in-data-[slot=navigation-menu-content]:h-full w-full bg-background-200 flex flex-col items-start justify-end gap-5 rounded-md no-underline outline-hidden select-none focus:shadow-md"
                  >
                    <Image
                      src={"/docs/images/tailgrids-full-logo.svg"}
                      width={150}
                      height={40}
                      className="dark:hidden max-[400px]:w-30"
                      alt="Tailgrids Logo"
                    />
                    <div>
                      <div className="text-lg font-medium text-title-100">
                        Tailgrids UI
                      </div>
                      <p className="text-sm leading-tight text-text-100">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </div>

                <NavigationMenuLink
                  href="/docs"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden"
                >
                  <div className="text-sm font-medium leading-none text-title-100">
                    Introduction
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-text-100">
                    Re-usable components built using Base UI and Tailwind CSS.
                  </p>
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/docs/installation"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden"
                >
                  <div className="text-sm font-medium leading-none text-title-100">
                    Installation
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-text-100">
                    How to install dependencies and structure your app.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/docs/components/navigation-menu"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden"
                >
                  <div className="text-sm font-medium leading-none text-title-100">
                    Typography
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-text-100">
                    Styles for headings, paragraphs, lists, etc.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                {components.map(component => (
                  <li key={component.title}>
                    <NavigationMenuLink
                      href={component.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden"
                    >
                      <div className="text-sm font-medium leading-none text-title-100">
                        {component.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-text-100">
                        {component.description}
                      </p>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuPositioner anchor={containerRef} />
      </NavigationMenu>
    </div>
  );
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/components/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
];
