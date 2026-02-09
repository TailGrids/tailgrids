"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/registry/core/tooltip";

export default function TooltipDefaultPreview() {
  return (
    <div className="w-full max-w-lg mx-auto flex items-center justify-center p-8">
      <Tooltip>
        <TooltipTrigger className="rounded-md bg-button-primary-background px-5 py-2.5 text-sm font-medium text-white transition hover:bg-button-primary-hover-background focus:outline-none focus:ring-2 focus:ring-button-primary-focus-ring">
          Hover me
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
