import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const tableRootStyles = cva(
  "border-base-100 min-w-full border-separate border-spacing-0 overflow-clip text-left",
  {
    variants: {
      fullBleed: {
        true: "border-y",
        false: "rounded-lg border"
      }
    },
    defaultVariants: {
      fullBleed: false
    }
  }
);

type TableRootProps = ComponentProps<"table"> &
  VariantProps<typeof tableRootStyles>;

export function TableRoot({ className, fullBleed, ...props }: TableRootProps) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(tableRootStyles({ fullBleed }), className)}
        {...props}
      />
    </div>
  );
}

const tableHeaderStyles = cva(
  "[&_th]:border-base-100 text-title-50 [&_th]:border-b [&_th]:text-xs"
);

export function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return <thead className={cn(tableHeaderStyles(), className)} {...props} />;
}

const tableBodyStyle = cva();

export function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return <tbody className={cn(tableBodyStyle(), className)} {...props} />;
}

const tableHeadStyles = cva("px-5 py-3.5 font-medium");

export function TableHead({ className, ...props }: ComponentProps<"th">) {
  return <th className={cn(tableHeadStyles(), className)} {...props} />;
}

const tableRowStyles = cva(
  "not-last:[&>*]:border-base-100 not-last:[&>td]:border-b not-last:[&>th]:border-b"
);

export function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return <tr className={cn(tableRowStyles(), className)} {...props} />;
}

const tableCellStyles = cva("text-text-100 px-5 py-3.5 font-medium");

export function TableCell({ className, ...props }: ComponentProps<"td">) {
  return <td className={cn(tableCellStyles(), className)} {...props} />;
}
