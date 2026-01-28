"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuSection,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/registry/core/dropdown";

export default function DropdownWithSectionPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonStyles({ variant: "primary", size: "sm" })}
      >
        With Section
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1.5">
        <DropdownMenuSection>
          <DropdownMenuHeader>Actions</DropdownMenuHeader>

          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuSection>

        <DropdownMenuSeparator className="-mx-1.5 my-1.5" />

        <DropdownMenuSection>
          <DropdownMenuHeader>More</DropdownMenuHeader>

          <DropdownMenuItem>Share</DropdownMenuItem>
          <DropdownMenuItem>Print</DropdownMenuItem>
        </DropdownMenuSection>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
