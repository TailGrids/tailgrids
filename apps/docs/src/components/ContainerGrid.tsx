import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
  rootClassName?: string;
  contentClassName?: string;
  darkBg?: boolean;
};

export function ContainerWithGrid({
  children,
  rootClassName,
  contentClassName,
  darkBg
}: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-clip dark:bg-gray-950 dark:[--pattern-fg:var(--border-2)] bg-white [--pattern-fg:var(--border-1)]",
        rootClassName
      )}
    >
      {/* main content */}
      <div className={cn("relative w-full px-6 lg:px-10", contentClassName)}>
        {children}
      </div>

      {/* Left patterned border */}
      <div
        className={cn(
          "pointer-events-none absolute left-0 top-0 bottom-0 w-4 md:w-10 border-r border-r-(--pattern-fg)",
          "bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]",
          "bg-size-[10px_10px] bg-fixed"
        )}
      />

      {/* Right patterned border */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-0 bottom-0 w-4 md:w-10 border-l border-l-(--pattern-fg)",
          "bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]",
          "bg-size-[10px_10px] bg-fixed border-r border-r-(--pattern-fg)"
        )}
      />
    </div>
  );
}

export function BorderLine({
  className,
  position,
  darkBg
}: {
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
  darkBg?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute bg-(--pattern-fg)",
        {
          "top-0 left-1/2 h-px w-[200vw] -translate-x-1/2": position === "top",
          "bottom-0 left-1/2 h-px w-[200vw] -translate-x-1/2":
            position === "bottom",
          "top-0 left-0 h-[200vh] w-px": position === "left",
          "top-0 right-0 h-[200vh] w-px": position === "right"
        },
        darkBg
          ? "[--pattern-fg:var(--border-2)]"
          : "[--pattern-fg:var(--border-1)]",
        className
      )}
    />
  );
}
