import { AspectRatio } from "@/registry/core/aspect-ratio";
import Image from "next/image";

export default function AspectRatioImagePreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4">
      <div className="space-y-2">
        <AspectRatio ratio="video" className="rounded-lg overflow-hidden">
          <Image
            src="/docs/images/demo/building-2.webp"
            alt="Landscape image"
            className="size-full object-cover"
            fill
          />
        </AspectRatio>
        <p className="text-xs text-center text-text-100">16:9 Landscape</p>
      </div>

      <div className="space-y-2">
        <AspectRatio ratio="square" className="rounded-lg overflow-hidden">
          <Image
            src="/docs/images/demo/building-2.webp"
            alt="Square image"
            className="size-full object-cover"
            fill
          />
        </AspectRatio>
        <p className="text-xs text-center text-text-100">1:1 Square</p>
      </div>
    </div>
  );
}
