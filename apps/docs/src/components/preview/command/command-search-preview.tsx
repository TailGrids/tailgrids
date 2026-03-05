"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/registry/core/command";
import { FileText, Folder1, Search1 } from "@tailgrids/icons";

export function CommandSearchPreview() {
  return (
    <Command className="rounded-xl border border-border-color-base-100 shadow-lg">
      <CommandInput placeholder="Search files, folders..." />
      <CommandList>
        <CommandEmpty>No results found for your search.</CommandEmpty>
        <CommandGroup heading="Recent Files">
          <CommandItem textValue="index.tsx">
            <FileText className="mr-2 h-4 w-4" />
            <div className="flex flex-1 items-center justify-between">
              <span>index.tsx</span>
              <span className="text-[10px] text-text-50">src/components</span>
            </div>
          </CommandItem>
          <CommandItem textValue="utils.ts">
            <FileText className="mr-2 h-4 w-4" />
            <div className="flex flex-1 items-center justify-between">
              <span>utils.ts</span>
              <span className="text-[10px] text-text-50">src/lib</span>
            </div>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Folders">
          <CommandItem textValue="components">
            <Folder1 className="mr-2 h-4 w-4" />
            <span>components</span>
          </CommandItem>
          <CommandItem textValue="hooks">
            <Folder1 className="mr-2 h-4 w-4" />
            <span>hooks</span>
          </CommandItem>
          <CommandItem textValue="styles">
            <Folder1 className="mr-2 h-4 w-4" />
            <span>styles</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick Actions">
          <CommandItem textValue="Global Search">
            <Search1 className="mr-2 h-4 w-4" />
            <span>Global Search</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default CommandSearchPreview;
