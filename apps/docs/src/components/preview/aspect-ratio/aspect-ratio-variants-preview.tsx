import { AspectRatio } from "@/registry/core/aspect-ratio";

export default function AspectRatioVariantsPreview() {
  const variants = [
    { ratio: "square", label: "Square (1:1)" },
    { ratio: "video", label: "Video (16:9)" },
    { ratio: "4/3", label: "4:3" },
    { ratio: "3/4", label: "3:4" },
    { ratio: "21/9", label: "21:9" },
    { ratio: "9/16", label: "9:16" },
    { ratio: "3/2", label: "3:2" },
    { ratio: "2/3", label: "2:3" }
  ] as const;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full p-4">
      {variants.map(({ ratio, label }) => (
        <div key={ratio} className="space-y-2">
          <AspectRatio
            ratio={ratio}
            className="rounded-lg overflow-hidden bg-primary-50"
          >
            <div className="size-full flex items-center justify-center text-neutral-900 font-medium text-sm">
              {label}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}
