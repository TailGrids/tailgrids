"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "@/registry/core/input-group";
import { Eye, EyeDisabled, Send4, Xmark } from "@tailgrids/icons";
import { useState } from "react";

export default function InputGroupButtonPreview() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-4">
      {/* Single Icon Button */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Password Visibility</label>
        <InputGroup>
          <InputGroupInput
            type={showPassword ? "text" : "password"}
            defaultValue="secretpassword123"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Show password"
              className="w-fit px-0"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeDisabled /> : <Eye />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Button with Text */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Newsletter Subscribe</label>
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-full rounded-md px-3"
              onClick={() => {
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
      </div>

      {/* Multiple Buttons */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Chat Message</label>
        <InputGroup>
          <InputGroupInput
            placeholder="Type a message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <InputGroupAddon align="inline-end">
            <div className="flex items-center gap-1.5">
              {message && (
                <InputGroupButton
                  className="text-error px-0"
                  aria-label="Clear"
                  onClick={() => setMessage("")}
                >
                  <Xmark className="size-4" />
                </InputGroupButton>
              )}
              <InputGroupButton
                className="text-primary px-0"
                aria-label="Send"
                onClick={() => {
                  if (message) {
                    alert(`Message sent: ${message}`);
                    setMessage("");
                  }
                }}
              >
                <Send4 className="size-4" />
              </InputGroupButton>
            </div>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
