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
          <PopoverClose className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white-100 hover:bg-primary-700">
            Yes! got it
          </PopoverClose>
          <PopoverClose className="rounded-md border border-stroke px-4 py-2 text-sm font-medium text-dark hover:bg-background-soft-100 dark:border-dark-3 dark:text-white-100 dark:hover:bg-background-soft-500">
            Learn more
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
}
