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
  TextField,
  type FieldErrorProps as AriaFieldErrorProps,
  type GroupProps,
  type LabelProps,
  type TextFieldProps,
  type TextProps,
  type ValidationResult
} from "react-aria-components";

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

// Field

const fieldStyles = cva("flex gap-3", {
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

export interface FieldProps
  extends
    Omit<
      TextFieldProps,
      "isInvalid" | "isRequired" | "isDisabled" | "isReadOnly"
    >,
    VariantProps<typeof fieldStyles> {
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export function Field({
  className,
  orientation,
  invalid,
  required,
  disabled,
  readOnly,
  ...props
}: FieldProps) {
  return (
    <TextField
      className={cn(fieldStyles({ orientation }), className)}
      isInvalid={invalid}
      isRequired={required}
      isDisabled={disabled}
      isReadOnly={readOnly}
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

// ComposedField

export interface ComposedFieldProps extends Omit<
  FieldProps,
  "orientation" | "children" | "className"
> {
  orientation?: FieldProps["orientation"];
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?:
    | React.ReactNode
    | ((validation: ValidationResult) => React.ReactNode);
  children: React.ReactNode;
  className?: string;
}

export function ComposedField({
  orientation = "vertical",
  label,
  description,
  errorMessage,
  children,
  className,
  invalid,
  ...props
}: ComposedFieldProps) {
  return (
    <Field
      orientation={orientation}
      className={className}
      invalid={invalid}
      {...props}
    >
      {label && <FieldLabel>{label}</FieldLabel>}
      {children}
      {description && <FieldDescription>{description}</FieldDescription>}
      {invalid && errorMessage && (
        <FieldError>{errorMessage as unknown as React.ReactNode}</FieldError>
      )}
    </Field>
  );
}
