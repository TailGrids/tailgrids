import Image from "next/image";
import SocialLinks from "./SocialLinks";
import LogoDarkMode from "@/assets/logo/dark-mode.svg";
import LogoLightMode from "@/assets/logo/light-mode.svg";

export default function FooterAbout() {
  return (
    <div className="flex w-full flex-col items-start md:w-auto lg:max-w-[270px] xl:min-w-5/12">
      <div className="mb-8">
        <Image
          src={LogoLightMode}
          width={150}
          height={40}
          className="dark:hidden"
          alt="TailGrids Logo"
        />
        <Image
          src={LogoDarkMode}
          width={150}
          height={40}
          className="not-dark:hidden"
          alt="TailGrids Logo"
        />
      </div>
      <div className="mb-6 max-w-[438px] text-start text-base leading-6 text-gray-500 dark:text-gray-400 md:mb-12">
        Browse and effortlessly copy-paste from over 800+ components and
        templates to craft high-quality, custom Tailwind CSS websites without
        coding.
      </div>
      {/* social buttons section */}
      <SocialLinks />
    </div>
  );
}
