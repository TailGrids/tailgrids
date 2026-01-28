"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/registry/core/dropdown";
import { MenuMeatballs1 } from "@tailgrids/icons";
import { Copy, Pencil, Trash2 } from "lucide-react";

export default function DropdownWithIconsPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-full p-3 hover:bg-gray-100">
        <MenuMeatballs1 />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1.5 border">
        <DropdownMenuItem>
          <Pencil className="size-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="size-4" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuSeparator className="-mx-1.5 my-1.5" />
        <DropdownMenuItem>
          <Trash2 className="size-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
