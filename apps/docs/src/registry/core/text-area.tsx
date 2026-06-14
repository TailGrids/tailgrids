"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import {
  TextAreaProps as AriaTextAreaProps,
  TextArea as AriaTextAria
} from "react-aria-components";

const textAreaStyles = cva(
  "bg-input-background peer w-full border px-4 py-3.5 text-title-50 outline-none rounded-lg placeholder:text-input-placeholder-text focus:ring-4 disabled:border-base-200 disabled:cursor-not-allowed disabled:bg-background-soft-50 disabled:text-input-disabled-text disabled:placeholder:text-input-disabled-text data-invalid:border-input-error-focus-border data-invalid:ring-input-error-focus-border/20",
  {
    variants: {
      state: {
        default:
          "focus:border-input-primary-focus-border focus:ring-input-primary-focus-border/20 border-base-200",
        error:
          "border-input-error-focus-border focus:ring-input-error-focus-border/20",
        success:
          "border-input-success-focus-border focus:ring-input-success-focus-border/20"
      }
    }
  }
);

export interface TextAreaProps
  extends AriaTextAreaProps, VariantProps<typeof textAreaStyles> {}

export function TextArea({
  className,
  rows = 4,
  state = "default",
  ...props
}: TextAreaProps) {
  return (
    <AriaTextAria
      rows={rows}
      className={cn(textAreaStyles({ state }), className)}
      {...props}
    />
  );
}
