import Glow from "@/assets/glow.png";
import GlowDark from "@/assets/glow-dark.png";
import LogoBanner from "@/assets/logo/banner.png";
import LogoBannerDark from "@/assets/logo/banner-dark.png";
import Image from "next/image";

export default function HeaderBanner() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl relative overflow-hidden mb-8">
      <Image
        src={Glow}
        alt="Gradient Glow"
        role="presentation"
        width={100}
        height={0}
        className="w-full h-full rounded-r-3xl block dark:hidden absolute top-0 right-0 m-0!"
      />
      <Image
        src={GlowDark}
        alt="Gradient Glow"
        role="presentation"
        width={100}
        height={0}
        className="w-full h-full rounded-r-3xl hidden dark:block absolute top-0 right-0 m-0!"
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <Image
          src={LogoBanner}
          alt="Logo Banner"
          width={316}
          height={183}
          className="lg:block dark:hidden hidden "
        />
        <Image
          src={LogoBannerDark}
          alt="Logo Banner"
          width={316}
          height={183}
          className="hidden lg:dark:block "
        />
      </div>
      <div className="px-8 py-7  relative z-20">
        <h3 className="mt-0 mb-3 text-2xl">Quick Start</h3>
        <p className="mb-0 text-[#6B7280] dark:text-[#9CA3AF] text-sm font-normal max-w-100">
          Browse and effortlessly copy-paste from over 800+ components and
          templates.
        </p>
      </div>
    </div>
  );
}
