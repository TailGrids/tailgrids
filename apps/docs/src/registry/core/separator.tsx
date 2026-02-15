"use client";

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import {
  Separator as AriaSeparator,
  type SeparatorProps as AriaSeparatorProps
} from "react-aria-components";

const separatorStyles = cva("shrink-0 bg-(--border-color-base-200)", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});

export interface SeparatorProps extends AriaSeparatorProps {}

export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <AriaSeparator
      orientation={orientation}
      className={cn(separatorStyles({ orientation }), className)}
      {...props}
    />
  );
}
