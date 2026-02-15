import { Card, CardContent, CardHeader } from "@/registry/core/card";
import Image from "next/image";

export default function CardArticlePreview() {
  return (
    <Card className="w-full max-w-full md:max-w-xs bg-white-100 gap-0">
      {/* Profile Header */}
      <CardHeader className="pt-5 pb-3">
        <div className="flex items-center gap-3">
          <Image
            src="/docs/images/avatar/avatar-2.webp"
            alt="Brooklyn Simmons"
            className="size-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <div>
            <h3 className="text-base font-semibold text-title-50 leading-5">
              Ahmed Tusar
            </h3>
            <p className="text-sm text-text-100 leading-5">Tech Enthusiast</p>
          </div>
        </div>
      </CardHeader>

      {/* Beach Image */}
      <div className="w-full h-40 overflow-hidden px-5">
        <Image
          src="/docs/images/demo/thumbnail.webp"
          alt="Beach scene with boat"
          className="w-full h-full object-cover rounded-lg"
          width={400}
          height={250}
        />
      </div>

      {/* Article Content */}
      <CardContent className="p-5">
        <h4 className="text-lg font-bold text-title-50 leading-6">
          The Sun Also Rises by Ernest Hemingway
        </h4>
        <p className="mt-3 text-sm text-text-100 leading-6 -tracking-[0.2px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </CardContent>
    </Card>
  );
}
