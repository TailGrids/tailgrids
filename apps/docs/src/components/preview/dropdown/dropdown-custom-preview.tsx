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
import {
  ChevronDown,
  CreditCard,
  Exit,
  Gear1,
  UserCircle1
} from "@tailgrids/icons";

export default function DropdownCustomPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-background-50 px-4 py-2 text-sm font-medium text-foreground-soft-200 shadow-sm transition-all hover:bg-background-soft-50 active:scale-95 dark:border-foreground-50 dark:bg-foreground-50 dark:text-white-60 dark:hover:bg-foreground-soft-500">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-tr from-white-100 to-button-primary-background text-[10px] lowercase text-white-100">
          jd
        </div>
        John Doe
        <ChevronDown className="size-4 text-text-200 transition-transform group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56 min-h-30 p-1.5">
        <DropdownMenuSection>
          <DropdownMenuHeader>Account</DropdownMenuHeader>
          <DropdownMenuItem className="cursor-pointer gap-2.5 py-2">
            <UserCircle1 className="size-5" />
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
        <DropdownMenuItem className="cursor-pointer gap-2.5 py-2 text-alert-danger-button-text focus:text-alert-danger-title focus:bg-alert-danger-background dark:text-alert-danger-button-text dark:focus:bg-alert-danger-background">
          <Exit className="size-5" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
