import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";
import {
  Button,
  type ButtonProps,
  Header,
  Menu,
  MenuItem,
  type MenuItemProps,
  MenuSection,
  MenuSectionProps,
  MenuTrigger,
  type MenuTriggerProps,
  Popover,
  type PopoverProps,
  Separator
} from "react-aria-components";

export function DropdownMenu(props: MenuTriggerProps) {
  return <MenuTrigger {...props} />;
}

export function DropdownMenuTrigger({ className, ...props }: ButtonProps) {
  return <Button className={cn("outline-none", className)} {...props} />;
}

type DropdownContentProps = PopoverProps;

export function DropdownMenuContent({
  children,
  className,
  ...props
}: DropdownContentProps) {
  return (
    <Popover {...props}>
      <Menu
        className={cn(
          "outline-hidden shadow-md rounded-xl overflow-clip min-w-40 bg-dropdown-bg",
          className
        )}
      >
        {children}
      </Menu>
    </Popover>
  );
}

type DropdownMenuItemProps = MenuItemProps;

export function DropdownMenuItem({
  className,
  ...props
}: DropdownMenuItemProps) {
  return (
    <MenuItem
      {...props}
      className={cn(
        "group text-dropdown-foreground focus:bg-dropdown-item-hover flex w-full cursor-default items-center gap-3 rounded-md px-3 py-2.5 outline-hidden",
        className
      )}
    />
  );
}

export function DropdownMenuSection<T extends object>({
  className,
  ...props
}: MenuSectionProps<T>) {
  return <MenuSection {...props} className={cn("", className)} />;
}

export function DropdownMenuHeader({
  className,
  ...props
}: ComponentProps<typeof Header>) {
  return (
    <Header
      {...props}
      className={cn(
        "px-3 py-2 text-sm text-fd-muted-foreground hover:text-fd-muted-foreground!",
        className
      )}
    />
  );
}

export function DropdownMenuSeparator({
  className,
  ...props
}: ComponentProps<"hr">) {
  return (
    <Separator
      className={cn("bg-dropdown-separator h-px border-none", className)}
      {...props}
    />
  );
}
