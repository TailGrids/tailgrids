"use client";

import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  type RadioProps as AriaRadioProps
} from "react-aria-components";
import { FieldDescription, FieldError, FieldLabel } from "./field";

type RadioGroupVariants = VariantProps<typeof radioGroupStyles>;
type RadioItemVariants = VariantProps<typeof radioItemStyles>;

const radioGroupStyles = cva("flex flex-col gap-2", {
  variants: {
    orientation: {
      horizontal: "flex-row items-center",
      vertical: "flex-col"
    },
    spacing: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-4"
    }
  },
  defaultVariants: {
    orientation: "vertical",
    spacing: "md"
  }
});

const radioItemStyles = cva(
  "group relative flex cursor-pointer items-center gap-3 rounded-lg transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "p-0",
        card: "border border-base-200 bg-white p-3 shadow-sm hover:border-base-300 hover:bg-base-50",
        outline:
          "border border-base-200 p-3 hover:border-base-300 hover:bg-base-50"
      },
      size: {
        sm: "",
        md: "",
        lg: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

const racRadioStyles = cva(
  "bg-checkbox-background group-data-[focused]:border-checkbox-checked-border group-hover:border-checkbox-checked-border group-data-[selected]:border-checkbox-checked-border! group-data-[focused]:ring-checkbox-checked-border/20 group-data-[selected]:bg-checkbox-checked-background grid place-items-center rounded-full border border-base-300 transition group-data-[focused]:ring-4 group-data-[disabled]:bg-transparent group-data-[disabled]:border-base-300!",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

const racDotStyles = cva(
  "absolute top-1/2 left-1/2 -translate-1/2 rounded-full group-data-[selected]:bg-checkbox-checked-icon-color group-data-[disabled]:bg-(--border-color-base-300) hidden group-data-[selected]:block",
  {
    variants: {
      size: {
        sm: "size-1.5",
        md: "size-[7.5px]",
        lg: "size-2"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

export interface RadioGroupProps
  extends
    Omit<AriaRadioGroupProps, "children" | "orientation">,
    RadioGroupVariants {
  children?: React.ReactNode;
  className?: string;
}

function RadioGroup({
  orientation,
  spacing,
  className,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup
      orientation={orientation ?? undefined}
      className={cn(radioGroupStyles({ orientation, spacing }), className)}
      {...props}
    >
      {children}
    </AriaRadioGroup>
  );
}

export interface RadioGroupItemProps
  extends Omit<AriaRadioProps, "children">, RadioItemVariants {
  children?: React.ReactNode;
  className?: string;
  description?: string;
  showLabel?: boolean;
}

function RadioGroupItem({
  variant,
  size,
  className,
  children,
  description,
  showLabel = true,
  ...props
}: RadioGroupItemProps) {
  const radioSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "md";

  return (
    <AriaRadio
      className={cn(radioItemStyles({ variant, size }), className)}
      {...props}
    >
      {({ isDisabled }) => (
        <div className="flex items-start gap-3">
          <div className="relative mt-0.5">
            <div className={racRadioStyles({ size: radioSize })} />
            <div className={racDotStyles({ size: radioSize })} />
          </div>

          <div className="flex-1">
            {showLabel && (
              <div className="flex flex-col gap-1">
                <span
                  className={cn(
                    "text-sm font-medium text-text-50",
                    isDisabled && "text-text-200"
                  )}
                >
                  {children}
                </span>
                {description && (
                  <span
                    className={cn(
                      "text-xs text-text-200",
                      isDisabled && "text-text-300"
                    )}
                  >
                    {description}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </AriaRadio>
  );
}

export interface RadioGroupFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
}

const RadioGroupLabel = FieldLabel;
const RadioGroupDescription = FieldDescription;
const RadioGroupError = FieldError;

function RadioGroupField({
  label,
  description,
  error,
  required,
  className,
  children,
  ...props
}: RadioGroupFieldProps) {
  const hasLabel = !!label;
  const hasDescription = !!description;
  const hasError = !!error;

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {hasLabel && (
        <RadioGroupLabel>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </RadioGroupLabel>
      )}

      {hasDescription && (
        <RadioGroupDescription>{description}</RadioGroupDescription>
      )}

      {children}

      {hasError && <RadioGroupError>{error}</RadioGroupError>}
    </div>
  );
}

export {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupError,
  RadioGroupField,
  RadioGroupItem,
  RadioGroupLabel
};
