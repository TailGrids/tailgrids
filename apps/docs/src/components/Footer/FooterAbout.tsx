import LogoDarkMode from "@/assets/logo/dark-mode.svg";
import LogoLightMode from "@/assets/logo/light-mode.svg";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

export default function FooterAbout() {
  return (
    <div className="flex w-full flex-col items-start md:w-auto lg:max-w-[270px] xl:min-w-5/12">
      <div className="mb-8">
        <Link href="/">
          <Image
            src={LogoLightMode}
            width={150}
            height={40}
            className="dark:hidden"
            alt="Tailgrids Logo"
          />
          <Image
            src={LogoDarkMode}
            width={150}
            height={40}
            className="not-dark:hidden"
            alt="Tailgrids Logo"
          />
        </Link>
      </div>
      <div className="mb-6 max-w-[438px] text-start text-base leading-6 text-gray-500 dark:text-gray-400 md:mb-12">
        An open-source React UI component library built with Tailwind CSS,
        including UI blocks and pre-built templates for modern web apps.
      </div>
      {/* social buttons section */}
      <SocialLinks />
    </div>
  );
}
