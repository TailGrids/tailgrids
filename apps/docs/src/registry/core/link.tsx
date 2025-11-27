import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const linkStyles = cva(
  "inline-flex items-center font-medium transition [&>svg]:size-5 [&>svg]:text-current!",
  {
    variants: {
      variant: {
        primary: "text-primary-500 hover:text-primary-600",
        dark: "text-neutral-800 hover:text-neutral-500"
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
