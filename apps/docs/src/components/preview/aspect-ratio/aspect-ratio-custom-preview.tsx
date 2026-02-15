import { AspectRatio } from "@/registry/core/aspect-ratio";

export default function AspectRatioCustomPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full p-4">
      <div className="w-full max-w-2xl space-y-2">
        <AspectRatio
          customRatio={2.35 / 1}
          className="rounded-lg overflow-hidden"
        >
          <div className="size-full flex items-center justify-center text-neutral-900 font-medium text-sm bg-primary-50">
            Custom Ratio: 2.35:1 (Cinematic Widescreen)
          </div>
        </AspectRatio>
      </div>
    </div>
  );
}
