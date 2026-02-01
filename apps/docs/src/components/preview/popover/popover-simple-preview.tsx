"use client";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger
} from "@/registry/core/popover";

export default function PopoverSimplePreview() {
  return (
    <Popover>
      <PopoverTrigger>Options</PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>Popover Title</PopoverHeading>
        <PopoverDescription>
          Lorem ipsum dolor sit amet, consectetur piscing elispendisse vel velit
          lorem.
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  );
}
