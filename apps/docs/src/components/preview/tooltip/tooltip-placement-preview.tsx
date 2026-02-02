"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/registry/core/tooltip";

export default function TooltipPlacementPreview() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <h3 className="text-base font-semibold text-neutral-700 dark:text-neutral-300">
        All Placements Example
      </h3>

      <div className="grid w-full max-w-[320px] grid-cols-3 gap-4 rounded-lg border border-dashed border-neutral-300 p-6 dark:border-neutral-800">
        <div className="col-start-2 flex justify-center">
          <Tooltip placement="top">
            <TooltipTrigger className="rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800">
              Top
            </TooltipTrigger>
            <TooltipContent>Tooltip on top</TooltipContent>
          </Tooltip>
        </div>

        <div className="col-start-1 flex items-center justify-center">
          <Tooltip placement="left">
            <TooltipTrigger className="rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800">
              Left
            </TooltipTrigger>
            <TooltipContent>Tooltip on left</TooltipContent>
          </Tooltip>
        </div>

        <div className="col-start-3 flex items-center justify-center">
          <Tooltip placement="right">
            <TooltipTrigger className="rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800">
              Right
            </TooltipTrigger>
            <TooltipContent>Tooltip on right</TooltipContent>
          </Tooltip>
        </div>

        <div className="col-start-2 flex justify-center">
          <Tooltip placement="bottom">
            <TooltipTrigger className="rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800">
              Bottom
            </TooltipTrigger>
            <TooltipContent>Tooltip on bottom</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
