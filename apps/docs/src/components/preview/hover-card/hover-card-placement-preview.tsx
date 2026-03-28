"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/registry/core/hover-card";

export default function HoverCardPlacementPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-10">
      <HoverCard>
        <HoverCardTrigger
          href="#"
          className="h-9 text-text-50 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Top Start
        </HoverCardTrigger>

        <HoverCardContent
          side="top"
          align="start"
          sideOffset={6}
          alignOffset={0}
          className="w-48"
        >
          <p>
            This hover card is placed on the <strong>top</strong> and aligned to
            the <strong>start</strong>.
          </p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger
          href="#"
          className="h-9 text-text-50 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Bottom End
        </HoverCardTrigger>

        <HoverCardContent
          side="bottom"
          align="end"
          sideOffset={6}
          alignOffset={0}
          className="w-48"
        >
          <p>
            This hover card is placed on the <strong>bottom</strong> and aligned
            to the <strong>end</strong>.
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
