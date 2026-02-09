import { cn } from "@/utils/cn";
import {
  CheckCircle1,
  Close,
  Envelope1,
  InfoCircle,
  XmarkCircle
} from "@tailgrids/icons";
import { cva, type VariantProps } from "class-variance-authority";
import { Avatar } from "./avatar";
import { Button } from "./button";
import { linkStyles } from "./link";

const iconWrapperStyle = cva(
  "grid size-9 place-items-center rounded-md [&>svg]:size-6 [&>svg]:text-current",
  {
    variants: {
      variant: {
        success: "bg-success-500/10 text-success-500",
        error: "bg-error-500/10 text-error-500",
        info: "bg-info-500/10 text-info-500",
        warning: "bg-warning-500/10 text-warning-500",
        default: "bg-primary-500/10 text-primary-500"
      }
    }
  }
);

type MessageType =
  | string
  | {
      title: string;
      description: string;
    };

type PropsType = VariantProps<typeof iconWrapperStyle> & {
  undoAction?: () => void;
  message: MessageType;
  children?: React.ReactNode;
  hideIcon?: boolean;
  icon?: React.ReactNode;
};

export function Toast({
  variant = "default",
  undoAction,
  message,
  children,
  hideIcon,
  icon
}: PropsType) {
  return (
    <div
      className={cn(
        "flex max-w-112.5 min-w-96.25 items-center gap-3 rounded-lg border border-base-100 p-3 shadow-sm",
        typeof message === "object" && "relative items-start",
        hideIcon && "py-2"
      )}
    >
      {!hideIcon && (
        <div className={iconWrapperStyle({ variant })}>
          {icon || getIcon(variant)}
        </div>
      )}

      <div
        className={cn({
          "contents ": typeof message === "string",
          "ml-1": typeof message === "object" && hideIcon
        })}
      >
        {typeof message === "object" && (
          <h4 className="mb-1.5 text-lg font-semibold text-title-50">
            {message.title}
          </h4>
        )}

        <p
          className={cn({
            "text-base text-title-50 font-medium": typeof message === "string",
            "text-sm text-text-100": typeof message === "object",
            "ml-1": typeof message === "string" && hideIcon
          })}
        >
          {typeof message === "string" ? message : message.description}
        </p>

        {typeof message === "string" && undoAction && (
          <button
            className={linkStyles({ variant: "primary", className: "ml-auto" })}
            onClick={undoAction}
          >
            Undo
          </button>
        )}

        {children}

        <Button
          variant="ghost"
          size="xs"
          iconOnly
          className={cn({
            "ml-auto": !undoAction,
            "absolute top-1 right-1": typeof message === "object"
          })}
        >
          <span className="sr-only">Dismiss Toast</span>
          <Close />
        </Button>
      </div>
    </div>
  );
}

type AvatarToastProps = {
  name: string;
  description: string;
  image?: string;
  status: "none" | "online" | "offline" | "busy";
  time: string;
};

export function AvatarToast({
  name,
  description,
  image,
  status,
  time
}: AvatarToastProps) {
  return (
    <div className="bg-neutral relative flex min-w-89.5 items-start gap-4 rounded-lg border border-base-100 p-5 shadow-sm">
      <Avatar
        src={image}
        alt={"Image of " + name}
        status={status}
        fallback={name.charAt(0)}
        size={"lg"}
      />

      <div>
        <h4 className="text-sm font-semibold text-title-50">{name}</h4>
        <p className="text-sm text-text-100">{description}</p>

        <p className="text-primary-500 mt-2 text-xs">{time}</p>
      </div>

      <Button
        variant="ghost"
        size="xs"
        iconOnly
        className="absolute top-1 right-1"
      >
        <span className="sr-only">Dismiss Toast</span>
        <Close />
      </Button>
    </div>
  );
}

function getIcon(variant: PropsType["variant"]) {
  switch (variant) {
    case "success":
      return <CheckCircle1 />;
    case "error":
      return <XmarkCircle />;
    case "warning":
      return <InfoCircle />;
    case "info":
      return <InfoCircle />;
    case "default":
      return <Envelope1 />;
  }
}
