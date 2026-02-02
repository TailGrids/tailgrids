"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/registry/core/tooltip";

export default function TooltipDefaultPreview() {
  return (
    <div className="flex items-center justify-center p-8">
      <Tooltip>
        <TooltipTrigger className="rounded-md bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20">
          Hover me
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
