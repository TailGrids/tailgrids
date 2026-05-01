"use client";

import { ChevronRight } from "@tailgrids/icons";
import type * as PageTree from "fumadocs-core/page-tree";
import {
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
  SidebarSeparator
} from "fumadocs-ui/components/layout/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Recursively checks whether any page inside a folder matches the current path */
function isFolderActive(item: PageTree.Folder, pathname: string): boolean {
  for (const child of item.children) {
    if (child.type === "page" && pathname === child.url) return true;
    if (child.type === "folder" && isFolderActive(child, pathname)) return true;
  }
  return false;
}

export function CustomFolder({
  item,
  children
}: {
  item: PageTree.Folder;
  level: number;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = isFolderActive(item, pathname);
  const defaultOpen = item.defaultOpen ?? isActive;

  return (
    <SidebarFolder
      defaultOpen={defaultOpen}
      className="first-of-type:border-t border-[#d1d5db] border-dashed first-of-type:pt-2 dark:border-[rgb(255,255,255,0.3)] [&>a]:text-[#374151]! dark:[&>a]:text-white! [&>a]:font-semibold!"
    >
      {item.index ? (
        <SidebarFolderLink href={item.index.url} external={item.index.external}>
          {item.icon}
          {item.name}
        </SidebarFolderLink>
      ) : (
        <SidebarFolderTrigger>
          {item.icon}
          {item.name}
        </SidebarFolderTrigger>
      )}
      <SidebarFolderContent>{children}</SidebarFolderContent>
    </SidebarFolder>
  );
}

export function CustomSeparator({ item }: { item: PageTree.Separator }) {
  return <SidebarSeparator>{item.name}</SidebarSeparator>;
}

export function TocBanner() {
  return (
    <div className="mt-6 p-1.5 pb-3 bg-[#f3f4f6] rounded-xl dark:bg-[#111827]">
      <Link
        href="https://tailgrids.com/blocks"
        target="_blank"
        className="inline-block bg-white rounded-lg shadow-terminal dark:bg-white/17"
      >
        <Image
          width={253}
          height={136}
          quality={100}
          src="/docs/images/products/tailgrids-pro.png"
          alt="Tailgrids Pro"
          className="rounded-[5px]"
          unoptimized
        />
      </Link>

      <div className="px-1.5 mt-3">
        <p className="text-sm text-[#374151] -tracking-[0.2px] dark:text-[#ffffffcc]">
          Access 600+ blocks, components and templates - built for speed, consistency, and scale.
        </p>

        <Link
          href="https://tailgrids.com/pricing?utm_source=docs&utm_medium=banner&utm_campaign=pro"
          target="_blank"
          className="w-full mt-3 px-[18px_12px] py-2.75 text-white text-sm font-medium bg-primary-500 flex items-center justify-center gap-2 -tracking-[0.2px] rounded-lg shadow-[0_16px_8px_0_rgba(31,31,31,0.01),0_12px_6px_0_rgba(31,31,31,0.04),0_4px_4px_0_rgba(31,31,31,0.07),0_1.5px_3px_0_rgba(31,31,31,0.08),0_0_0_1px_#2237EE,0_1px_3px_0_rgba(255,255,255,0.30)_inset] transition-colors duration-200 hover:bg-primary-600 focus-visible:bg-primary-600"
        >
          Get Tailgrids Pro
          <ChevronRight size={20} className="text-white/70" />
        </Link>
      </div>
    </div>
  );
}
