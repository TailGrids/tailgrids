"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "@/registry/core/input-group";
import { Label } from "@/registry/core/label";
import { TextField } from "@/registry/core/text-field";
import { Eye, EyeDisabled, Send4, Xmark } from "@tailgrids/icons";
import { useState } from "react";

export default function InputGroupButtonPreview() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-4">
      {/* Single Icon Button */}
      <TextField className="flex flex-col gap-2">
        <Label className="text-sm text-title-50 font-medium">
          Password Visibility
        </Label>

        <InputGroup>
          <InputGroupInput
            placeholder="secretpassword123"
            type={showPassword ? "text" : "password"}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Show password"
              className="w-fit px-0 hover:bg-transparent opacity-75 data-hovered:opacity-100"
              onPress={() => setShowPassword(current => !current)}
            >
              {showPassword ? <EyeDisabled /> : <Eye />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </TextField>

      {/* Button with Text */}
      <TextField className="flex flex-col gap-2">
        <Label className="text-sm text-title-50 font-medium">
          Newsletter Subscribe
        </Label>
        <InputGroup>
          <InputGroupInput
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputGroupAddon align="inline-end" className="px-0">
            <InputGroupButton
              size="sm"
              className="px-3 hover:bg-transparent"
              onPress={() => {
                if (email) {
                  alert(`Subscribed with: ${email}`);
                  setEmail("");
                }
              }}
            >
              Subscribe
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </TextField>

      {/* Multiple Buttons */}
      <TextField className="flex flex-col gap-2">
        <Label className="text-sm text-title-50 font-medium">
          Chat Message
        </Label>
        <InputGroup>
          <InputGroupInput
            placeholder="Type a message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <InputGroupAddon align="inline-end" className="gap-1">
            {message && (
              <InputGroupButton
                className="opacity-75 p-0 size-6 [&>svg]:size-6! hover:bg-transparent hover:opacity-100!"
                aria-label="Clear"
                onPress={() => setMessage("")}
              >
                <Xmark />
              </InputGroupButton>
            )}

            <InputGroupButton
              iconOnly
              className="h-auto w-auto px-0 text-primary opacity-75 disabled:cursor-not-allowed hover:bg-transparent data-hovered:opacity-100"
              aria-label="Send"
              disabled={!message.trim()}
              onPress={() => {
                if (message) {
                  alert(`Message sent: ${message}`);
                  setMessage("");
                }
              }}
            >
              <Send4 className="size-4" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </TextField>
    </div>
  );
}
