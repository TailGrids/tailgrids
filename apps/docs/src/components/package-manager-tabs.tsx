"use client";

import { BunIcon, NpmIcon, PnpmIcon, PnpmIconDark, YarnIcon } from "@/icons";
import { cn } from "@/utils/cn";
import * as UnstyledTabs from "fumadocs-ui/components/tabs.unstyled";
import * as React from "react";

export function CodeBlockTabs({
  className,
  children,
  ...props
}: React.ComponentProps<typeof UnstyledTabs.Tabs>) {
  return (
    <UnstyledTabs.Tabs
      data-pkg-tabs=""
      groupId="language"
      className={cn(
        "p-2.5 flex flex-col gap-2.5 bg-[#f9fafb] rounded-[1.75rem] shadow-[0_0_0_1px_#e5e7eb] dark:bg-[#111827] dark:shadow-[0_0_0_1px_#1f2937]",
        className
      )}
      {...props}
    >
      {children}
    </UnstyledTabs.Tabs>
  );
}

export function CodeBlockTabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof UnstyledTabs.TabsList>) {
  return (
    <UnstyledTabs.TabsList
      className={cn(
        "px-3 border-b flex gap-3 max-md:overflow-x-scroll",
        className
      )}
      {...props}
    >
      {children}
    </UnstyledTabs.TabsList>
  );
}

const PackageManagerIcons: Record<string, React.ReactElement> = {
  npm: <NpmIcon className="size-3.5!" />,
  pnpm: (
    <>
      <PnpmIcon className="block dark:hidden size-3.5!" />
      <PnpmIconDark className="hidden dark:block size-3.5!" />
    </>
  ),
  yarn: <YarnIcon className="size-4!" />,
  bun: <BunIcon className="size-4!" />
};

export function CodeBlockTabsTrigger({
  className,
  children,
  value,
  ...props
}: React.ComponentProps<typeof UnstyledTabs.TabsTrigger> & { value?: string }) {
  const key = (value ?? "").toLowerCase().replace(/-/g, "");
  const icon = PackageManagerIcons[key] ?? null;

  return (
    <UnstyledTabs.TabsTrigger
      value={value!}
      className={cn(
        "px-1 py-2.5 -mb-px border-b border-transparent text-sm text-[#374151] font-medium relative inline-flex items-center gap-1.5 whitespace-nowrap transition-colors duration-300 hover:text-primary-500 data-[state=active]:border-(--fd-primary) data-[state=active]:text-primary-500 disabled:pointer-events-none disabled:opacity-50 dark:text-[#9ca3af] dark:hover:text-primary-400 dark:data-[state=active]:text-primary-400",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </UnstyledTabs.TabsTrigger>
  );
}

export function CodeBlockTab({
  className,
  ...props
}: React.ComponentProps<typeof UnstyledTabs.TabsContent>) {
  return (
    <UnstyledTabs.TabsContent
      className={cn(
        "outline-none mt-0 [&_figure]:my-0 [&_figure]:rounded-[1.25rem] [&_figure>div]:top-4.25 [&_figure_button[aria-label='Copy_Text']]:h-3.25 [&_figure_button[aria-label='Copied_Text']]:h-3.25",
        className
      )}
      {...props}
    />
  );
}
