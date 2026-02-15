import { Card, CardContent, CardHeader } from "@/registry/core/card";
import Image from "next/image";

export default function CardWithAvatarPreview() {
  return (
    <Card className="w-full max-w-full md:max-w-xs gap-5">
      {/* Building Image */}
      <div className="w-full h-55 md:h-67 overflow-hidden rounded-t-2xl">
        <Image
          src="/docs/images/demo/building.webp"
          alt="Modern building architecture"
          className="w-full h-full object-cover"
          width={400}
          height={250}
        />
      </div>

      {/* Avatar Section */}
      <CardHeader className="pt-0">
        <div className="flex items-center gap-3">
          <Image
            src="/docs/images/avatar/avatar-1.webp"
            alt="Mosharof Chowdhury"
            className="size-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <div>
            <h3 className="text-base font-semibold text-title-50 leading-5">
              Mosharof Chowdhury
            </h3>
            <p className="text-sm text-text-100 leading-5">Enterpreneur</p>
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="mt-1 px-5 pb-5">
        <p className="text-sm text-text-100 leading-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </CardContent>
    </Card>
  );
}
