"use client";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger
} from "@/registry/core/popover";

export default function PopoverActionsPreview() {
  return (
    <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>Popover Title</PopoverHeading>
        <PopoverDescription className="mb-6">
          Lorem ipsum dolor sit amet, consectetur piscing elispendisse vel velit
          lorem.
        </PopoverDescription>
        <div className="flex gap-3">
          <PopoverClose className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Yes! got it
          </PopoverClose>
          <PopoverClose className="rounded-md border border-stroke px-4 py-2 text-sm font-medium text-dark hover:bg-gray-50 dark:border-dark-3 dark:text-white dark:hover:bg-white/5">
            Learn more
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
}
