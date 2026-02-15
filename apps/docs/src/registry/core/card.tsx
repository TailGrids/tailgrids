import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

export function Card({ children, className }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full md:min-w-sm bg-card-background-50 flex flex-col gap-3 rounded-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: ComponentProps<"div">) {
  return (
    <div className={cn("w-full px-5 pt-5 relative", className)}>{children}</div>
  );
}

export function CardTitle({ children, className }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-xl md:text-2xl font-semibold text-title-50 leading-7 -tracking-[0.2px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardDescription({
  children,
  className
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mt-0.5 text-base text-text-100 leading-6 -tracking-[0.2px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardAction({ children, className }: ComponentProps<"div">) {
  return (
    <div className={cn("absolute top-5 right-5 text-text-50", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: ComponentProps<"div">) {
  return <div className={cn("px-5 text-text-100", className)}>{children}</div>;
}

export function CardFooter({ children, className }: ComponentProps<"div">) {
  return <div className={cn("px-5 pb-5", className)}>{children}</div>;
}
