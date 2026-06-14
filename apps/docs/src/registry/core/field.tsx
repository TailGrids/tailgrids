"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import {
  FieldError as AriaFieldError,
  Group as AriaGroup,
  Label as AriaLabel,
  Separator as AriaSeparator,
  Text as AriaText,
  type FieldErrorProps as AriaFieldErrorProps,
  type GroupProps,
  type LabelProps,
  type TextProps
} from "react-aria-components";

// FieldSet

const fieldSetStyles = cva("flex flex-col gap-4", {
  variants: {
    hasCheckboxGroup: {
      true: "has-[>[data-slot=checkbox-group]]:gap-3",
      false: ""
    },
    hasRadioGroup: {
      true: "has-[>[data-slot=radio-group]]:gap-3",
      false: ""
    }
  },
  defaultVariants: {
    hasCheckboxGroup: false,
    hasRadioGroup: false
  }
});

export interface FieldSetProps
  extends
    React.ComponentProps<"fieldset">,
    VariantProps<typeof fieldSetStyles> {}

export function FieldSet({
  className,
  hasCheckboxGroup,
  hasRadioGroup,
  ...props
}: FieldSetProps) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        fieldSetStyles({ hasCheckboxGroup, hasRadioGroup }),
        className
      )}
      {...props}
    />
  );
}

// FieldLegend

const fieldLegendStyles = cva("mb-1.5 font-medium", {
  variants: {
    variant: {
      label: "text-sm",
      legend: "text-base"
    }
  },
  defaultVariants: {
    variant: "legend"
  }
});

export interface FieldLegendProps
  extends
    React.ComponentProps<"legend">,
    VariantProps<typeof fieldLegendStyles> {}

export function FieldLegend({
  className,
  variant = "legend",
  ...props
}: FieldLegendProps) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(fieldLegendStyles({ variant }), className)}
      {...props}
    />
  );
}

// FieldGroup

const fieldGroupStyles = cva("@container/field-group flex flex-col gap-6");

export interface FieldGroupProps
  extends
    Omit<GroupProps, "isDisabled" | "isReadOnly">,
    VariantProps<typeof fieldGroupStyles> {
  disabled?: boolean;
  readOnly?: boolean;
}

export function FieldGroup({
  className,
  disabled,
  readOnly,
  ...props
}: FieldGroupProps) {
  return (
    <AriaGroup
      className={cn(fieldGroupStyles(), className)}
      isDisabled={disabled}
      isReadOnly={readOnly}
      {...props}
    />
  );
}

// FieldContent

const fieldContentStyles = cva(
  "group/field-content flex flex-1 flex-col gap-0.5 leading-snug"
);

export interface FieldContentProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof fieldContentStyles> {}

export function FieldContent({ className, ...props }: FieldContentProps) {
  return (
    <div
      data-slot="field-content"
      className={cn(fieldContentStyles(), className)}
      {...props}
    />
  );
}

// FieldLabel

const fieldLabelStyles = cva(
  "text-sm font-medium text-input-label-text select-none cursor-pointer data-disabled:cursor-not-allowed data-disabled:text-input-disabled-text"
);

export interface FieldLabelProps
  extends LabelProps, VariantProps<typeof fieldLabelStyles> {}

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return <AriaLabel className={cn(fieldLabelStyles(), className)} {...props} />;
}

// FieldTitle

const fieldTitleStyles = cva(
  "text-sm font-medium text-input-label-text select-none"
);

export interface FieldTitleProps
  extends TextProps, VariantProps<typeof fieldTitleStyles> {}

export function FieldTitle({ className, ...props }: FieldTitleProps) {
  return <AriaText className={cn(fieldTitleStyles(), className)} {...props} />;
}

// FieldDescription

const fieldDescriptionStyles = cva(
  "text-sm font-normal text-text-50 data-horizontal:text-balance"
);

export interface FieldDescriptionProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof fieldDescriptionStyles> {}

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <AriaText
      slot="description"
      className={cn(fieldDescriptionStyles(), className)}
      {...props}
    />
  );
}

// FieldError

const fieldErrorStyles = cva(
  "text-sm font-normal text-input-error data-horizontal:text-balance"
);

export interface FieldErrorProps
  extends AriaFieldErrorProps, VariantProps<typeof fieldErrorStyles> {}

export function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <AriaFieldError className={cn(fieldErrorStyles(), className)} {...props} />
  );
}

// FieldSeparator

const fieldSeparatorStyles = cva(
  "relative flex items-center gap-4 text-sm text-text-100",
  {
    variants: {
      hasContent: {
        true: "before:h-px before:flex-1 before:bg-(--border-color-base-200) after:h-px after:flex-1 after:bg-(--border-color-base-200)",
        false: "h-px bg-(--border-color-base-200)"
      }
    }
  }
);

export interface FieldSeparatorProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof fieldSeparatorStyles> {}

export function FieldSeparator({
  className,
  children,
  ...props
}: FieldSeparatorProps) {
  const hasContent = Boolean(children);

  if (!children) {
    return (
      <AriaSeparator
        className={cn(fieldSeparatorStyles({ hasContent }), className)}
      />
    );
  }

  return (
    <div
      className={cn(fieldSeparatorStyles({ hasContent }), className)}
      role="separator"
      {...props}
    >
      {children}
    </div>
  );
}
