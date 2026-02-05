import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import type { ComponentProps } from "react";

export const buttonStyles = cva(
  "flex items-center justify-center gap-3 rounded-lg font-medium transition focus:ring-3 disabled:pointer-events-none [&>svg]:text-current!",
  {
    variants: {
      variant: {
        primary: "",
        danger: "",
        success: "",
        ghost: ""
      },
      appearance: {
        fill: "",
        outline: ""
      },
      iconOnly: {
        true: "",
        false: ""
      },
      size: {
        xs: "text-xs [&>svg]:size-5",
        sm: "text-sm [&>svg]:size-5",
        md: "[&>svg]:size-6",
        lg: "[&>svg]:size-6"
      }
    },
    compoundVariants: [
      {
        variant: ["primary", "danger", "success"],
        appearance: "fill",
        className:
          "text-white-100 disabled:bg-button-disabled-background disabled:text-button-disabled-text"
      },
      {
        variant: ["primary", "danger", "success"],
        appearance: "outline",
        // Disabled styles
        className:
          "disabled:bg-button-outline-disabled-background border disabled:border-button-disabled-border disabled:text-button-outline-disabled-text"
      },
      {
        variant: "primary",
        appearance: "fill",
        className:
          "focus:ring-button-primary-focus-ring bg-button-primary-background hover:bg-button-primary-hover-background text-button-primary-text"
      },
      {
        variant: "primary",
        appearance: "outline",
        className:
          "border-button-outline-border bg-button-outline-background text-button-outline-text hover:bg-button-outline-hover-background hover:text-button-outline-hover-text focus:ring-button-outline-focus-ring"
      },
      {
        variant: "danger",
        appearance: "fill",
        className:
          "bg-button-error-background hover:bg-button-error-hover-background focus:ring-button-error-focus-ring text-button-error-text"
      },
      {
        variant: "danger",
        appearance: "outline",
        className:
          "border-button-error-outline-border bg-button-error-outline-background text-button-error-outline-text hover:bg-button-error-outline-hover-background hover:text-button-error-outline-hover-text focus:ring-button-error-outline-focus-ring"
      },
      {
        variant: "success",
        appearance: "fill",
        className:
          "bg-button-success-background hover:bg-button-success-hover-background focus:ring-button-success-focus-ring text-button-success-text"
      },
      {
        variant: "success",
        appearance: "outline",
        className:
          "border-button-success-outline-border bg-button-success-outline-background text-button-success-outline-text hover:bg-button-success-outline-hover-background focus:ring-button-success-outline-focus-ring"
      },
      {
        variant: "ghost",
        className:
          "focus:ring-button-ghost-focus-ring text-button-ghost-text hover:bg-button-ghost-hover-background hover:text-button-ghost-hover-text focus:ring-2"
      },
      {
        iconOnly: true,
        size: "xs",
        className: "size-8"
      },
      {
        iconOnly: true,
        size: "sm",
        className: "size-10"
      },
      {
        iconOnly: false,
        size: ["xs", "sm"],
        className: "px-3.5"
      },
      {
        iconOnly: true,
        size: "md",
        className: "size-11"
      },
      {
        iconOnly: false,
        size: "md",
        className: "px-4"
      },
      {
        iconOnly: true,
        size: "lg",
        className: "size-12"
      },
      {
        iconOnly: false,
        size: "lg",
        className: "px-5"
      },
      {
        iconOnly: false,
        className: "py-2.5"
      }
    ],
    defaultVariants: {
      variant: "primary",
      appearance: "fill",
      iconOnly: false,
      size: "md"
    }
  }
);

type PropsType = ComponentProps<"button"> & {
  variant?: "primary" | "danger" | "success" | "ghost";
  appearance?: "fill" | "outline";
  iconOnly?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
};

export function Button({
  variant,
  appearance,
  iconOnly,
  size,
  children,
  className,
  ...props
}: PropsType) {
  return (
    <button
      type="button"
      className={cn(
        buttonStyles({
          variant,
          appearance,
          iconOnly,
          size
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
