"use client";

import { cn } from "@/utils/cn";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { cva, type VariantProps } from "class-variance-authority";

const scrollBarStyles = cva(
  "flex touch-none p-px transition-colors select-none bg-background-soft-100 rounded-[inherit]",
  {
    variants: {
      orientation: {
        vertical: "h-full w-2.5 border-x border-x-transparent",
        horizontal: "h-2.5 flex-col border-y border-y-transparent"
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);

const scrollBarThumbStyles = cva(
  "rounded-full relative flex-1 bg-background-soft-500"
);

interface ScrollBarProps
  extends
    Omit<ScrollAreaPrimitive.Scrollbar.Props, "orientation">,
    VariantProps<typeof scrollBarStyles> {}

function ScrollArea({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Root.Props) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      {children}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollAreaViewport({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Viewport.Props) {
  return (
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      className={cn(
        "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-3 focus-visible:ring-input-primary-focus-border/20 focus-visible:outline-1",
        className
      )}
      {...props}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation || "vertical"}
      orientation={orientation || "vertical"}
      className={cn(scrollBarStyles({ orientation }), className)}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className={cn(scrollBarThumbStyles(), className)}
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollAreaViewport, ScrollBar };
