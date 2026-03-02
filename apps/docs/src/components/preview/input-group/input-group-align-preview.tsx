import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "@/registry/core/input-group";

export default function InputGroupAlignPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-4">
      {/* Block Start */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Header Addon</label>
        <InputGroup className="flex-col overflow-hidden items-stretch">
          <InputGroupAddon
            align="block-start"
            className="w-full bg-base-200 justify-start py-2 border-b border-base-300 rounded-t-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-base-500">
              Format Message
            </span>
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Type your message here..."
            className="py-3 px-3"
          />
        </InputGroup>
      </div>

      {/* Block End */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Footer Actions</label>
        <InputGroup className="flex-col overflow-hidden items-stretch">
          <InputGroupInput
            placeholder="Add a comment..."
            className="py-3 px-3"
          />
          <InputGroupAddon
            align="block-end"
            className="w-full bg-base-200 justify-end py-1.5 px-3 border-t border-base-300 rounded-b-lg gap-3"
          >
            <span className="text-xs text-base-500 mr-auto">
              Supports Markdown
            </span>
            <InputGroupButton size="xs" className="px-0">
              Cancel
            </InputGroupButton>
            <InputGroupButton
              size="xs"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-0"
            >
              Comment
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
