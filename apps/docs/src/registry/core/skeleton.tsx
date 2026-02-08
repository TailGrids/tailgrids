import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "animate-pulse-custom h-3 rounded-full bg-skeleton-gradient-50",
        className
      )}
      {...props}
    />
  );
}
