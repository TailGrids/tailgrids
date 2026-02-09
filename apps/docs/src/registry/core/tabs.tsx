"use client";

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import {
  createContext,
  type HTMLAttributes,
  useContext,
  useId,
  useState
} from "react";
import { Badge } from "./badge";

type StyleVariant = "default" | "minimal";
type TabDirection = "vertical" | "horizontal";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
  variant: StyleVariant;
  direction: TabDirection;
  id: string;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabsContext must be used within a Tabs Component");
  }

  return context;
}

const tabRootStyles = cva("max-w-full rounded-xl border border-base-100", {
  variants: {
    variant: {
      default: "",
      minimal: ""
    },
    direction: {
      vertical: "",
      horizontal: "flex gap-8 p-6 max-sm:flex-wrap"
    }
  },
  compoundVariants: [
    {
      variant: "minimal",
      direction: "vertical",
      className: "px-6 pt-3"
    }
  ]
});

type TabsProps = {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
  variant?: StyleVariant;
  direction?: "vertical" | "horizontal";
};

export function TabRoot({
  defaultValue,
  children,
  className,
  variant = "default",
  direction = "vertical"
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const id = useId();

  return (
    <TabsContext.Provider
      value={{ activeTab, setActiveTab, variant, id, direction }}
    >
      <div className={cn(tabRootStyles({ variant, direction }), className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

const tabListWrapperStyles = cva("max-sm:w-full", {
  variants: {
    variant: {
      default: "",
      minimal: ""
    },
    direction: {
      vertical: "",
      horizontal: ""
    }
  },
  compoundVariants: [
    {
      direction: "vertical",
      className: "border-b border-base-100 [&>div]:w-full"
    },
    {
      direction: "vertical",
      variant: "default",
      className:
        "p-3 [&>div]:rounded-lg [&>div]:bg-background-soft-100 [&>div]:p-1"
    }
  ]
});

const tabListStyles = cva("flex overflow-x-auto overflow-y-hidden", {
  variants: {
    variant: {
      default: "",
      minimal: ""
    },
    direction: {
      vertical: "",
      horizontal: "flex-col gap-2 max-sm:items-center sm:min-w-50"
    }
  },
  compoundVariants: [
    {
      direction: "vertical",
      variant: "default",
      className: "gap-1"
    },
    {
      direction: "vertical",
      variant: "minimal",
      className: "gap-2"
    }
  ]
});

type TabListProps = {
  children: React.ReactNode;
  className?: string;
};

export function TabList({ children, className }: TabListProps) {
  const { variant, direction } = useTabsContext();

  return (
    <div className={tabListWrapperStyles({ variant, direction })}>
      <div
        role="tablist"
        className={cn(tabListStyles({ variant, direction }), className)}
      >
        {children}
      </div>
    </div>
  );
}

const tabTriggerStyles = cva(
  "flex items-center gap-2 px-3 text-sm font-medium whitespace-nowrap text-text-100 [&>svg]:size-5 [&>svg]:text-current!",
  {
    variants: {
      variant: {
        default: "",
        minimal: ""
      },
      direction: {
        vertical: "",
        horizontal:
          "hover:bg-primary-50 hover:text-primary-500 rounded-lg p-3 max-sm:w-full max-sm:justify-center"
      }
    },
    compoundVariants: [
      {
        direction: "vertical",
        variant: "default",
        className:
          "rounded-md py-2 data-[active=true]:bg-tab-active-background data-[active=true]:text-title-50 data-[active=true]:shadow-xs"
      },
      {
        direction: "vertical",
        variant: "minimal",
        className:
          "data-[active=true]:text-primary-500 data-[active=true]:border-primary-500 py-3.5 data-[active=true]:border-b-2"
      },
      {
        direction: "horizontal",
        variant: "default",
        className:
          "data-[active=true]:bg-primary-50 data-[active=true]:text-primary-500"
      },
      {
        direction: "horizontal",
        variant: "minimal",
        className:
          "data-[active=true]:border-primary-500 data-[active=true]:text-primary-500 data-[active=true]:border"
      }
    ]
  }
);

type TabTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  value: string;
  icon?: React.ReactNode;
  badge?: string | number;
};

export function TabTrigger({
  value,
  children,
  className,
  icon,
  badge,
  ...props
}: TabTriggerProps) {
  const { activeTab, setActiveTab, variant, id, direction } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      data-active={isActive}
      onClick={() => setActiveTab(value)}
      className={cn(tabTriggerStyles({ variant, direction }), className)}
      role="tab"
      aria-selected={isActive}
      id={`${id}-trigger-${value}`}
      aria-controls={`${id}-content-${value}`}
      {...props}
    >
      {icon}
      {children}
      {badge && (
        <Badge size={"sm"} color="primary">
          {badge}
        </Badge>
      )}
    </button>
  );
}

const tabContentStyles = cva("text-sm font-normal text-text-100", {
  variants: {
    variant: {
      default: "",
      minimal: ""
    },
    direction: {
      horizontal: "",
      vertical: ""
    }
  },
  compoundVariants: [
    {
      direction: "vertical",
      className: "py-6"
    },
    {
      direction: "vertical",
      variant: "default",
      className: "px-6"
    }
  ]
});

type TabContentProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export function TabContent({ value, children, className }: TabContentProps) {
  const { activeTab, id, variant, direction } = useTabsContext();

  return (
    <div
      role="tabpanel"
      id={`${id}-content-${value}`}
      aria-labelledby={`${id}-trigger-${value}`}
      className={cn(tabContentStyles({ variant, direction }), className)}
      hidden={activeTab !== value}
    >
      {children}
    </div>
  );
}
