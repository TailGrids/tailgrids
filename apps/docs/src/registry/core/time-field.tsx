"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import {
  TimeField as AriaTimeField,
  type TimeFieldProps as AriaTimeFieldProps,
  type TimeValue
} from "react-aria-components";

const timeFieldStyles = cva("flex gap-3", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row items-center",
      responsive:
        "flex-col @sm/field-group:flex-row @sm/field-group:items-start"
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});

export interface TimeFieldProps<T extends TimeValue>
  extends
    Omit<
      AriaTimeFieldProps<T>,
      "isInvalid" | "isRequired" | "isDisabled" | "isReadOnly"
    >,
    VariantProps<typeof timeFieldStyles> {
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export function TimeField<T extends TimeValue>({
  className,
  orientation,
  invalid,
  required,
  disabled,
  readOnly,
  ...props
}: TimeFieldProps<T>) {
  return (
    <AriaTimeField
      className={cn(timeFieldStyles({ orientation }), className)}
      isInvalid={invalid}
      isRequired={required}
      isDisabled={disabled}
      isReadOnly={readOnly}
      {...props}
    />
  );
}

export type { TimeValue };
