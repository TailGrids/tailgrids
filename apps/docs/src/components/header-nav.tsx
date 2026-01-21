"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import GradientImage from "@/assets/navbar/graphic.png";
import {
  DashboardSquare1,
  Megaphone1,
  PieChart1,
  Cart2,
  Layout14
} from "@tailgrids/icons";
import {
  LongArrowUpRightIcon,
  CheckmarkIcon,
  CommunityIcon,
  ChatBubbleIcon,
  RoadMapIcon,
  PencilTextIcon,
  AIIcon
} from "./ui/icons";
import Image from "next/image";

// Menu data with submenus
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
  isBlocksDropdown?: boolean;
  isProductsDropdown?: boolean;
  isResourcesDropdown?: boolean;
}

const menuData: MenuItem[] = [
  {
    title: "Components",
    path: "/components",
    external: false
  },
  {
    title: "Blocks",
    isBlocksDropdown: true,
    children: [
      {
        title: "Application",
        path: "https://staging.tailgrids.com/blocks#application",
        desc: "Components crafted for build all kind of modern webapps and sites",
        icon: <Layout14 className="size-6" />,
        external: false
      },
      {
        title: "Marketing",
        path: "https://staging.tailgrids.com/blocks#marketing",
        desc: "All you need to create stunning and high-converting landing pages",
        icon: <Megaphone1 className="size-6" />,
        external: false
      },
      {
        title: "Dashboard",
        path: "https://staging.tailgrids.com/blocks#dashboard",
        desc: "Build data-rich modern backends, dashboards and admin panels",
        icon: <PieChart1 className="size-6" />,
        external: false
      },
      {
        title: "E-commerce",
        path: "https://staging.tailgrids.com/blocks#e-commerce",
        desc: "Components and Pages need to build complete online store UI",
        icon: <Cart2 className="size-6" />,
        external: false
      },
      {
        title: "AI Components",
        path: "https://staging.tailgrids.com/blocks#ai-components",
        desc: "All you need to create stunning AI tools & landing pages",
        icon: <AIIcon className="size-6" />,
        external: false
      },
      {
        title: "Core Components",
        path: "/docs/components",
        desc: "Core UI Components to kickstart any web projects - Open-source",
        icon: <DashboardSquare1 className="size-6" />,
        external: false
      }
    ]
  },
  {
    title: "Templates",
    path: "https://tailgrids.com/templates",
    external: false
  },
  // Products dropdown - reserved for future use
  // {
  //   title: "Products",
  //   isProductsDropdown: true,
  //   children: [
  //     {
  //       title: "Tailgrids React",
  //       path: "https://tailgrids.com/react",
  //       desc: "React components with Tailwind CSS",
  //       icon: <ColoredReactIcon className="size-6" />,
  //       external: true
  //     },
  //     {
  //       title: "Tailgrids Vue",
  //       path: "https://tailgrids.com/vue",
  //       desc: "Vue components with Tailwind CSS",
  //       icon: <ColoredVueIcon className="size-6" />,
  //       external: true
  //     },
  //     {
  //       title: "Tailgrids Figma",
  //       path: "https://tailgrids.com/figma",
  //       desc: "Figma design system",
  //       icon: <ColoredFigmaIcon className="size-6" />,
  //       external: true
  //     }
  //   ]
  // },
  {
    title: "Resources",
    isResourcesDropdown: true,
    children: [
      {
        title: "Community",
        path: "https://staging.tailgrids.com/community",
        desc: "Connect, share, and grow with fellow users",
        icon: <CommunityIcon className="size-6" />,
        external: false
      },
      {
        title: "Support",
        path: "https://staging.tailgrids.com/support",
        desc: "Need help? Our team's here for you",
        icon: <ChatBubbleIcon className="size-6" />,
        external: false
      },
      {
        title: "Roadmap",
        path: "https://staging.tailgrids.com/roadmap",
        desc: "Discover upcoming features and releases",
        icon: <RoadMapIcon className="size-6" />,
        external: false
      },
      {
        title: "Blog",
        path: "https://staging.tailgrids.com/blog",
        desc: "Fresh news and product updates",
        icon: <PencilTextIcon className="size-6" />,
        external: false
      }
    ]
  }
];

export default function HeaderNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <nav className="hidden xl:flex">
      <ul className="flex items-center gap-1">
        {menuData.map((menuItem, index) => {
          const hasDropdown = menuItem.children && menuItem.children.length > 0;
          const isOpen = openDropdown === menuItem.title;

          return (
            <li
              key={index}
              className="group relative"
              onMouseEnter={() =>
                hasDropdown && setOpenDropdown(menuItem.title)
              }
              onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
            >
              {menuItem.path ? (
                <Link
                  href={menuItem.path}
                  target={menuItem.external ? "_blank" : "_self"}
                  className="inline-flex items-center gap-0.5 rounded-lg px-2 py-1.5 text-sm font-medium text-tg-text-color duration-200 hover:bg-gray-100 hover:text-tg-title-color dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                >
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <button
                    className="inline-flex items-center gap-0.5 rounded-lg px-2 py-1.5 text-sm font-medium text-tg-text-color duration-200 hover:bg-gray-100 hover:text-tg-title-color dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                    onClick={() =>
                      setOpenDropdown(isOpen ? null : menuItem.title)
                    }
                  >
                    {menuItem.title}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-200",
                        {
                          "rotate-180": isOpen
                        }
                      )}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {menuItem.isBlocksDropdown ? (
                    // Blocks Dropdown - 2 column grid with icons
                    <div
                      className={cn(
                        "absolute left-0 top-full mt-2 z-50 grid grid-cols-2 gap-4 rounded-[20px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 shadow-lg transition-all duration-200 w-[704px]",
                        isOpen
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 -translate-y-2"
                      )}
                    >
                      {/* Center divider */}
                      <div className="absolute top-2 left-1/2 h-[calc(100%-16px)] w-px bg-gray-200 dark:bg-gray-700" />

                      {menuItem.children?.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.path}
                          target={item.external ? "_blank" : "_self"}
                          className="flex gap-3 rounded-[14px] p-4 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          {item.icon && (
                            <div className="text-gray-500 dark:text-gray-400 shrink-0">
                              {item.icon}
                            </div>
                          )}
                          <div>
                            <span className="mb-1 block text-base font-medium tracking-tight text-gray-900 dark:text-gray-100">
                              {item.title}
                            </span>
                            {item.desc && (
                              <span className="block text-sm text-gray-500 dark:text-gray-400">
                                {item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : menuItem.isProductsDropdown ? (
                    // Products Dropdown - 2 column with promo card
                    <div
                      className={cn(
                        "absolute left-0 top-full mt-2 z-50 grid grid-cols-2 gap-4 rounded-[20px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 shadow-lg transition-all duration-200 w-[654px]",
                        isOpen
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 -translate-y-2"
                      )}
                    >
                      <div>
                        {menuItem.children?.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.path}
                            target={item.external ? "_blank" : "_self"}
                            className="flex gap-3 rounded-[14px] p-4 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            {item.icon && (
                              <div className="flex size-11 shrink-0 border dark:border-[#111827] items-center justify-center rounded-xl bg-white dark:bg-gray-800  ">
                                <div className="text-gray-600 dark:text-gray-300">
                                  {item.icon}
                                </div>
                              </div>
                            )}
                            <div>
                              <span className="mb-1 block text-base font-medium tracking-tight text-gray-900 dark:text-gray-100">
                                {item.title}
                              </span>
                              <span className="block text-sm text-gray-500 dark:text-gray-400">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="relative flex flex-col justify-between overflow-hidden rounded-[14px] border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6">
                        <Image
                          src={GradientImage}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="relative z-10">
                          <div className="mb-2 flex justify-between">
                            <span className="text-sm font-medium tracking-tight text-primary-500">
                              What's new in version 3.0
                            </span>
                            <LongArrowUpRightIcon className="size-5 text-gray-600 dark:text-gray-400" />
                          </div>
                          <h3 className="text-xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
                            A Complete Redesign with Fresh Components
                          </h3>
                        </div>
                        <div className="relative z-10">
                          <ul className="mt-4 space-y-2">
                            <li className="flex gap-2">
                              <CheckmarkIcon className="size-5 text-green-600" />
                              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Simplified core components
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <CheckmarkIcon className="size-5 text-green-600" />
                              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                200+ new improved components
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <CheckmarkIcon className="size-5 text-green-600" />
                              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                And much more...
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : menuItem.isResourcesDropdown ? (
                    // Resources Dropdown - single column with icons
                    <div
                      className={cn(
                        "absolute left-0 top-full mt-2 z-50 grid gap-4 rounded-[20px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 shadow-lg transition-all duration-200 w-[370px]",
                        isOpen
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 -translate-y-2"
                      )}
                    >
                      <div>
                        {menuItem.children?.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.path}
                            target={item.external ? "_blank" : "_self"}
                            className="flex gap-3 rounded-[14px] p-4 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            {item.icon && (
                              <div className="text-gray-500 dark:text-gray-400">
                                {item.icon}
                              </div>
                            )}
                            <div>
                              <span className="mb-1 block text-base font-medium tracking-tight text-gray-900 dark:text-gray-100">
                                {item.title}
                              </span>
                              <span className="block text-sm text-gray-500 dark:text-gray-400">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Regular Dropdown
                    <div
                      className={cn(
                        "absolute left-0 top-full mt-2 z-50 min-w-[280px] rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 shadow-lg transition-all duration-200",
                        isOpen
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 -translate-y-2"
                      )}
                    >
                      {menuItem.children?.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.path}
                          target={item.external ? "_blank" : "_self"}
                          className="flex flex-col gap-0.5 rounded-lg p-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {item.title}
                          </span>
                          {item.desc && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {item.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
