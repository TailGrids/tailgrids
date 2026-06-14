"use client";

import { cn } from "@/utils/cn";
import {
  Button as AriaButton,
  DatePicker as AriaDatePicker,
  Group as AriaGroup,
  Popover as AriaPopover,
  type ButtonProps as AriaButtonProps,
  type DatePickerProps as AriaDatePickerProps,
  type GroupProps as AriaGroupProps,
  type PopoverProps as AriaPopoverProps,
  type DateValue
} from "react-aria-components";

export interface DatePickerProps<T extends DateValue> extends Omit<
  AriaDatePickerProps<T>,
  "isDisabled" | "isReadOnly" | "isRequired" | "isInvalid"
> {
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  invalid?: boolean;
}

export function DatePicker<T extends DateValue>({
  children,
  disabled = false,
  readOnly = false,
  required = false,
  invalid = false,
  className,
  ...props
}: DatePickerProps<T>) {
  return (
    <AriaDatePicker
      isDisabled={disabled}
      isReadOnly={readOnly}
      isRequired={required}
      isInvalid={invalid}
      className={cn("flex flex-col gap-1 w-full", className)}
      {...props}
    >
      {children}
    </AriaDatePicker>
  );
}

interface DatePickerGroupProps extends AriaGroupProps {}

export function DatePickerGroup({
  className,
  children,
  ...props
}: DatePickerGroupProps) {
  return (
    <AriaGroup className={cn("relative", className)} {...props}>
      {children}
    </AriaGroup>
  );
}

interface DatePickerTriggerProps extends AriaButtonProps {}

export function DatePickerTrigger({
  className,
  children,
  ...props
}: DatePickerTriggerProps) {
  return (
    <AriaButton
      slot="trigger"
      className={cn(
        "absolute top-1/2 right-5 -translate-y-1/2 [:where(&>svg)]:size-5 outline-offset-5 rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </AriaButton>
  );
}

export interface DatePickerPopoverProps extends AriaPopoverProps {}

export function DatePickerPopover({
  className,
  children,
  ...props
}: DatePickerPopoverProps) {
  return (
    <AriaPopover placement="bottom start" className={cn(className)} {...props}>
      {children}
    </AriaPopover>
  );
}
