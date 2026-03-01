"use client";

import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupError,
  RadioGroupField,
  RadioGroupItem,
  RadioGroupLabel
} from "@/registry/core/radio-group";
import { useState } from "react";

export function RadioGroupFieldPreview() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value) {
      setError("Please select a notification preference");
    }
  };

  return (
    <form className="max-w-md" onSubmit={handleSubmit}>
      <RadioGroupField className="pb-5" required>
        <RadioGroupLabel>
          Notification Preferences
          <span className="text-red-500 ml-1">*</span>
        </RadioGroupLabel>
        <RadioGroupDescription>
          Choose how you want to receive important updates
        </RadioGroupDescription>

        <RadioGroup
          value={value}
          onChange={handleChange}
          aria-invalid={!!error}
          className="mt-2"
        >
          <RadioGroupItem
            value="email"
            description="Receive updates via email"
            className="pt-4"
          >
            Email Notifications
          </RadioGroupItem>
          <RadioGroupItem
            value="push"
            description="Get instant browser notifications"
          >
            Push Notifications
          </RadioGroupItem>
          <RadioGroupItem value="sms" description="Receive text messages">
            SMS Notifications
          </RadioGroupItem>
        </RadioGroup>

        {error && <RadioGroupError>{error}</RadioGroupError>}
      </RadioGroupField>

      <button
        type="submit"
        className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
      >
        Trigger Validation Error
      </button>
    </form>
  );
}
