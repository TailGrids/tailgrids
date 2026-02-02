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
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The tooltip state is controlled by the parent.
        </p>

        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger
            onClick={() => setOpen(prev => !prev)}
            className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 dark:bg-white dark:text-black dark:hover:bg-neutral-100 dark:focus:ring-white/20"
          >
            {open ? "Click to Close" : "Click to Open"}
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Controlled Tooltip Content</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 dark:border-white/10 dark:bg-white/5">
        <div
          className={`h-2.5 w-2.5 rounded-full ${
            open ? "bg-green-500" : "bg-neutral-300 dark:bg-neutral-600"
          }`}
        />
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
          State: <span className="font-mono">{open.toString()}</span>
        </span>
      </div>
    </div>
  );
}
