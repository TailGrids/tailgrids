"use client";

import { cn } from "@/utils/cn";
import {
  OverlayArrow as AriaOverlayArrow,
  OverlayArrowProps as AriaOverlayArrowProps,
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps
} from "react-aria-components";

export interface PopoverProps extends AriaPopoverProps { }

export function Popover({ className, ...props }: PopoverProps) {
  return (
    <AriaPopover
      className={cn(
        "p-5 pt-3 border border-popover-border text-text-50 bg-background-100 rounded-xl",
        className
      )}
      {...props}
    />
  );
}

export interface PopoverArrowProps extends AriaOverlayArrowProps { }

export function PopoverArrow({ className, ...props }: PopoverArrowProps) {
  return (
    <AriaOverlayArrow className={cn("group", className)} {...props}>
      <svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        className="block fill-background-100 stroke-1 stroke-popover-border group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90"
      >
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </AriaOverlayArrow>
  );
}
