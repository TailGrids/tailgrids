"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/registry/core/popover";
import { useState } from "react";

export default function PopoverControlledPreview() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={() => setOpen(!open)}>Toggle</PopoverTrigger>
      <PopoverContent>
        <p>This popover is fully controlled.</p>
      </PopoverContent>
    </Popover>
  );
}
