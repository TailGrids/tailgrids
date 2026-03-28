"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger
} from "@/registry/core/popover";

export default function PopoverDefaultPreview() {
  return (
    <Popover>
      <PopoverTrigger className={buttonStyles({ appearance: "outline" })}>
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
