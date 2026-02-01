"use client";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverHeading,
  PopoverTrigger
} from "@/registry/core/popover";

export default function PopoverWithCloseButtonPreview() {
  return (
    <Popover>
      <PopoverTrigger>Details</PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>Profile</PopoverHeading>
        <p className="text-sm">Edit your personal information.</p>

        <PopoverClose className="mt-4 text-sm underline">Close</PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
