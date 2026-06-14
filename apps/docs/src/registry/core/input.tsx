"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Input as AriaInput,
  type InputProps as AriaInputProps
} from "react-aria-components";

const inputStyles = cva(
  "bg-input-background peer max-w-full rounded-lg border px-4 py-2.5 text-title-50 placeholder:text-input-placeholder-text focus:ring-4 disabled:border-base-100 disabled:text-input-disabled-text disabled:placeholder:text-input-disabled-text disabled:cursor-not-allowed outline-none data-invalid:border-input-error-focus-border data-invalid:ring-input-error-focus-border/20",
  {
    variants: {
      state: {
        default:
          "focus:border-input-primary-focus-border focus:ring-input-primary-focus-border/20 border-base-300 data-invalid:border-input-error-focus-border data-invalid:focus:ring-input-error-focus-border/20",
        error:
          "border-input-error-focus-border focus:ring-input-error-focus-border/20",
        success:
          "border-input-success-focus-border focus:ring-input-success-focus-border/20"
      }
    }
  }
);

export interface InputProps
  extends AriaInputProps, VariantProps<typeof inputStyles> {}

export function Input({
  state = "default",
  className,
  ...inputProps
}: InputProps) {
  return (
    <AriaInput
      className={cn(inputStyles({ state }), className)}
      {...inputProps}
    />
  );
}
