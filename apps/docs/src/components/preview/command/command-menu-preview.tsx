"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@/registry/core/command";
import {
  Code1,
  CreditCard,
  Envelope1,
  Exit,
  Gear1,
  Locked3,
  Plus,
  UserCircle1
} from "@tailgrids/icons";

export function CommandMenuPreview() {
  return (
    <Command className="max-h-80 rounded-xl border border-border-color-base-100 shadow-lg">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Account">
          <CommandItem textValue="Profile">
            <UserCircle1 className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span className="font-medium">Profile</span>
              <span className="text-xs text-text-50">
                Manage your account settings
              </span>
            </div>
            <CommandShortcut>⇧⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem textValue="Inbox">
            <Envelope1 className="mr-2 h-4 w-4" />
            <span>Inbox</span>
            <CommandShortcut>⌘I</CommandShortcut>
          </CommandItem>
          <CommandItem textValue="Billing">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Teams">
          <CommandItem textValue="Personal Team">
            <Locked3 className="mr-2 h-4 w-4" />
            <span>Personal Team</span>
          </CommandItem>
          <CommandItem textValue="TailGrids Devs">
            <Code1 className="mr-2 h-4 w-4" />
            <span>TailGrids Devs</span>
          </CommandItem>
          <CommandItem textValue="Create New Team">
            <Plus className="mr-2 h-4 w-4" />
            <span>Create New Team</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="System">
          <CommandItem textValue="Settings">
            <Gear1 className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem
            textValue="Logout"
            className="data-focused:bg-error-500/5 text-error-500"
          >
            <Exit className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default CommandMenuPreview;
