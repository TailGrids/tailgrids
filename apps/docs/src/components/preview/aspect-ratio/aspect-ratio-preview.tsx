import { AspectRatio } from "@/registry/core/aspect-ratio";

export default function AspectRatioPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full p-4">
      <AspectRatio
        ratio="video"
        className="max-w-md w-full rounded-lg overflow-hidden"
      >
        <div className="size-full flex items-center justify-center text-title-50 font-medium text-sm bg-background-soft-400">
          Video (16:9)
        </div>
      </AspectRatio>
    </div>
  );
}
