"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuSection,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/registry/core/dropdown";
import { ChevronDown, CreditCard, Exit, Gear1 } from "@tailgrids/icons";
import { UserCircle } from "lucide-react";

export default function DropdownCustomPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 active:scale-95 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-tr from-primary to-blue-400 text-[10px] lowercase text-white">
          jd
        </div>
        John Doe
        <ChevronDown className="size-4 text-neutral-400 transition-transform group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56 min-h-30 p-1.5">
        <DropdownMenuSection>
          <DropdownMenuHeader>Account</DropdownMenuHeader>
          <DropdownMenuItem className="cursor-pointer gap-2.5 py-2">
            <UserCircle className="size-5" />
            <span>My Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer gap-2.5 py-2">
            <Gear1 className="size-5" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer gap-2.5 py-2">
            <CreditCard className="size-5" />
            <span>Billing</span>
          </DropdownMenuItem>
        </DropdownMenuSection>
        <DropdownMenuSeparator className="-mx-1.5 my-1" />
        <DropdownMenuItem className="cursor-pointer gap-2.5 py-2 text-red-600 focus:bg-red-50 focus:text-red-600 dark:text-red-400 dark:focus:bg-red-950/30">
          <Exit className="size-5" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
