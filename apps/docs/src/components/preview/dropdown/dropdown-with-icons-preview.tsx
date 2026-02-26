"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/registry/core/dropdown";
import { Copy4, MenuMeatballs1, Pencil1, Trash1 } from "@tailgrids/icons";

export default function DropdownWithIconsPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-full p-3 hover:bg-background-soft-50">
        <MenuMeatballs1 />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1.5 border">
        <DropdownMenuItem>
          <Pencil1 className="size-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy4 className="size-4" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuSeparator className="-mx-1.5 my-1.5" />
        <DropdownMenuItem>
          <Trash1 className="size-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
