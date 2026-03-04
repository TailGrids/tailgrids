"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@/registry/core/command";
import {
  Calendar,
  CreditCard,
  EmojiSmile,
  Gear1,
  Rocket1,
  UserCircle1
} from "@tailgrids/icons";
import { useState } from "react";

export function CommandDialogPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full max-w-lg flex-col items-center justify-center rounded-lg border border-border-color-base-100 bg-background-50 p-10 shadow-sm">
      <p className="text-text-50 text-sm">
        Press{" "}
        <kbd className="bg-background-soft-50 text-text-100 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border-color-base-100 px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog
        isOpen={open}
        onOpenChange={setOpen}
        className="rounded-xl border border-border-color-base-100 shadow-2xl"
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem textValue="Calendar">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem textValue="Search Emoji">
              <EmojiSmile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem textValue="Launch">
              <Rocket1 className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem textValue="Profile">
              <UserCircle1 className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem textValue="Billing">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem textValue="Settings">
              <Gear1 className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

export default CommandDialogPreview;
