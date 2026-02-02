"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/registry/core/tooltip";

export default function TooltipAsChildPreview() {
  return (
    <div className="flex items-center justify-center gap-4 p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            View Details
          </a>
        </TooltipTrigger>
        <TooltipContent>Click to see the full report.</TooltipContent>
      </Tooltip>
    </div>
  );
}
