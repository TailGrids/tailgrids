"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps
} from "react-aria-components";

const textFieldStyles = cva("flex gap-3", {
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

export interface TextFieldProps
  extends
    Omit<
      AriaTextFieldProps,
      "isInvalid" | "isRequired" | "isDisabled" | "isReadOnly"
    >,
    VariantProps<typeof textFieldStyles> {
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export function TextField({
  className,
  orientation,
  invalid,
  required,
  disabled,
  readOnly,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField
      className={cn(textFieldStyles({ orientation }), className)}
      isInvalid={invalid}
      isRequired={required}
      isDisabled={disabled}
      isReadOnly={readOnly}
      {...props}
    />
  );
}
