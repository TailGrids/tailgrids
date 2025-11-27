"use client";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@/registry/core/tooltip";

export default function TooltipPreview() {
  return (
    <div className="flex flex-col items-center gap-12 w-full p-8 rounded-lg">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-base font-semibold text-neutral-700 dark:text-neutral-300">
          All Placements Example
        </h3>

        <div className="relative h-40 w-80 flex items-center justify-center border border-dashed border-neutral-300 dark:border-neutral-800 rounded-md">
          <Tooltip placement="left">
            <TooltipTrigger className="absolute left-0 top-1/2 -translate-y-1/2 p-2 border rounded-md">
              Left
            </TooltipTrigger>
            <TooltipContent>To the left</TooltipContent>
          </Tooltip>

          <Tooltip placement="top">
            <TooltipTrigger className="absolute top-0 left-1/2 -translate-x-1/2 p-2 border rounded-md">
              Top
            </TooltipTrigger>
            <TooltipContent>To the top</TooltipContent>
          </Tooltip>

          <Tooltip placement="bottom">
            <TooltipTrigger className="absolute bottom-0 left-1/2 -translate-x-1/2 p-2 border rounded-md">
              Bottom
            </TooltipTrigger>
            <TooltipContent>To the bottom</TooltipContent>
          </Tooltip>

          <Tooltip placement="right">
            <TooltipTrigger className="absolute right-0 top-1/2 -translate-y-1/2 p-2 border rounded-md">
              Right
            </TooltipTrigger>
            <TooltipContent>To the right</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
