"use client";

import { Button } from "@/registry/core/button";
import { OverlayWrapper } from "@/registry/core/overlay";
import { Popover, PopoverArrow } from "@/registry/core/popover";

export default function PopoverPreview() {
  return (
    <OverlayWrapper>
      <Button appearance="outline">Open Popover</Button>

      <Popover>
        <h2 className="text-lg font-semibold">Popover Title</h2>
        <p className="text-sm text-muted-foreground">
          This is a popover with heading and description.
        </p>
        <PopoverArrow />
      </Popover>
    </OverlayWrapper>
  );
}
