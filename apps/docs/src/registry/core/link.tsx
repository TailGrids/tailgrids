import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export const linkStyles = cva(
  "inline-flex items-center font-medium transition [&>svg]:size-5 [&>svg]:text-current!",
  {
    variants: {
      variant: {
        primary: "text-primary-500 hover:text-primary-600",
        dark: "text-button-outline-text hover:text-text-100"
      },
      size: {
        sm: "gap-1.5 text-sm",
        md: "gap-2"
      }
    },
    defaultVariants: {
      variant: "dark",
      size: "sm"
    }
  }
);

type PropsType = ComponentProps<"a"> &
  VariantProps<typeof linkStyles> & { href: string };

export function Link({ className, variant, size, ...props }: PropsType) {
  return (
    <a className={cn(linkStyles({ variant, size }), className)} {...props} />
  );
}
