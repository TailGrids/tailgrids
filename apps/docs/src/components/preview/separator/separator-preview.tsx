import { Separator } from "@/registry/core/separator";

export default function SeparatorPreview() {
  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none text-title-50">
          Tailgrids Primitives
        </h4>
        <p className="text-sm text-text-50">
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm text-text-50">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
