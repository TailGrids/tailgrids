"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxItem,
  ComboboxList
} from "@/registry/core/combobox/combobox";
import { FileText, Gear1, Message1, Search1, User2 } from "@tailgrids/icons";

const commands = [
  {
    id: "search-docs",
    name: "Search Documentation",
    icon: Search1,
    shortcut: "⌘D"
  },
  { id: "new-file", name: "Create New File", icon: FileText, shortcut: "⌘N" },
  { id: "settings", name: "Open Settings", icon: Gear1, shortcut: "⌘S" },
  { id: "profile", name: "View Profile", icon: User2, shortcut: "⌘P" },
  { id: "feedback", name: "Send Feedback", icon: Message1, shortcut: "⌘F" }
];

export default function ComboboxCommandPreview() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-dropdown-background overflow-hidden rounded-xl border border-base-200 shadow-2xl">
        <Combobox items={commands}>
          <ComboboxInputWrapper className="border-none bg-transparent">
            <Search1 className="ml-4 size-5 text-text-100" />
            <ComboboxInput
              placeholder="Type a command or search..."
              className="py-4 pl-10 text-base"
            />
            <div className="flex items-center gap-1 absolute right-2 rounded-md border border-base-200 bg-base-100 px-1.5 py-0.5 text-[10px] font-medium text-text-100 uppercase">
              <span>esc</span>
            </div>
          </ComboboxInputWrapper>
          <ComboboxContent>
            <ComboboxList className="p-2">
              {commands.map(command => (
                <ComboboxItem
                  key={command.id}
                  id={command.id}
                  textValue={command.name}
                  className="pl-3"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <command.icon className="size-4 text-text-100" />
                      <span className="text-sm font-medium">
                        {command.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-text-100">
                      {command.shortcut}
                    </span>
                  </div>
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </div>
  );
}
