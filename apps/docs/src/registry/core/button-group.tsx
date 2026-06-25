import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const groupStyles = cva(
  "flex divide-x transition [:where(&>button)]:flex [:where(&>button)]:items-center [:where(&>button)]:gap-1.5 [:where(&>button)]:border-y [:where(&>button:first-child)]:overflow-clip [:where(&>button:first-child)]:rounded-l-lg [:where(&>button:first-child)]:border-l [:where(&>button:last-child)]:overflow-clip [:where(&>button:last-child)]:rounded-r-lg [:where(&>button:last-child)]:border-r",
  {
    variants: {
      variant: {
        primary:
          "divide-primary-500 text-button-group-primary-text [:where(&>button)]:border-primary-500 [:where(&>button)]:hover:bg-button-group-primary-hover-background [:where(&>button)]:hover:text-button-group-primary-hover-text",
        secondary:
          "divide-button-outline-border text-button-outline-text [:where(&>button)]:border-button-outline-border [:where(&>button)]:bg-button-outline-background [:where(&>button)]:hover:bg-button-outline-hover-background [:where(&>button)]:hover:text-button-outline-hover-text"
      },
      size: {
        sm: "text-sm [:where(&>button)]:px-3.5 [:where(&>button)]:py-2.5",
        md: "[:where(&>button)]:px-4 [:where(&>button)]:py-2.5",
        lg: "[:where(&>button)]:px-5 [:where(&>button)]:py-3"
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
