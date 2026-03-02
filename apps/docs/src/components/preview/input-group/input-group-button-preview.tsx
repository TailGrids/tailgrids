import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "@/registry/core/input-group";
import { Eye, Send4, Xmark } from "@tailgrids/icons";

export default function InputGroupButtonPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-4">
      {/* Single Icon Button */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Password Visibility</label>
        <InputGroup>
          <InputGroupInput type="password" defaultValue="secretpassword123" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton aria-label="Show password" className="w-fit px-0">
              <Eye />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Button with Text */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Newsletter Subscribe</label>
        <InputGroup>
          <InputGroupInput placeholder="Enter your email" type="email" />
          <InputGroupAddon align="inline-end" className="px-0">
            <InputGroupButton
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-full rounded-md px-3"
            >
              Subscribe
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Multiple Buttons */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Chat Message</label>
        <InputGroup>
          <InputGroupInput placeholder="Type a message..." />
          <InputGroupAddon align="inline-end">
            <div className="flex items-center gap-1.5">
              <InputGroupButton className="text-error px-0" aria-label="Clear">
                <Xmark className="size-4" />
              </InputGroupButton>
              <InputGroupButton className="text-primary px-0" aria-label="Send">
                <Send4 className="size-4" />
              </InputGroupButton>
            </div>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
