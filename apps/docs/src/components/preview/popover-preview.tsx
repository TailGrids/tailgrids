"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeading,
  PopoverDescription,
  PopoverClose
} from "@/registry/core/popover";

export default function PopoverPreview() {
  return (
    <Popover>
      <PopoverTrigger className="px-4 py-2 rounded-lg border">
        Open Popover
      </PopoverTrigger>

      <PopoverContent>
        <PopoverHeading>Popover Title</PopoverHeading>
        <PopoverDescription>
          This is a popover with heading and description.
        </PopoverDescription>

        <PopoverClose className="mt-4 text-sm underline">Close</PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
