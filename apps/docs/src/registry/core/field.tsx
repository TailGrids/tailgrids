"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { useField as useAriaField, type AriaFieldProps } from "react-aria";

// FieldSet

const fieldSetStyles = cva("flex flex-col gap-6");

export interface FieldSetProps
  extends
    React.ComponentPropsWithoutRef<"fieldset">,
    VariantProps<typeof fieldSetStyles> {}

export function FieldSet({ className, ...props }: FieldSetProps) {
  return <fieldset className={cn(fieldSetStyles(), className)} {...props} />;
}

// FieldLegend

const fieldLegendStyles = cva("text-title-50 font-semibold", {
  variants: {
    variant: {
      legend: "text-lg mb-1",
      label: "text-sm mb-0"
    }
  },
  defaultVariants: {
    variant: "legend"
  }
});

export interface FieldLegendProps
  extends
    React.ComponentPropsWithoutRef<"legend">,
    VariantProps<typeof fieldLegendStyles> {}

export function FieldLegend({
  className,
  variant,
  ...props
}: FieldLegendProps) {
  return (
    <legend
      className={cn(fieldLegendStyles({ variant }), className)}
      {...props}
    />
  );
}

// FieldGroup

const fieldGroupStyles = cva("@container/field-group flex flex-col gap-6");

export interface FieldGroupProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof fieldGroupStyles> {}

export function FieldGroup({ className, ...props }: FieldGroupProps) {
  return <div className={cn(fieldGroupStyles(), className)} {...props} />;
}

// Field

const fieldStyles = cva("flex gap-3", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row items-start",
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
    Omit<React.ComponentPropsWithoutRef<"div">, "children">,
    VariantProps<typeof fieldStyles> {
  children?: React.ReactNode;
  "data-invalid"?: boolean;
}

export function Field({
  className,
  orientation,
  "data-invalid": dataInvalid,
  ...props
}: FieldProps) {
  return (
    <div
      className={cn(fieldStyles({ orientation }), className)}
      data-invalid={dataInvalid}
      {...props}
    />
  );
}

// FieldContent

const fieldContentStyles = cva("flex flex-col gap-1.5 flex-1");

export interface FieldContentProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof fieldContentStyles> {}

export function FieldContent({ className, ...props }: FieldContentProps) {
  return <div className={cn(fieldContentStyles(), className)} {...props} />;
}

// FieldLabel

const fieldLabelStyles = cva(
  "text-sm font-medium text-input-label-text select-none cursor-pointer data-[disabled]:cursor-not-allowed data-[disabled]:text-input-disabled-text"
);

export interface FieldLabelProps
  extends
    React.ComponentPropsWithoutRef<"label">,
    VariantProps<typeof fieldLabelStyles> {
  asChild?: boolean;
}

export function FieldLabel({
  className,
  asChild = false,
  ...props
}: FieldLabelProps) {
  const Comp = asChild ? React.Fragment : "label";

  if (asChild) {
    return <>{props.children}</>;
  }

  return <Comp className={cn(fieldLabelStyles(), className)} {...props} />;
}

// FieldTitle

const fieldTitleStyles = cva(
  "text-sm font-medium text-input-label-text select-none"
);

export interface FieldTitleProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof fieldTitleStyles> {}

export function FieldTitle({ className, ...props }: FieldTitleProps) {
  return <div className={cn(fieldTitleStyles(), className)} {...props} />;
}

// FieldDescription

const fieldDescriptionStyles = cva(
  "text-sm font-normal text-text-50 data-[horizontal]:text-balance"
);

export interface FieldDescriptionProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof fieldDescriptionStyles> {}

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return <div className={cn(fieldDescriptionStyles(), className)} {...props} />;
}

// FieldError

const fieldErrorStyles = cva(
  "text-sm font-normal text-input-error data-[horizontal]:text-balance"
);

export interface FieldErrorProps
  extends
    React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof fieldErrorStyles> {}

export function FieldError({ className, ...props }: FieldErrorProps) {
  return <div className={cn(fieldErrorStyles(), className)} {...props} />;
}

// FieldSeparator

const fieldSeparatorStyles = cva(
  "relative flex items-center gap-4 text-sm text-text-100",
  {
    variants: {
      hasContent: {
        true: "before:h-px before:flex-1 before:bg-base-200 after:h-px after:flex-1 after:bg-base-200",
        false: "h-px bg-base-200"
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

// Composed Field with useField Hook

export interface ComposedFieldProps extends AriaFieldProps {
  orientation?: "vertical" | "horizontal" | "responsive";
  children: React.ReactNode;
  className?: string;
}

export function ComposedField({
  orientation = "vertical",
  children,
  className,
  ...ariaProps
}: ComposedFieldProps) {
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useAriaField(ariaProps);

  const { label, description, errorMessage, isInvalid } = ariaProps;

  return (
    <Field
      orientation={orientation}
      className={className}
      data-invalid={isInvalid}
      {...fieldProps}
    >
      {label && <FieldLabel {...labelProps}>{label}</FieldLabel>}
      <FieldContent>
        {children}
        {description && (
          <FieldDescription {...descriptionProps}>
            {description}
          </FieldDescription>
        )}
        {isInvalid && errorMessage && typeof errorMessage !== "function" && (
          <FieldError {...errorMessageProps}>{errorMessage}</FieldError>
        )}
      </FieldContent>
    </Field>
  );
}
