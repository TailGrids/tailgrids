import { cn } from "@/utils/cn";
import { Search1 } from "@tailgrids/icons";
import React, { ReactNode, useEffect } from "react";
import {
  Autocomplete,
  AutocompleteProps,
  Collection,
  Dialog,
  Header,
  Input,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  MenuSection,
  MenuSectionProps,
  Modal,
  ModalOverlay,
  SearchField,
  SearchFieldProps,
  Separator,
  SeparatorProps,
  useFilter
} from "react-aria-components";

export interface CommandProps<T extends object> extends Omit<
  AutocompleteProps<T>,
  "children"
> {
  children: ReactNode;
  className?: string;
}

export function Command<T extends object>({
  children,
  className,
  ...props
}: CommandProps<T>) {
  const { contains } = useFilter({ sensitivity: "base" });

  return (
    <Autocomplete filter={contains} {...props}>
      <div
        className={cn(
          "flex h-full w-full max-w-md flex-col overflow-hidden rounded-md bg-background-50 text-text-100",
          className
        )}
      >
        {children}
      </div>
    </Autocomplete>
  );
}

export interface CommandDialogProps<T extends object> extends CommandProps<T> {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function CommandDialog<T extends object>({
  isOpen,
  onOpenChange,
  children,
  className,
  ...props
}: CommandDialogProps<T>) {
  useEffect(() => {
    const isMacUA = /mac(os|intosh)/i.test(navigator.userAgent);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "j" && (isMacUA ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(true);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange]);

  return (
    <ModalOverlay
      isDismissable
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
        "transition-opacity duration-200",
        "data-entering:opacity-0",
        "data-exiting:opacity-0"
      )}
    >
      <Modal
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 outline-none",
          "transition-all duration-200",
          "data-entering:scale-95 data-entering:opacity-0",
          "data-exiting:scale-95 data-exiting:opacity-0"
        )}
      >
        <Dialog className="outline-none">
          <Command
            className={cn("overflow-hidden rounded-xl shadow-2xl", className)}
            {...props}
          >
            {children}
          </Command>
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}

export interface CommandInputProps extends SearchFieldProps {
  placeholder?: string;
}

export function CommandInput({ placeholder, ...props }: CommandInputProps) {
  return (
    <div className="flex items-center border-b border-border-color-base-100 px-3">
      <Search1
        className="mr-2 h-5 w-5 shrink-0 opacity-50 text-text-200"
        aria-hidden="true"
      />
      <SearchField
        {...props}
        autoFocus
        className={cn(
          'flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-text-200 disabled:cursor-not-allowed disabled:opacity-50 [&_div]:w-full [&_div]:flex [&_div]:items-center [&_input]:flex-1 [&_input]:bg-transparent [&_input]:outline-none [&_input]:min-w-0 [&_svg[stroke-width="2"]]:hidden [&_button]:hidden',
          props.className
        )}
      >
        <Input placeholder={placeholder} />
      </SearchField>
    </div>
  );
}

export function CommandList<T extends object>({
  children,
  className,
  renderEmptyState,
  ...props
}: MenuProps<T>) {
  let emptyStateChild: React.ReactNode = null;
  let validChildren: React.ReactNode | ((item: T) => React.ReactNode) =
    children;

  if (typeof children !== "function") {
    const newChildren: React.ReactNode[] = [];
    React.Children.forEach(children, child => {
      if (React.isValidElement(child) && child.type === CommandEmpty) {
        emptyStateChild = child;
      } else {
        newChildren.push(child);
      }
    });
    validChildren = newChildren;
  }

  return (
    <Menu
      {...props}
      className={cn(
        "max-h-full overflow-y-auto overflow-x-hidden p-1 outline-none",
        className
      )}
      renderEmptyState={
        renderEmptyState || (() => emptyStateChild || <CommandEmpty />)
      }
    >
      {validChildren}
    </Menu>
  );
}

export function CommandEmpty({
  children = "No results found."
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="py-6 text-center text-sm text-text-50">{children}</div>
  );
}

export interface CommandGroupProps<T> extends MenuSectionProps<T> {
  heading?: React.ReactNode;
}

export function CommandGroup<T extends object>({
  heading,
  children,
  className,
  ...props
}: CommandGroupProps<T>) {
  return (
    <MenuSection
      {...props}
      className={cn(
        "overflow-hidden text-slate-950 dark:text-slate-50 p-1 [&+&]:pt-0",
        className
      )}
    >
      {heading && (
        <Header className="p-1.5 text-xs font-medium text-tg-text-color-tertiary">
          {heading}
        </Header>
      )}
      <Collection items={props.items}>{children}</Collection>
    </MenuSection>
  );
}

export function CommandSeparator({ className, ...props }: SeparatorProps) {
  return (
    <Separator
      className={cn("-mx-1 h-px bg-border-color-base-50", className)}
      {...props}
    />
  );
}

export function CommandItem({ className, children, ...props }: MenuItemProps) {
  const textValue =
    props.textValue || (typeof children === "string" ? children : undefined);

  return (
    <MenuItem
      {...props}
      textValue={textValue}
      className={cn(
        "px-1.5 py-2 text-sm text-text-50 relative flex cursor-default select-none items-center rounded-sm outline-none data-disabled:pointer-events-none data-disabled:opacity-50 hover:bg-background-soft-200 focus:bg-background-soft-200 data-focused:bg-background-soft-200 selected:bg-background-soft-200",
        className
      )}
    >
      {renderProps => (
        <span
          className={cn(
            "flex w-full items-center gap-2 [&_svg]:h-5 [&_svg]:w-5",
            renderProps.selectionMode !== "none" && "pl-8"
          )}
        >
          {typeof children === "function" ? children(renderProps) : children}
        </span>
      )}
    </MenuItem>
  );
}

export function CommandShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-text-50", className)}
      {...props}
    />
  );
}
