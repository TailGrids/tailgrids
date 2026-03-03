"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/registry/core/hover-card";

export default function HoverCardPreview() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover Me</HoverCardTrigger>
      <HoverCardContent>
        <p>Hover Card Content</p>
      </HoverCardContent>
    </HoverCard>
  );
}
