import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const groupStyles = cva("flex items-center", {
  variants: {
    size: {
      xs: "gap-2",
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-3",
      xl: "gap-4",
      xxl: "gap-4"
    }
  }
});

const avatarStyles = cva(
  "bg-primary-50 text-primary-500 relative grid place-items-center rounded-full",
  {
    variants: {
      size: {
        xs: "size-6 text-xs font-medium",
        sm: "size-8 text-sm font-medium",
        md: "size-10 text-base font-semibold",
        lg: "size-12 text-lg font-semibold",
        xl: "size-14 text-xl font-semibold",
        xxl: "size-16 text-2xl font-semibold"
      }
    }
  }
);

type PropsType = VariantProps<typeof avatarStyles> & {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
  status?: "none" | "online" | "offline" | "busy";
  fallback: string;
  label?: {
    name: string;
    email: string;
  };
};

export function Avatar({
  src,
  alt,
  className,
  fallback,
  size = "md",
  style,
  status = "none",
  label
}: PropsType) {
  return (
    <figure className={cn(groupStyles({ size }), className)} style={style}>
      <div className={avatarStyles({ size })}>
        {src ? (
          <img
            src={src}
            className="size-full aspect-square rounded-full object-cover"
            alt={alt}
          />
        ) : (
          <span className="uppercase">{fallback}</span>
        )}

        {status !== "none" && <Indicator size={size} status={status} />}
      </div>

      {label && (
        <LabelGroup size={size} name={label.name} email={label.email} />
      )}
    </figure>
  );
}

const indicatorStyles = cva(
  "absolute right-0 bottom-0 rounded-full ring-[1.5px] ring-white",
  {
    variants: {
      status: {
        online: "bg-success",
        offline: "bg-danger",
        busy: "bg-warning"
      },
      size: {
        xs: "size-1.5",
        sm: "size-2",
        md: "size-2.5",
        lg: "size-3",
        xl: "size-3.5",
        xxl: "size-4"
      }
    },
    defaultVariants: {
      size: "md",
      status: "online"
    }
  }
);

type IndicatorProps = VariantProps<typeof indicatorStyles>;

function Indicator({ size, status }: IndicatorProps) {
  return <div className={indicatorStyles({ size, status })} />;
}

const nameStyles = cva("font-medium text-neutral-700", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-md",
      xl: "text-lg",
      xxl: "text-lg"
    }
  }
});

const emailStyles = cva("text-neutral-500", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm",
      xl: "text-base",
      xxl: "text-base"
    }
  }
});

type LabelGroupProps = VariantProps<typeof nameStyles> & {
  name: string;
  email: string;
};

export function LabelGroup({ name, email, size }: LabelGroupProps) {
  return (
    <figcaption>
      <div className={nameStyles({ size })}>{name}</div>
      <div className={emailStyles({ size })}>{email}</div>
    </figcaption>
  );
}

type AvatarGroupPropsType = {
  className?: string;
  size?: "xs" | "sm" | "md";
  data: {
    src: string;
    alt: string;
  }[];
};

export function AvatarGroup({
  className,
  size = "md",
  data
}: AvatarGroupPropsType) {
  return (
    <div className={cn("flex items-center -space-x-2", className)}>
      {data.map(({ src, alt }, i) => (
        <Avatar
          key={src}
          size={size}
          src={src}
          alt={alt}
          fallback={alt.charAt(0)}
          className="rounded-full ring-[1.5px] ring-white"
          style={{
            zIndex: i
          }}
        />
      ))}
    </div>
  );
}
