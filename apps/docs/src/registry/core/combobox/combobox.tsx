import { cn } from "@/utils/cn";
import { Check, ChevronDown } from "@tailgrids/icons";
import type { ComponentProps } from "react";
import React, { createContext, useContext } from "react";
import {
  ComboBox as AriaComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  Input as AriaInput,
  type InputProps as AriaInputProps,
  Button,
  type ButtonProps,
  ComboBoxStateContext,
  FieldError,
  Header,
  type Key,
  Label,
  type LabelProps,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  type ListBoxProps,
  ListBoxSection,
  type ListBoxSectionProps,
  Popover,
  type PopoverProps,
  Separator,
  Text,
  type TextProps
} from "react-aria-components";

// MultiCombobox Context

export interface MultiComboboxContextValue {
  selectedKeys: Set<Key>;
  removeKey: (key: Key) => void;
}

export const MultiComboboxContext =
  createContext<MultiComboboxContextValue | null>(null);

// Combobox (Root)

export interface ComboboxProps<T extends object> extends Omit<
  AriaComboBoxProps<T>,
  "children" | "selectedKey" | "defaultSelectedKey" | "onSelectionChange"
> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: any) => string);
  children?: React.ReactNode | ((item: T) => React.ReactNode);
  value?: AriaComboBoxProps<T>["selectedKey"];
  defaultValue?: AriaComboBoxProps<T>["defaultSelectedKey"];
  onChange?: AriaComboBoxProps<T>["onSelectionChange"];
}

const ComboboxContext = createContext<{
  isInvalid?: boolean;
  isRequired?: boolean;
} | null>(null);

export function Combobox<T extends object>({
  className,
  children,
  value,
  defaultValue,
  onChange,
  allowsEmptyCollection = true,
  ...props
}: ComboboxProps<T>) {
  return (
    <AriaComboBox
      selectedKey={value}
      defaultSelectedKey={defaultValue}
      onSelectionChange={onChange}
      allowsEmptyCollection={allowsEmptyCollection}
      {...props}
      className={cn("group flex w-full flex-col gap-2", className)}
    >
      {values => (
        <ComboboxContext.Provider
          value={{
            isInvalid: props.isInvalid ?? values.isInvalid,
            isRequired: props.isRequired ?? values.isRequired
          }}
        >
          {typeof children === "function" ? children(values as any) : children}
        </ComboboxContext.Provider>
      )}
    </AriaComboBox>
  );
}

// Combobox Input Wrapper

export function ComboboxInputWrapper({
  className,
  children
}: React.HTMLAttributes<HTMLDivElement>) {
  const context = useContext(ComboboxContext);
  return (
    <div
      className={cn(
        "bg-input-background relative flex w-full min-w-sm min-h-12 items-center rounded-lg border border-base-300 hover:border-base-400 focus-within:border-input-primary-focus-border focus-within:ring-4 focus-within:ring-input-primary-focus-border/20",
        context?.isInvalid &&
          "border-input-error-focus-border focus-within:border-input-error-focus-border focus-within:ring-input-error-focus-border/20",
        className
      )}
    >
      {children}
    </div>
  );
}

// Combobox Input

export function ComboboxInput({ className, ...props }: AriaInputProps) {
  return (
    <AriaInput
      className={cn(
        "w-full min-h-12 bg-transparent pl-4 pr-8 py-2.5 text-text-50 font-medium absolute inset-0 placeholder:text-input-placeholder-text outline-none disabled:cursor-not-allowed disabled:text-input-disabled-text",
        className
      )}
      {...props}
    />
  );
}

// Combobox Trigger (Button)

export function ComboboxTrigger({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "text-text-100 group-data-disabled:text-input-disabled-text absolute right-2 flex items-center justify-center p-1 hover:text-title-50 focus:outline-none data-focused:text-title-50",
        className
      )}
      {...props}
    >
      <ChevronDown className="size-5 transition-transform duration-200 group-data-open:rotate-180" />
    </Button>
  );
}

// Combobox Content (Popover)

export interface ComboboxContentProps extends Omit<PopoverProps, "children"> {
  children?: React.ReactNode;
}

export function ComboboxContent({
  className,
  children,
  ...props
}: ComboboxContentProps) {
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
      {children}
    </Popover>
  );
}

// Combobox List (ListBox)

export interface ComboboxListProps<T extends object> extends ListBoxProps<T> {}

export function ComboboxList<T extends object>({
  className,
  ...props
}: ComboboxListProps<T>) {
  const state = useContext(ComboBoxStateContext);

  if (state?.collection.size === 0) {
    return null;
  }

  return (
    <ListBox
      {...props}
      className={values =>
        cn(
          "p-1 outline-none",
          typeof className === "function" ? className(values) : className
        )
      }
    />
  );
}

// Combobox Empty

export function ComboboxEmpty({ className, ...props }: ComponentProps<"div">) {
  const state = useContext(ComboBoxStateContext);

  if (!state || state.collection.size > 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "px-4 py-6 text-center text-sm text-text-50 select-none",
        className
      )}
      {...props}
    />
  );
}

// Combobox Item

export function ComboboxItem({
  className,
  children,
  ...props
}: ListBoxItemProps) {
  const textValue =
    props.textValue || (typeof children === "string" ? children : undefined);
  const multiContext = useContext(MultiComboboxContext);

  return (
    <ListBoxItem
      textValue={textValue}
      className={cn(
        "group/item text-title-50 focus:text-title-50 focus:bg-dropdown-hover-background relative flex w-full cursor-pointer items-center gap-3 rounded-md py-2.5 pr-3 pl-8 text-sm font-medium outline-hidden select-none hover:bg-dropdown-hover-background",
        "data-disabled:text-input-disabled-text data-disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      {renderProps => {
        const isSelected =
          multiContext?.selectedKeys.has(props.id!) || renderProps.isSelected;

        return (
          <>
            {isSelected && (
              <span className="size-5 absolute left-2 flex items-center justify-center">
                <Check className="size-5" />
              </span>
            )}
            {typeof children === "function" ? children(renderProps) : children}
          </>
        );
      }}
    </ListBoxItem>
  );
}

// Combobox Section

export function ComboboxSection<T extends object>({
  className,
  ...props
}: ListBoxSectionProps<T>) {
  return <ListBoxSection className={className} {...props} />;
}

// Combobox Header

export function ComboboxHeader({
  className,
  ...props
}: ComponentProps<typeof Header>) {
  return (
    <Header
      className={cn(
        "px-3 py-2 text-xs text-text-100 select-none -tracking-[0.2px]",
        className
      )}
      {...props}
    />
  );
}

// Combobox Separator

export function ComboboxSeparator({
  className,
  ...props
}: ComponentProps<"hr">) {
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

// Combobox Label

export function ComboboxLabel({ className, ...props }: LabelProps) {
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

// Combobox Description

export function ComboboxDescription({ className, ...props }: TextProps) {
  return (
    <Text
      slot="description"
      className={cn("text-sm font-normal text-text-50", className)}
      {...props}
    />
  );
}

// Combobox Error Message

export function ComboboxErrorMessage({ className, ...props }: TextProps) {
  return (
    <FieldError
      className={cn("text-sm font-normal text-input-error", className)}
      {...props}
    />
  );
}
