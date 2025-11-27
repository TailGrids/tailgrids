import { cn } from "@/utils/cn";
import { ArrowRight } from "@tailgrids/icons";

type PropsType = {
  items: {
    href: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  dividerType?: "slash" | "chevron" | "dot";
  activeHref?: string;
};

export function Breadcrumbs({ items, dividerType = "slash" }: PropsType) {
  return (
    <ol
      className={cn(
        "flex items-center gap-1.5",
        dividerType === "dot" && "gap-2"
      )}
    >
      {items.map((item, index) => (
        <li
          key={item.href}
          className="contents text-neutral-500 [&_svg]:text-current!"
        >
          {index > 0 && <Divider type={dividerType} />}

          <a
            href={item.href}
            className={cn(
              "flex items-center gap-1 text-sm [&>svg]:size-4",
              index + 1 === items.length && "text-neutral-800"
            )}
          >
            {item.icon}

            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

function Divider({ type }: { type: PropsType["dividerType"] }) {
  switch (type) {
    case "chevron":
      return <ArrowRight className="size-4" />;

    case "dot":
      return <span className="size-1 rounded-full bg-neutral-400" />;

    default:
      return <span>/</span>;
  }
}
