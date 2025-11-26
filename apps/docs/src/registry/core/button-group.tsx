import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const groupStyles = cva(
  "flex divide-x transition [&>button]:border-y [&>button:first-child]:rounded-l-lg [&>button:first-child]:border-l [&>button:last-child]:rounded-r-lg [&>button:last-child]:border-r [&>button]:flex [&>button]:gap-1.5 [&>button]:items-center",
  {
    variants: {
      variant: {
        primary:
          "[&>button]:hover:bg-primary-500 text-primary-500 [&>button]:border-primary-500 divide-primary-500 [&>button]:hover:text-white",
        secondary:
          "divide-neutral-300 text-neutral-800 [&>button]:border-neutral-300 [&>button]:hover:bg-neutral-100 [&>button]:hover:text-neutral-900"
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
