import { cn } from "@/utils/cn";
import { Check, ChevronDown } from "@tailgrids/icons";
import type { ComponentProps } from "react";
import React, { createContext, useContext } from "react";
import {
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  Button,
  type ButtonProps,
  DialogTrigger,
  FieldError,
  Header,
  type Key,
  Label,
  type LabelProps,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  ListBoxSection,
  type ListBoxSectionProps,
  Popover,
  type PopoverProps,
  SelectValue,
  type SelectValueProps,
  Separator,
  Text,
  type TextProps
} from "react-aria-components";
import { buttonStyles } from "./button";

interface SelectContextValue {
  selectionMode?: "single" | "multiple";
  value?: Key | Iterable<Key>;
  onChange?: (value: any) => void;
  isRequired?: boolean;
  isInvalid?: boolean;
  name?: string;
}

const SelectContext = createContext<SelectContextValue | null>(null);

// Select (Root)

export interface SelectProps<T extends object> extends Omit<
  AriaSelectProps<T>,
  | "children"
  | "selectionMode"
  | "selectedKeys"
  | "defaultSelectedKeys"
  | "selectedKeys"
  | "defaultSelectedKeys"
  | "onSelectionChange"
  | "value"
  | "onChange"
> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: any) => string);
  items?: Iterable<T>;
  children?: React.ReactNode | ((item: T) => React.ReactNode);
  selectionMode?: "single" | "multiple";
  value?: Key | Iterable<Key>;
  onChange?: (value: any) => void;
}

export function Select<T extends object>({
  className,
  children,
  ...props
}: SelectProps<T>) {
  if (props.selectionMode === "multiple") {
    const childrenArray = React.Children.toArray(children as any);
    const label = childrenArray.find(
      child => (child as any)?.type?.displayName === "SelectLabel"
    );
    const description = childrenArray.find(
      child => (child as any)?.type?.displayName === "SelectDescription"
    );
    const trigger = childrenArray.find(
      child => (child as any)?.type?.displayName === "SelectTrigger"
    );
    const content = childrenArray.find(
      child => (child as any)?.type?.displayName === "SelectContent"
    );
    const errorMessage = childrenArray.find(
      child => (child as any)?.type?.displayName === "SelectErrorMessage"
    );

    const isValueEmpty =
      !props.value ||
      (Array.isArray(props.value) && props.value.length === 0) ||
      (props.value instanceof Set && props.value.size === 0) ||
      (typeof props.value === "object" &&
        Symbol.iterator in props.value &&
        Array.from(props.value as Iterable<any>).length === 0);

    const isInvalid = props.isInvalid || (props.isRequired && isValueEmpty);

    return (
      <SelectContext.Provider value={{ ...props, isInvalid }}>
        <div
          className={cn("group flex w-full flex-col gap-2", className)}
          data-required={props.isRequired || undefined}
          data-invalid={isInvalid || undefined}
        >
          {label}
          {description}
          <DialogTrigger>
            {trigger}
            {content}
          </DialogTrigger>
          {errorMessage}
          {props.name && (
            <select
              name={props.name}
              multiple
              required={props.isRequired}
              value={
                Array.from((props.value as Iterable<Key>) || []) as string[]
              }
              onChange={() => {}}
              className="sr-only"
              aria-hidden="true"
              tabIndex={-1}
            >
              {Array.from((props.value as Iterable<Key>) || []).map(key => (
                <option key={key.toString()} value={key.toString()}>
                  {key}
                </option>
              ))}
            </select>
          )}
        </div>
      </SelectContext.Provider>
    );
  }

  return (
    <AriaSelect
      {...(props as any)}
      className={cn("group flex w-full flex-col gap-2", className)}
      selectedKey={props.value as Key}
      onSelectionChange={props.onChange}
    >
      {children}
    </AriaSelect>
  );
}

// SelectTrigger

interface SelectTriggerProps extends ButtonProps {
  isInvalid?: boolean;
}

function SelectTrigger({ className, children, ...props }: SelectTriggerProps) {
  const context = useContext(SelectContext);
  const isInvalid = context?.isInvalid || props.isInvalid;

  return (
    <Button
      className={cn(
        buttonStyles({
          appearance: "outline"
        }),
        "data-invalid:border-input-error-focus-border data-invalid:focus:ring-input-error-focus-border/20 justify-between",
        className
      )}
      data-invalid={isInvalid || undefined}
      {...props}
    >
      {children}
    </Button>
  );
}
SelectTrigger.displayName = "SelectTrigger";

// SelectDisplayValue

function SelectDisplayValue<T extends object>({
  className,
  ...props
}: SelectValueProps<T>) {
  return (
    <SelectValue
      className={cn(
        "truncate data-placeholder:text-input-placeholder-text",
        className
      )}
      {...props}
    />
  );
}

// Select Indicator

function SelectIndicator({
  className,
  children,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "text-text-100 ml-2 shrink-0 transition-transform",
        !children && "group-data-open:rotate-180",
        className
      )}
      {...props}
    >
      {children ?? <ChevronDown className="size-5" />}
    </span>
  );
}

// Select Content

type SelectContentProps = PopoverProps;

function SelectContent({ children, className, ...props }: SelectContentProps) {
  const context = useContext(SelectContext);

  if (context) {
    // Multiple selection mode - render ListBox with context props
    return (
      <Popover
        className={cn(
          "bg-dropdown-background w-(--trigger-width) overflow-auto rounded-xl border border-base-100 shadow-md",
          "entering:animate-in entering:fade-in-0 entering:zoom-in-95",
          "exiting:animate-out exiting:fade-out-0 exiting:zoom-out-95",
          className
        )}
        {...props}
      >
        <ListBox
          className="p-1 outline-none"
          selectionMode={context.selectionMode}
          selectedKeys={
            context.value instanceof Set
              ? context.value
              : new Set((context.value as Iterable<Key>) || [])
          }
          onSelectionChange={keys => {
            if (context.onChange) {
              context.onChange(Array.from(keys));
            }
          }}
        >
          {children}
        </ListBox>
      </Popover>
    );
  }

  // Single selection mode (standard Select)
  return (
    <Popover
      className={cn(
        "bg-dropdown-background w-(--trigger-width) overflow-auto rounded-xl border border-base-100 shadow-md",
        "entering:animate-in entering:fade-in-0 entering:zoom-in-95",
        "exiting:animate-out exiting:fade-out-0 exiting:zoom-out-95",
        className
      )}
      {...props}
    >
      <ListBox className="p-1 outline-none">{children}</ListBox>
    </Popover>
  );
}
SelectContent.displayName = "SelectContent";

// Select Item

function SelectItem({ className, children, ...props }: ListBoxItemProps) {
  return (
    <ListBoxItem
      className={cn(
        "group/item text-text-50 focus:text-title-50 focus:bg-dropdown-hover-background relative flex w-full cursor-pointer items-center gap-3 rounded-md py-2.5 pr-3 pl-8 outline-hidden select-none",
        "data-disabled:text-input-disabled-text data-disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      {renderProps => (
        <>
          {renderProps.isSelected && (
            <span className="size-5 absolute left-2 flex items-center justify-center">
              <Check className="size-5" />
            </span>
          )}
          {typeof children === "function" ? children(renderProps) : children}
        </>
      )}
    </ListBoxItem>
  );
}

// Select Section

function SelectSection<T extends object>({
  className,
  ...props
}: ListBoxSectionProps<T>) {
  return <ListBoxSection {...props} className={cn("", className)} />;
}

// Select Header

function SelectHeader({ className, ...props }: ComponentProps<typeof Header>) {
  return (
    <Header
      {...props}
      className={cn(
        "px-3 py-2 text-sm font-medium text-text-100 select-none",
        className
      )}
    />
  );
}

// Select Separator

function SelectSeparator({ className, ...props }: ComponentProps<"hr">) {
  return (
    <Separator
      className={cn(
        "bg-(--border-color-base-100) mx-1 my-1 h-px border-none",
        className
      )}
      {...props}
    />
  );
}

// Select Label

function SelectLabel({ className, ...props }: LabelProps) {
  return (
    <Label
      className={cn(
        "max-w-fit text-sm font-medium text-input-label-text select-none",
        className
      )}
      {...props}
    />
  );
}
SelectLabel.displayName = "SelectLabel";

// Select Description

function SelectDescription({ className, ...props }: TextProps) {
  return (
    <Text
      slot="description"
      className={cn("text-sm font-normal text-text-50", className)}
      {...props}
    />
  );
}
SelectDescription.displayName = "SelectDescription";

// Select Error Message

function SelectErrorMessage({ className, ...props }: TextProps) {
  const context = useContext(SelectContext);

  if (context?.selectionMode === "multiple") {
    if (!context.isInvalid) {
      return null;
    }
    return (
      <Text
        {...props}
        className={cn("text-sm font-normal text-input-error", className)}
      />
    );
  }

  return (
    <FieldError
      className={cn("text-sm font-normal text-input-error", className)}
      {...props}
    />
  );
}
SelectErrorMessage.displayName = "SelectErrorMessage";

export {
  SelectContent,
  SelectDescription,
  SelectErrorMessage,
  SelectHeader,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectSection,
  SelectSeparator,
  SelectTrigger,
  SelectDisplayValue as SelectValue
};
