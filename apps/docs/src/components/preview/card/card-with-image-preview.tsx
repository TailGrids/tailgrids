import { Badge } from "@/registry/core/badge";
import { Card } from "@/registry/core/card";
import Image from "next/image";

export default function CardArticlePreview() {
  return (
    <Card className="relative w-full max-w-85 h-112.5 overflow-hidden rounded-[20px] border-none">
      <Image
        src="/docs/images/demo/google-pay.webp"
        alt="Google Pay"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Overlay Content */}
      <div className="absolute left-2 right-2 bottom-2">
        <div className="p-6 rounded-xl bg-[rgba(3,7,18,0.30)] backdrop-blur-lg shadow-lg">
          <Badge className="px-2.5 bg-primary-600 text-white border-0 mb-3 hover:bg-primary-600">
            Design
          </Badge>
          <h3 className="text-xl font-bold leading-normal text-white">
            Everything you need to know About UI/UX Design.
          </h3>
        </div>
      </div>
    </Card>
  );
}
