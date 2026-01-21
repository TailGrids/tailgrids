import meku from "@/../public/images/products/meku.svg";
import mekuWhite from "@/../public/images/products/meku-white.svg";
import aymo from "@/../public/images/products/aymo.svg";
import aymoWhite from "@/../public/images/products/aymo-white.svg";
import lineicons from "@/../public/images/products/lineicons.svg";
import lineiconsWhite from "@/../public/images/products/lineicons-white.svg";
import nextjstemplates from "@/../public/images/products/nextjstemplates.svg";
import nextjstemplatesWhite from "@/../public/images/products/nextjstemplates-white.svg";
import tailadmin from "@/../public/images/products/tailadmin.svg";
import tailadminWhite from "@/../public/images/products/tailadmin-white.svg";
import cozycommerce from "@/../public/images/products/cozycommerce.svg";
import cozycommerceWhite from "@/../public/images/products/cozycommerce-white.svg";
import Image from "next/image";
import Link from "next/link";
import { BorderLine } from "../ui/ContainerWithGrid";

const productsData = [
  {
    name: "Lineicons",
    logo: lineicons,
    logoDark: lineiconsWhite,
    link: "https://lineicons.com/"
  },
  {
    name: "TailAdmin",
    logo: tailadmin,
    logoDark: tailadminWhite,
    link: "https://tailadmin.com/"
  },
  {
    name: "Next.js Template",
    logo: nextjstemplates,
    logoDark: nextjstemplatesWhite,
    link: "https://nextjstemplates.com/"
  },
  {
    name: "meku",
    logo: meku,
    logoDark: mekuWhite,
    link: "https://meku.dev/"
  },
  {
    name: "aymo",
    logo: aymo,
    logoDark: aymoWhite,
    link: "https://aymo.ai/"
  },
  {
    name: "CozyCommerce",
    logo: cozycommerce,
    logoDark: cozycommerceWhite,
    link: "https://cozycommerce.dev/"
  }
];

export default function FooterProducts() {
  return (
    <div>
      <div className="px-5 pb-6 leading-6 font-normal tracking-[-0.2px] text-gray-700 dark:text-gray-300 sm:px-10">
        Explore our others products
      </div>

      {/* Logo Wall Section */}
      <div className="relative bg-white dark:bg-gray-950">
        <BorderLine position="top" />

        <div className="grid grid-cols-2 divide-x divide-tg-border-1 md:grid-cols-4 lg:grid-cols-6">
          {productsData.map((product, index) => (
            <Link
              key={index}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/social flex h-20 items-center justify-center border-r border-tg-border-1 px-1 max-lg:border-b max-lg:last-of-type:border-b-0 dark:border-tg-border-2 max-lg:nth-[5]:border-b-0 lg:last-of-type:border-r-0"
            >
              <span className="flex h-6 items-center justify-center overflow-hidden">
                <span className="flex h-6 flex-col space-y-1 opacity-50 duration-200 ease-in-out group-hover/social:-translate-y-6 group-hover/social:opacity-100">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    className="h-5.5 dark:hidden"
                  />
                  <Image
                    src={product.logoDark}
                    alt={product.name}
                    className="hidden h-5.5 dark:block"
                  />
                  <Image
                    src={product.logo}
                    alt={product.name}
                    className="h-5.5 dark:hidden"
                  />
                  <Image
                    src={product.logoDark}
                    alt={product.name}
                    className="hidden h-5.5 dark:block"
                  />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
