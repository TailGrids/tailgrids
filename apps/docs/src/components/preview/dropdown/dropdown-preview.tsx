"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/registry/core/dropdown";

export default function DropdownPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonStyles({ variant: "primary", size: "sm" })}
      >
        Open Menu
      </DropdownMenuTrigger>

      <DropdownMenuContent className={"p-1.5"}>
        <DropdownMenuItem onAction={() => alert("Edit")}>Edit</DropdownMenuItem>
        <DropdownMenuItem onAction={() => alert("Duplicate")}>
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem onAction={() => alert("Archive")}>
          Archive
        </DropdownMenuItem>

        <DropdownMenuSeparator className="-mx-1.5 my-1.5" />

        <DropdownMenuItem>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
