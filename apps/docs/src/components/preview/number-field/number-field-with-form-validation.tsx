"use client";

import { Button } from "@/components/ui/Button";
import { FieldError, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@/registry/core/number-field";
import { Minus, Plus } from "@tailgrids/icons";
import { Form } from "react-aria-components";

export default function NumberFieldWithFormValidation() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const tickets = formData.get("tickets");

    if (tickets) {
      alert(`You have booked ${tickets} tickets!`);
    } else {
      alert("Please enter the number of tickets you want to book.");
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-4">
      <Form onSubmit={handleSubmit}>
        <NumberField
          className="w-full"
          name="tickets"
          minValue={1}
          maxValue={10}
          required
          validationBehavior="native"
          validate={v => {
            if (v == null) {
              return "This field is required";
            }
            if (v < 1) {
              return "Minimum 1 ticket required";
            }
            if (v > 10) {
              return "Maximum 10 tickets per booking";
            }
            return null;
          }}
        >
          <FieldLabel>Tickets</FieldLabel>

          <NumberFieldGroup>
            <Input placeholder="0" className="px-13" />
            <NumberFieldAction slot="decrement">
              <Minus />
            </NumberFieldAction>
            <NumberFieldAction slot="increment">
              <Plus />
            </NumberFieldAction>
          </NumberFieldGroup>

          <FieldError>
            Please enter a valid number of tickets (1-10).
          </FieldError>
        </NumberField>

        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </div>
  );
}
