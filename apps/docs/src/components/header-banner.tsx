import Image from "next/image";

export default function HeaderBanner() {
  return (
    <div className="bg-gray-50 rounded-3xl relative overflow-hidden">
      <Image
        src="/images/glow.png"
        alt="Glow"
        width={100}
        height={0}
        className="w-full h-full rounded-r-3xl absolute top-0 right-0 m-0!"
      />
      <div className="absolute top-0 right-0">
        <Image
          src="/images/logo-banner.png"
          alt="Logo Banner"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto m-0!"
        />
      </div>
      <div className="px-8 py-7  relative z-20">
        <h3 className="m-0!">Quick Start</h3>
        <p>
          Browse and effortlessly copy-paste from over 800+ components and
          templates.
        </p>
      </div>
    </div>
  );
}
