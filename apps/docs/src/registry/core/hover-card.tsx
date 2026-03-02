"use client";

import { cn } from "@/utils/cn";
import { PreviewCard } from "@base-ui/react/preview-card";

function HoverCard({ ...props }: PreviewCard.Root.Props) {
  return <PreviewCard.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({ ...props }: PreviewCard.Trigger.Props) {
  return <PreviewCard.Trigger data-slot="hover-card-trigger" {...props} />;
}

function HoverCardContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 4,
  ...props
}: PreviewCard.Popup.Props &
  Pick<
    PreviewCard.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <PreviewCard.Portal data-slot="hover-card-portal">
      <PreviewCard.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PreviewCard.Popup
          data-slot="hover-card-content"
          className={cn(
            "ring-(--border-color-base-50) bg-background-50 text-text-50 w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 outline-hidden",
            className
          )}
          {...props}
        />
      </PreviewCard.Positioner>
    </PreviewCard.Portal>
  );
}

export { HoverCard, HoverCardContent, HoverCardTrigger };
