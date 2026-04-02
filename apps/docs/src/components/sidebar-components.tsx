"use client";

import type * as PageTree from "fumadocs-core/page-tree";
import {
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
  SidebarSeparator
} from "fumadocs-ui/components/layout/sidebar";
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

/**
 * Custom Separator component.
 * Renders a styled section header instead of a plain separator line.
 */
export function CustomSeparator({ item }: { item: PageTree.Separator }) {
  return <SidebarSeparator>{item.name}</SidebarSeparator>;
}
