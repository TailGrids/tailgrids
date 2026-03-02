import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea
} from "@/registry/core/input-group";
import { Microphone1, Paperclip2, Send4 } from "@tailgrids/icons";

export default function InputGroupTextareaPreview() {
  return (
    <div className="w-full max-w-lg">
      <InputGroup className=" py-1.5 px-2 flex-col items-stretch shadow-sm transition-all focus-within:shadow-md hover:border-base-400">
        <InputGroupTextarea
          placeholder="Ask AI anything..."
          className="min-h-22 resize-none py-2.5 text-sm"
        />
        <InputGroupAddon
          align="block-end"
          className="flex justify-between items-center gap-1 pb-1.5 px-1"
        >
          <InputGroupButton
            size="icon-sm"
            aria-label="Add attachment"
            className="text-base-400 hover:text-title-100 hover:bg-base-200"
          >
            <Paperclip2 className="h-5 w-5" />
          </InputGroupButton>

          <div>
            <InputGroupButton
              size="icon-sm"
              aria-label="Voice input"
              className="text-base-400 hover:text-title-100 hover:bg-base-200 transition-colors"
            >
              <Microphone1 className="h-5 w-5" />
            </InputGroupButton>

            <InputGroupButton
              size="icon-sm"
              aria-label="Voice input"
              className="text-base-400 hover:text-title-100 hover:bg-base-200 transition-colors"
            >
              <Send4 className="h-5 w-5" />
            </InputGroupButton>
          </div>
        </InputGroupAddon>
      </InputGroup>

      <div className="text-center text-xs text-base-400 px-4 mt-3">
        AI can make mistakes. Consider verifying important information.
      </div>
    </div>
  );
}
