"use client";

import { cn } from "@/utils/cn";
import {
  Button,
  type ButtonProps,
  Disclosure,
  DisclosurePanel,
  type DisclosurePanelProps,
  type DisclosureProps,
  Heading,
  type HeadingProps
} from "react-aria-components";

export interface CollapsibleProps extends DisclosureProps {
  className?: string;
}

export function Collapsible({ className, ...props }: CollapsibleProps) {
  return (
    <Disclosure
      data-slot="collapsible"
      className={cn(
        "group w-full max-w-md overflow-clip rounded-xl border border-base-100 bg-card-background-50 data-expanded:pb-5 sm:data-expanded:pb-7 data-disabled:bg-button-outline-disabled-background data-disabled:cursor-not-allowed data-disabled:opacity-70",
        className
      )}
      {...props}
    />
  );
}

export interface CollapsibleTriggerProps extends ButtonProps {
  level?: HeadingProps["level"];
  className?: string;
}

export function CollapsibleTrigger({
  children,
  className,
  level = 3,
  ...props
}: CollapsibleTriggerProps) {
  return (
    <Heading level={level}>
      <Button
        slot="trigger"
        data-slot="collapsible-trigger"
        className={cn(
          "group flex w-full items-center justify-between gap-2 p-5 text-left text-title-50 outline-none sm:p-6 group-data-expanded:pb-4 group-data-expanded:font-medium group-data-expanded:text-primary-500 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </Heading>
  );
}

export interface CollapsibleContentProps extends DisclosurePanelProps {
  className?: string;
}

export function CollapsibleContent({
  className,
  ...props
}: CollapsibleContentProps) {
  return (
    <DisclosurePanel
      data-slot="collapsible-content"
      className={cn(
        "group-data-expanded:px-5 text-text-100 sm:group-data-expanded:px-6",
        className
      )}
      {...props}
    />
  );
}
