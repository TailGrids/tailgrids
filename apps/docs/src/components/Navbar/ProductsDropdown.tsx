import { cn } from "@/lib/cn";
import Link from "next/link";
import { CheckmarkIcon, LongArrowUpRightIcon } from "../ui/icons";
import { MenuItem } from "./menuData";

interface ProductsDropdownProps {
  menuItem: MenuItem;
  isOpen?: boolean;
}

export default function ProductsDropdown(props: ProductsDropdownProps) {
  return (
    <div
      className={cn(
        "relative top-full grid gap-4 rounded-20 border-tg-border-1 bg-white transition-all duration-200 max-lg:py-3 md:grid-cols-2 lg:absolute lg:left-1/2 lg:w-[654px] lg:-translate-x-1/2 lg:border lg:p-2 lg:shadow-lg 2xl:left-0",
        props.isOpen ? "lg:visible lg:opacity-100" : "lg:invisible lg:opacity-0"
      )}
    >
      <div>
        {props.menuItem.children?.map((item, index) => (
          <Link
            href={item.path || "#"}
            key={index}
            className="flex gap-3 rounded-[14px] p-4 duration-200 hover:bg-gray-100"
          >
            <div className="flex size-11 shrink-0 items-center justify-center border rounded-xl bg-white shadow-navbar-icon">
              {item.icon}
            </div>
            <div>
              <span className="mb-1 block text-base font-medium -tracking-[.2px] text-tg-title-color">
                {item.title}
              </span>
              <span className="block text-sm -tracking-[.2px] text-tg-text-color-secondary">
                {item.desc}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden rounded-[14px] border border-gray-100 bg-gray-50 p-6">
        <div>
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium -tracking-[.2px] text-primary-500">
              What’s new in version 3.0
            </span>
            <LongArrowUpRightIcon className="size-5 text-tg-text-color" />
          </div>
          <h3 className="text-xl font-medium -tracking-[.7px] text-tg-title-color">
            A Complete Redesign with Fresh Components
          </h3>
        </div>
        <div className=" bg-cover bg-no-repeat">
          <ul className="mt-4 space-y-2">
            <li className="flex gap-2">
              <CheckmarkIcon className="size-5 text-green-600" />
              <span className="text-sm font-medium -tracking-[.2px] text-tg-text-color-secondary">
                Simplified core components
              </span>
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="size-5 text-green-600" />
              <span className="text-sm font-medium -tracking-[.2px] text-tg-text-color-secondary">
                200s new+ improved components
              </span>
            </li>
            <li className="flex gap-2">
              <CheckmarkIcon className="size-5 text-green-600" />
              <span className="text-sm font-medium -tracking-[.2px] text-tg-text-color-secondary">
                And much more...
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
