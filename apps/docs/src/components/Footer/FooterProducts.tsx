import formbold from "@/../public/images/products/formbold.svg";
import graygrids from "@/../public/images/products/graygrids.svg";
import lineicons from "@/../public/images/products/lineicons.svg";
import nextjstemplates from "@/../public/images/products/nextjstemplates.svg";
import tailadmin from "@/../public/images/products/tailadmin.svg";
import uideck from "@/../public/images/products/uideck.svg";
import Image from "next/image";
import Link from "next/link";
import { BorderLine } from "../ui/ContainerWithGrid";

const productsData = [
  {
    name: "Lineicons",
    logo: lineicons,
    link: "https://lineicons.com/"
  },
  {
    name: "TailAdmin",
    logo: tailadmin,
    link: "https://tailadmin.com/"
  },
  {
    name: "Next.js Template",
    logo: nextjstemplates,
    link: "https://nextjstemplates.com/"
  },
  {
    name: "FormBold",
    logo: formbold,
    link: "https://formbold.com/"
  },
  {
    name: "Graygrids",
    logo: graygrids,
    link: "https://graygrids.com/"
  },
  {
    name: "Uideck",
    logo: uideck,
    link: "https://uideck.com/"
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
              className="group/social flex h-20 items-center justify-center border-r border-tg-border-1 px-1 max-lg:border-b max-lg:last-of-type:border-b-0 max-lg:nth-[5]:border-b-0 lg:last-of-type:border-r-0"
            >
              <span className="flex h-6 items-center justify-center overflow-hidden">
                <span className="flex h-6 flex-col space-y-1 opacity-50 duration-200 ease-in-out group-hover/social:-translate-y-6 group-hover/social:opacity-100">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    className="h-5.5"
                  />
                  <Image
                    src={product.logo}
                    alt={product.name}
                    className="h-5.5"
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
