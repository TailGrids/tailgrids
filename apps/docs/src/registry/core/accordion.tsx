"use client";

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { createContext, useContext, useId, useState } from "react";
import { ChevronDown, Minus, Plus } from "@tailgrids/icons";

type Variant =
  | "style_one"
  | "style_two"
  | "style_three"
  | "style_four"
  | "style_five";

type RootContextType = {
  activeId: string | undefined;
  toggleActiveId: (id: string) => void;
  variant?: Variant;
};

const RootContext = createContext<RootContextType | null>(null);

function useRootContext() {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error(
      "useRootContext must be used within a RootContext Provider"
    );
  }
  return context;
}

const accordionRootStyle = cva("flex w-full flex-col", {
  variants: {
    variant: {
      style_one: "gap-5",
      style_two: "gap-4",
      style_three: "gap-3",
      style_four: "gap-4",
      style_five: "gap-x-4 gap-y-3"
    }
  }
});

type AccordionRootProps = {
  className?: string;
  children: React.ReactNode;
  variant?: Variant;
};

export function AccordionRoot({
  children,
  className,
  variant = "style_one"
}: AccordionRootProps) {
  const [activeId, setActiveId] = useState<string>();

  function toggleActiveId(id: string) {
    setActiveId(currentActiveId => (currentActiveId === id ? undefined : id));
  }

  return (
    <RootContext.Provider
      value={{
        activeId: activeId,
        toggleActiveId,
        variant
      }}
    >
      <div className={cn(accordionRootStyle({ variant }), className)}>
        {children}
      </div>
    </RootContext.Provider>
  );
}

type ItemContextType = {
  triggerId: string;
  contentId: string;
  dataState: "open" | "closed";
};

const ItemContext = createContext<ItemContextType | null>(null);

function useItemContext() {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error(
      "useItemContext must be used within a ItemContext Provider"
    );
  }
  return context;
}

const accordionItemStyle = cva("w-full", {
  variants: {
    variant: {
      style_one: "overflow-clip rounded-xl border border-neutral-200",
      style_two: "border-b border-neutral-100",
      style_three: "bg-neutral overflow-clip rounded-xl",
      style_four: "overflow-clip rounded-xl bg-neutral-50",
      style_five: "overflow-clip rounded-xl bg-neutral-50"
    }
  }
});

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function AccordionItem({ children, className }: AccordionItemProps) {
  const triggerId = useId();
  const contentId = useId();

  const { activeId, variant } = useRootContext();

  const dataState = activeId === triggerId ? "open" : "closed";

  return (
    <ItemContext.Provider
      value={{
        triggerId,
        contentId,
        dataState
      }}
    >
      <div
        data-state={dataState}
        className={cn(accordionItemStyle({ variant }), className)}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
}

const accordionTriggerStyle = cva(
  "group flex w-full items-start justify-between gap-2 text-left text-neutral-800",
  {
    variants: {
      variant: {
        style_one:
          "data-[state=open]:text-primary-500 p-5 data-[state=open]:pb-4 data-[state=open]:font-medium sm:p-6",
        style_two:
          "p-6 data-[state=open]:pb-4 data-[state=open]:font-medium max-sm:px-0 max-sm:py-5",
        style_three: "max-sm:p-5 max-sm:data-[state=open]:pb-4 sm:px-6 sm:py-5",
        style_four:
          "font-medium max-sm:p-5 max-sm:data-[state=open]:pb-4 sm:px-6 sm:pt-6 sm:pb-5",
        style_five: "p-5 data-[state=open]:pb-5 sm:p-6"
      }
    }
  }
);

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

export function AccordionTrigger({
  children,
  className
}: AccordionTriggerProps) {
  const { triggerId, contentId, dataState } = useItemContext();
  const { toggleActiveId, activeId, variant } = useRootContext();

  return (
    <h3>
      <button
        type="button"
        id={triggerId}
        aria-controls={contentId}
        aria-expanded={activeId === triggerId}
        data-state={dataState}
        className={cn(accordionTriggerStyle({ variant }), className)}
        onClick={() => toggleActiveId(triggerId)}
      >
        {children}

        <span className="flex h-lh items-center">
          {variant === "style_four" ? (
            <ChevronDown className="transition-all group-data-[state=open]:rotate-180" />
          ) : (
            <>{dataState === "open" ? <Minus /> : <Plus />}</>
          )}
        </span>
      </button>
    </h3>
  );
}

const accordionContentStyle = cva("text-neutral-500", {
  variants: {
    variant: {
      style_one: "px-5 pb-5 sm:px-6 sm:pb-7",
      style_two: "p-6 pt-0 max-sm:px-5 max-sm:pb-5",
      style_three: "mx-5 border-t border-neutral-100 pt-4 pb-5 sm:mx-6",
      style_four: "mx-5 border-t border-neutral-200 pt-4 pb-5 sm:mx-6 sm:pb-6",
      style_five: "p-5 pt-0 sm:p-6 sm:pt-0"
    }
  }
});

type AccordionContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function AccordionContent({
  children,
  className
}: AccordionContentProps) {
  const { triggerId, contentId, dataState } = useItemContext();
  const { variant } = useRootContext();

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      data-state={dataState}
      className={cn(accordionContentStyle({ variant }), className)}
      hidden={dataState === "closed"}
    >
      {dataState === "open" && children}
    </div>
  );
}
