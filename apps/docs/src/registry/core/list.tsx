import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import type { ComponentProps } from "react";

const listGroupStyles = cva(
  "[&>li]:data-[active=true]:bg-primary-50 [&>li]:data-[active=true]:text-primary-500 flex w-full overflow-clip rounded-lg border border-base-100 text-sm text-text-100 [&_span]:data-[type=count]:ml-auto [&_svg]:text-current [&>li]:relative [&>li]:flex [&>li]:items-center [&>li]:gap-3 [&>li]:px-3 [&>li]:py-2.5 [&>li]:hover:bg-background-soft-100 [&>li]:hover:text-text-50",
  {
    variants: {
      hideDividers: {
        false: ""
      },
      direction: {
        vertical: "max-w-57 flex-col",
        horizontal: "max-w-fit flex-row"
      }
    },
    compoundVariants: [
      {
        hideDividers: false,
        direction: "vertical",
        className: "max-w-57 divide-y divide-base-100"
      },
      {
        hideDividers: false,
        direction: "horizontal",
        className: "divide-x divide-base-100"
      }
    ]
  }
);

type PropsType = ComponentProps<"ul"> & {
  direction?: "vertical" | "horizontal";
  hideDividers?: boolean;
};

export function List({
  children,
  hideDividers,
  direction = "vertical",
  className,
  ...props
}: PropsType) {
  return (
    <ul
      className={cn(
        listGroupStyles({
          hideDividers: Boolean(hideDividers),
          direction
        }),
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
}
