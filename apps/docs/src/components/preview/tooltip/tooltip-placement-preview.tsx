"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/registry/core/tooltip";

export default function TooltipPlacementPreview() {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center gap-6 p-8">
      <h3 className="text-base font-semibold text-text-50 dark:text-text-200">
        All Placements Example
      </h3>

      <div className="grid w-full max-w-[320px] grid-cols-3 gap-4 rounded-lg border border-dashed border-(--border-color-base-300) p-6 dark:border-foreground-soft-200">
        <div className="col-start-2 flex justify-center">
          <Tooltip placement="top">
            <TooltipTrigger className="rounded-md border border-(--border-color-base-100) bg-background-50 px-4 py-2 text-sm font-medium text-text-50 shadow-sm transition hover:bg-background-soft-50 dark:border-white/10 dark:bg-foreground-50 dark:text-text-200 dark:hover:bg-foreground-soft-200">
              Top
            </TooltipTrigger>
            <TooltipContent>Tooltip on top</TooltipContent>
          </Tooltip>
        </div>

        <div className="col-start-1 flex items-center justify-center">
          <Tooltip placement="left">
            <TooltipTrigger className="rounded-md border border-(--border-color-base-100) bg-background-50 px-4 py-2 text-sm font-medium text-text-50 shadow-sm transition hover:bg-background-soft-50 dark:border-white/10 dark:bg-foreground-50 dark:text-text-200 dark:hover:bg-foreground-soft-200">
              Left
            </TooltipTrigger>
            <TooltipContent>Tooltip on left</TooltipContent>
          </Tooltip>
        </div>

        <div className="col-start-3 flex items-center justify-center">
          <Tooltip placement="right">
            <TooltipTrigger className="rounded-md border border-(--border-color-base-100) bg-background-50 px-4 py-2 text-sm font-medium text-text-50 shadow-sm transition hover:bg-background-soft-50 dark:border-white/10 dark:bg-foreground-50 dark:text-text-200 dark:hover:bg-foreground-soft-200">
              Right
            </TooltipTrigger>
            <TooltipContent>Tooltip on right</TooltipContent>
          </Tooltip>
        </div>

        <div className="col-start-2 flex justify-center">
          <Tooltip placement="bottom">
            <TooltipTrigger className="rounded-md border border-(--border-color-base-100) bg-background-50 px-4 py-2 text-sm font-medium text-text-50 shadow-sm transition hover:bg-background-soft-50 dark:border-white/10 dark:bg-foreground-50 dark:text-text-200 dark:hover:bg-foreground-soft-200">
              Bottom
            </TooltipTrigger>
            <TooltipContent>Tooltip on bottom</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
