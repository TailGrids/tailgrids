"use client";

import { Button } from "@/registry/core/button";
import {
  ComposedField,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel
} from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import { useRef, useState, type FormEvent } from "react";
import { Form } from "react-aria-components";

export default function FieldWithValidationPreview() {
  const [submitted, setSubmitted] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
    formRef.current?.reset();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validationBehavior="native"
      ref={formRef}
      className="flex flex-col items-center gap-6 w-full max-w-sm p-4"
    >
      <Field
        className="w-full"
        name="email"
        type="email"
        required
        validate={v =>
          !v
            ? "Email is required."
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
              ? "Please enter a valid email address."
              : null
        }
      >
        <FieldLabel>Email address</FieldLabel>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
        />

        <FieldDescription>We&apos;ll never share your email.</FieldDescription>

        <FieldError>
          {validation => validation.validationErrors.join(", ")}
        </FieldError>
      </Field>

      <ComposedField
        className="w-full"
        name="password"
        type="password"
        required
        label="Password"
        description="At least 8 characters."
        validate={v =>
          !v
            ? "Password is required."
            : v.length < 8
              ? "Password must be at least 8 characters."
              : null
        }
        errorMessage={validation => validation.validationErrors.join(", ")}
      >
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
        />
      </ComposedField>

      <ComposedField
        className="w-full"
        name="confirmPassword"
        type="password"
        required
        label="Confirm password"
        description="Re-enter your password."
        validate={v =>
          !v
            ? "Please confirm your password."
            : v !== passwordValue
              ? "Passwords do not match."
              : null
        }
        errorMessage={validation => validation.validationErrors.join(", ")}
      >
        <Input
          id="confirm-password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
        />
      </ComposedField>

      {submitted && (
        <div className="flex flex-col items-center gap-4 w-full max-w-sm p-4">
          <div className="text-sm font-medium text-green-600">
            Form submitted successfully!
          </div>
        </div>
      )}

      <Button type="submit" className="w-full">
        Create account
      </Button>
    </Form>
  );
}
