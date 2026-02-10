"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/registry/core/tooltip";
import * as React from "react";

export default function TooltipControlledPreview() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-text-100 dark:text-text-200">
          The tooltip state is controlled by the parent.
        </p>

        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger
            onClick={() => setOpen(prev => !prev)}
            className="rounded-md bg-foreground-50 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-foreground-100 focus:outline-none focus:ring-2 focus:ring-button-primary-focus-ring dark:bg-background-50 dark:text-foreground-50 dark:hover:bg-neutral-100 dark:focus:ring-white/20"
          >
            {open ? "Click to Close" : "Click to Open"}
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Controlled Tooltip Content</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-(--border-color-base-100) bg-background-soft-50 px-4 py-2 dark:border-white/10 dark:bg-white/5">
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            open
              ? "bg-green-500"
              : "bg-(--border-color-base-300) dark:bg-foreground-soft-500"
          }`}
        />
        <span className="text-sm font-medium text-text-100 dark:text-text-200">
          State: <span className="font-mono">{open.toString()}</span>
        </span>
      </div>
    </div>
  );
}
