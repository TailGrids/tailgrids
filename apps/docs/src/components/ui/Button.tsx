import { cn } from "@/utils/cn";
import type { LinkProps } from "next/link";
import Link from "next/link";
import React from "react";

export type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "danger-outline";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  "aria-label"?: string;
  children?: React.ReactNode;
};

// Button element type
type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

// Anchor element type
type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
  };

// Next.js Link type
type ButtonAsLink = ButtonBaseProps &
  Omit<LinkProps, keyof ButtonBaseProps> & {
    as: "link";
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

type ButtonRef = React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>;

const ButtonComponent = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props: ButtonProps, ref: ButtonRef) => {
  const {
    className,
    variant = "default",
    isLoading = false,
    children,
    disabled,
    fullWidth = false,
    "aria-label": ariaLabel,
    as = "button",
    ...rest
  } = props;

  const baseStyles = cn(
    "inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-4.5 text-sm font-medium duration-200",
    "focus-visible:outline-none",
    "disabled:pointer-events-none",
    fullWidth && "w-full"
  );

  const variants = {
    default:
      "bg-white hover:bg-gray-50 text-tg-title-color shadow-default-button",
    primary:
      "bg-primary-500 hover:bg-primary-600 text-white shadow-primary-button",
    secondary:
      "bg-gray-800 hover:bg-gray-900 text-white shadow-secondary-button",
    outline:
      "border border-dark-3 bg-transparent text-lp-gray-950 dark:text-white",
    "danger-outline":
      "border border-red-100 bg-transparent text-red-500 hover:text-red-700 hover:bg-red-50 hover:border-red-100"
  };

  const loadingSpinner = (
    <span
      className={cn(
        "size-[1lh] animate-spin rounded-full border-2 border-current border-t-transparent"
      )}
      aria-hidden="true"
    />
  );

  const commonProps = {
    className: cn(baseStyles, variants[variant], className),
    "aria-label": ariaLabel,
    "aria-disabled": disabled || isLoading,
    "aria-busy": isLoading
  };

  const content = (
    <>
      {isLoading && (
        <span className="flex items-center justify-center">
          {loadingSpinner}
        </span>
      )}
      {children}
    </>
  );

  if (as === "link") {
    const { href, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link
        href={href}
        {...linkProps}
        {...commonProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {content}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a
        {...(rest as ButtonAsAnchor)}
        {...commonProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...(rest as ButtonAsButton)}
      {...commonProps}
      disabled={disabled || isLoading}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      {content}
    </button>
  );
});

ButtonComponent.displayName = "Button";

export const Button = ButtonComponent;
