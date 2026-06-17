"use client";

import { Button } from "@/registry/core/button";
import { OverlayWrapper } from "@/registry/core/overlay";
import { Popover, PopoverArrow } from "@/registry/core/popover";
import { InfoCircle } from "@tailgrids/icons";
import { useRef } from "react";

export default function PopoverCustomAnchorPreview() {
  const triggerRef = useRef<HTMLParagraphElement>(null);

  return (
    <OverlayWrapper>
      <div className="flex items-center gap-5">
        <Button variant="primary">Open Popover</Button>

        <p ref={triggerRef}>
          <InfoCircle size={16} />
        </p>
      </div>

      <Popover triggerRef={triggerRef} className="max-w-64" placement="right">
        <h3 className="text-sm font-semibold text-title-50">Custom Anchor</h3>
        <p className="mt-1 text-xs text-text-100">
          The popover is anchored to the info icon on the right.
        </p>
        <PopoverArrow />
      </Popover>
    </OverlayWrapper>
  );
}
