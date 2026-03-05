"use client";

import { cn } from "@/utils/cn";
import { Menu } from "@base-ui/react/menu";
import { Menubar as MenubarRootPrimitive } from "@base-ui/react/menubar";
import { ChevronRight } from "@tailgrids/icons";
import type { ComponentProps } from "react";

export function Menubar({
  className,
  ...props
}: ComponentProps<typeof MenubarRootPrimitive>) {
  return (
    <MenubarRootPrimitive
      className={cn(
        "flex h-10 items-center space-x-1 rounded-md border border-base-100 bg-background-50 p-1",
        className
      )}
      {...props}
    />
  );
}

export function MenubarMenu(props: ComponentProps<typeof Menu.Root>) {
  return <Menu.Root {...props} />;
}

export function MenubarTrigger({
  className,
  ...props
}: ComponentProps<typeof Menu.Trigger>) {
  return (
    <Menu.Trigger
      className={cn(
        "text-title-50 flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-hidden last-of-type:mr-0 focus-visible:bg-dropdown-hover-background data-highlighted:text-title-50 data-[state=open]:bg-dropdown-hover-background data-[state=open]:text-title-50",
        className
      )}
      {...props}
    />
  );
}

export function MenubarContent({
  children,
  className,
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: ComponentProps<typeof Menu.Popup> &
  Pick<
    ComponentProps<typeof Menu.Positioner>,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <Menu.Portal>
      <Menu.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <Menu.Popup
          {...props}
          className={cn(
            "z-50 min-w-48 overflow-hidden rounded-md border border-base-100 bg-dropdown-background p-1 text-text-50 shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
            className
          )}
        >
          {children}
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  );
}

export function MenubarItem({
  className,
  ...props
}: ComponentProps<typeof Menu.Item>) {
  return (
    <Menu.Item
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden data-highlighted:bg-dropdown-hover-background data-highlighted:text-title-50 data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export function MenubarCheckboxItem({
  children,
  className,
  ...props
}: ComponentProps<typeof Menu.CheckboxItem>) {
  return (
    <Menu.CheckboxItem
      {...props}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden data-highlighted:bg-dropdown-hover-background data-highlighted:text-title-50 data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
    >
      <Menu.CheckboxItemIndicator className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          className="stroke-current"
        >
          <path
            d="M11.667 3.5L5.25 9.917 2.333 7"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Menu.CheckboxItemIndicator>
      {children}
    </Menu.CheckboxItem>
  );
}

export function MenubarRadioItem({
  children,
  className,
  ...props
}: ComponentProps<typeof Menu.RadioItem>) {
  return (
    <Menu.RadioItem
      {...props}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden data-highlighted:bg-dropdown-hover-background data-highlighted:text-title-50 data-disabled:pointer-events-none data-disabled:opacity-50",
        className
      )}
    >
      <Menu.RadioItemIndicator className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <div className="h-1.5 w-1.5 rounded-full bg-current" />
      </Menu.RadioItemIndicator>
      {children}
    </Menu.RadioItem>
  );
}

export function MenubarSeparator({
  className,
  ...props
}: ComponentProps<typeof Menu.Separator>) {
  return (
    <Menu.Separator
      className={cn("-mx-1 my-1 h-px bg-dropdown-divider", className)}
      {...props}
    />
  );
}

export function MenubarShortcut({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-text-200", className)}
      {...props}
    />
  );
}

export function MenubarLabel({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      {...props}
    />
  );
}

export function MenubarSub(props: ComponentProps<typeof Menu.SubmenuRoot>) {
  return <Menu.SubmenuRoot {...props} />;
}

export function MenubarSubTrigger({
  children,
  className,
  ...props
}: ComponentProps<typeof Menu.SubmenuTrigger>) {
  return (
    <Menu.SubmenuTrigger
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden data-highlighted:bg-dropdown-hover-background data-highlighted:text-title-50 data-[state=open]:bg-dropdown-hover-background data-[state=open]:text-title-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </Menu.SubmenuTrigger>
  );
}

export function MenubarSubContent({
  children,
  className,
  sideOffset = 4,
  alignOffset = -5,
  ...props
}: ComponentProps<typeof Menu.Popup> & {
  sideOffset?: number;
  alignOffset?: number;
}) {
  return (
    <Menu.Portal>
      <Menu.Positioner sideOffset={sideOffset} alignOffset={alignOffset}>
        <Menu.Popup
          {...props}
          className={cn(
            "z-50 min-w-32 overflow-hidden rounded-md border border-base-100 bg-dropdown-background p-1 text-text-50 shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
            className
          )}
        >
          {children}
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  );
}

export function MenubarGroup(props: ComponentProps<typeof Menu.Group>) {
  return <Menu.Group {...props} />;
}

export function MenubarRadioGroup(
  props: ComponentProps<typeof Menu.RadioGroup>
) {
  return <Menu.RadioGroup {...props} />;
}
