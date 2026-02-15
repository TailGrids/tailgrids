import { Separator } from "@/registry/core/separator";

export default function SeparatorOrientationPreview() {
  return (
    <div className="w-full max-w-md space-y-8">
      {/* Horizontal Separator */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-title-50">Horizontal:</h4>
        <div className="space-y-2">
          <p className="text-sm text-text-50">Content above separator</p>
          <Separator orientation="horizontal" />
          <p className="text-sm text-text-50">Content below separator</p>
        </div>
      </div>

      {/* Vertical Separator */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-title-50">Vertical:</h4>
        <div className="flex h-16 items-center space-x-4">
          <div className="text-sm text-text-50">Left content</div>
          <Separator orientation="vertical" />
          <div className="text-sm text-text-50">Middle content</div>
          <Separator orientation="vertical" />
          <div className="text-sm text-text-50">Right content</div>
        </div>
      </div>
    </div>
  );
}
