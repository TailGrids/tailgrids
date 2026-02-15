import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const aspectRatioStyles = cva("relative w-full overflow-hidden", {
  variants: {
    ratio: {
      square: "aspect-square",
      video: "aspect-video",
      "4/3": "aspect-[4/3]",
      "3/4": "aspect-[3/4]",
      "21/9": "aspect-[21/9]",
      "9/16": "aspect-[9/16]",
      "3/2": "aspect-[3/2]",
      "2/3": "aspect-[2/3]"
    }
  },
  defaultVariants: {
    ratio: "video"
  }
});

export type AspectRatioProps = Omit<ComponentProps<"div">, "children"> &
  VariantProps<typeof aspectRatioStyles> & {
    customRatio?: number;
    children: React.ReactNode;
  };

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio, customRatio, className, style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(aspectRatioStyles({ ratio }), className)}
        style={
          customRatio
            ? {
                ...style,
                aspectRatio: `${customRatio}`
              }
            : style
        }
        {...props}
      >
        {children}
      </div>
    );
  }
);

AspectRatio.displayName = "AspectRatio";
