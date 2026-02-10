import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const groupStyles = cva(
  "flex divide-x transition [&>button]:border-y [&>button:first-child]:rounded-l-lg [&>button:first-child]:border-l [&>button:last-child]:rounded-r-lg [&>button:last-child]:border-r [&>button]:flex [&>button]:gap-1.5 [&>button]:items-center [&>button:first-child]:overflow-clip [&>button:last-child]:overflow-clip",
  {
    variants: {
      variant: {
        primary:
          "[&>button]:hover:bg-button-group-primary-hover-background text-button-group-primary-text [&>button]:border-primary-500 divide-primary-500 [&>button]:hover:text-button-group-primary-hover-text",
        secondary:
          "divide-button-outline-border [&>button]:bg-button-outline-background text-button-outline-text [&>button]:border-button-outline-border [&>button]:hover:bg-button-outline-hover-background [&>button]:hover:text-button-outline-hover-text"
      },
      size: {
        sm: "text-sm [&>button]:px-3.5 [&>button]:py-2.5",
        md: "[&>button]:px-4 [&>button]:py-2.5",
        lg: "[&>button]:px-5 [&>button]:py-3"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

type PropsType = ComponentProps<"div"> & VariantProps<typeof groupStyles>;

export function ButtonGroup({
  className,
  children,
  variant,
  size,
  ...props
}: PropsType) {
  return (
    <div
      className={cn(
        groupStyles({
          variant,
          size
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
