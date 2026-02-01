"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/registry/core/popover";

export default function PopoverPlacementPreview() {
  return (
    <Popover placement="right-start">
      <PopoverTrigger>Right Popover</PopoverTrigger>
      <PopoverContent>Content positioned on the right.</PopoverContent>
    </Popover>
  );
}
