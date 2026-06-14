"use client";

import { Button } from "@/registry/core/button";
import { Description } from "@/registry/core/description";
import { FieldError } from "@/registry/core/field";
import { Label } from "@/registry/core/label";
import { TextArea } from "@/registry/core/text-area";
import { TextField } from "@/registry/core/text-field";
import { FormEvent, useState } from "react";
import { Form } from "react-aria-components";

export default function TextAreaWithValidationPreview() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
    if (message.trim().length >= 12) {
      setMessage("");
    }
  };

  return (
    <Form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
      <TextField
        name="message"
        required
        validate={value =>
          value.trim().length < 12
            ? "Please enter at least 12 characters."
            : null
        }
      >
        <Label>Message</Label>
        <TextArea
          rows={5}
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
          placeholder="Tell us what happened..."
        />
        <Description>
          Add enough detail so we can respond with the right context.
        </Description>
        <FieldError>
          {validation => validation.validationErrors.join(" ")}
        </FieldError>
      </TextField>

      {submitted && (
        <div className="text-sm font-medium text-green-600">
          Form submitted successfully!
        </div>
      )}

      <Button type="submit">Submit</Button>
    </Form>
  );
}
