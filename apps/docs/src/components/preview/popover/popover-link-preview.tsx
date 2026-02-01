"use client";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger
} from "@/registry/core/popover";

export default function PopoverLinkPreview() {
  return (
    <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>Popover Title</PopoverHeading>
        <PopoverDescription className="mb-5">
          Lorem ipsum dolor sit amet, consectetur piscing elispendisse vel velit
          lorem.
        </PopoverDescription>
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Learn more
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </PopoverContent>
    </Popover>
  );
}
