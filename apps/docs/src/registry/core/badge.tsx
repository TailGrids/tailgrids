import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const badgeStyles = cva(
  "inline-flex items-center gap-2 rounded-full font-medium [&>svg]:size-3",
  {
    variants: {
      size: {
        sm: "py-0.5 text-xs",
        md: "py-0.5 text-sm",
        lg: "py-1 text-sm"
      },
      prefixIcon: { true: "", false: "" },
      suffixIcon: { true: "", false: "" },
      color: {
        gray: "bg-badge-neutral-background text-badge-neutral-text [&>svg]:text-badge-neutral-icon-color",
        primary:
          "bg-badge-primary-background text-badge-primary-text [&>svg]:text-badge-primary-icon-color",
        error:
          "bg-badge-error-background text-badge-error-text [&>svg]:text-badge-error-icon-color",
        warning:
          "bg-badge-warning-background text-badge-warning-text [&>svg]:text-badge-warning-icon-color",
        success:
          "bg-badge-success-background text-badge-success-text [&>svg]:text-badge-success-icon-color",
        cyan: "bg-badge-cyan-background text-badge-cyan-text [&>svg]:text-badge-cyan-icon-color",
        sky: "bg-badge-sky-background text-badge-sky-text [&>svg]:text-badge-sky-icon-color",
        blue: "bg-badge-blue-background text-badge-blue-text [&>svg]:text-badge-blue-icon-color",
        violet:
          "bg-badge-violet-background text-badge-violet-text [&>svg]:text-badge-violet-icon-color",
        purple:
          "bg-badge-purple-background text-badge-purple-text [&>svg]:text-badge-purple-icon-color",
        pink: "bg-badge-pink-background text-badge-pink-text [&>svg]:text-badge-pink-icon-color",
        rose: "bg-badge-rose-background text-badge-rose-text [&>svg]:text-badge-rose-icon-color",
        orange:
          "bg-badge-orange-background text-badge-orange-text [&>svg]:text-badge-orange-icon-color"
      }
    },
    compoundVariants: [
      {
        prefixIcon: true,
        suffixIcon: true,
        size: "sm",
        className: "px-1.5"
      },
      {
        prefixIcon: true,
        suffixIcon: true,
        size: "md",
        className: "px-2"
      },
      {
        prefixIcon: true,
        suffixIcon: true,
        size: "lg",
        className: "px-2.5"
      },
      {
        prefixIcon: false,
        suffixIcon: false,
        size: "sm",
        className: "px-2"
      },
      {
        prefixIcon: false,
        suffixIcon: false,
        size: "md",
        className: "px-2.5"
      },
      {
        prefixIcon: false,
        suffixIcon: false,
        size: "lg",
        className: "px-3"
      },
      {
        prefixIcon: true,
        suffixIcon: false,
        size: "sm",
        className: "pr-2 pl-1.5"
      },
      {
        prefixIcon: true,
        suffixIcon: false,
        size: "md",
        className: "pr-2.5 pl-2"
      },
      {
        prefixIcon: true,
        suffixIcon: false,
        size: "lg",
        className: "pr-3 pl-2.5"
      },
      {
        prefixIcon: false,
        suffixIcon: true,
        size: "sm",
        className: "pr-1.5 pl-2"
      },
      {
        prefixIcon: false,
        suffixIcon: true,
        size: "md",
        className: "pr-2 pl-2.5"
      },
      {
        prefixIcon: false,
        suffixIcon: true,
        size: "lg",
        className: "pr-2.5 pl-3"
      }
    ],
    defaultVariants: {
      size: "sm",
      color: "primary"
    }
  }
);

type PropsType = ComponentProps<"span"> &
  Omit<VariantProps<typeof badgeStyles>, "prefixIcon" | "suffixIcon"> & {
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
  };

export function Badge({
  color,
  size,
  className,
  prefixIcon,
  suffixIcon,
  children,
  ...props
}: PropsType) {
  return (
    <span
      className={cn(
        badgeStyles({
          color,
          size,
          prefixIcon: Boolean(prefixIcon),
          suffixIcon: Boolean(suffixIcon)
        }),
        className
      )}
      {...props}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
    </span>
  );
}
