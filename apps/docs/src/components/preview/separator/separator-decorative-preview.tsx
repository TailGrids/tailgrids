import { Separator } from "@/registry/core/separator";

export default function SeparatorDecorativePreview() {
  return (
    <div className="w-full max-w-md space-y-8">
      {/* Decorative Separator */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Decorative (default)</h4>
        <p className="text-xs text-gray-500">
          Purely visual, hidden from screen readers
        </p>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Section One</p>
          <Separator />
          <p className="text-sm text-gray-600">Section Two</p>
        </div>
      </div>

      {/* Semantic Separator */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Semantic</h4>
        <p className="text-xs text-gray-500">
          Meaningful division, announced by screen readers
        </p>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-semibold text-gray-900">Article Title</p>
            <p className="text-sm text-gray-600">
              Article content goes here...
            </p>
          </div>
          <Separator />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Different Article
            </p>
            <p className="text-sm text-gray-600">
              Different article content...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
