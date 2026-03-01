"use client";

import { Label } from "@/registry/core/label";
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupError,
  RadioGroupField,
  RadioGroupItem,
  RadioGroupLabel
} from "@/registry/core/radio-group";
import { useState } from "react";

export function RadioGroupDemo() {
  const [basicValue, setBasicValue] = useState("option-one");
  const [cardValue, setCardValue] = useState("individual");
  const [horizontalValue, setHorizontalValue] = useState("standard");
  const [disabledValue, setDisabledValue] = useState("option-one");
  const [invalidValue, setInvalidValue] = useState("");

  return (
    <div className="space-y-8 p-6 max-w-2xl">
      <div>
        <h2 className="text-lg font-semibold mb-4">Basic Radio Group</h2>
        <RadioGroup value={basicValue} onChange={setBasicValue}>
          <RadioGroupItem value="option-one">Option One</RadioGroupItem>
          <RadioGroupItem value="option-two">Option Two</RadioGroupItem>
          <RadioGroupItem value="option-three">Option Three</RadioGroupItem>
        </RadioGroup>
        <p className="text-sm text-text-200 mt-2">Selected: {basicValue}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">
          Radio Group with Descriptions
        </h2>
        <RadioGroup value={cardValue} onChange={setCardValue}>
          <RadioGroupItem
            value="individual"
            description="For individuals and small teams"
            variant="card"
          >
            Individual
          </RadioGroupItem>
          <RadioGroupItem
            value="business"
            description="For growing businesses"
            variant="card"
          >
            Business
          </RadioGroupItem>
          <RadioGroupItem
            value="enterprise"
            description="For large teams and enterprises"
            variant="card"
          >
            Enterprise
          </RadioGroupItem>
        </RadioGroup>
        <p className="text-sm text-text-200 mt-2">Selected: {cardValue}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Horizontal Radio Group</h2>
        <RadioGroup
          value={horizontalValue}
          onChange={setHorizontalValue}
          orientation="horizontal"
          spacing="lg"
        >
          <RadioGroupItem value="compact">Compact</RadioGroupItem>
          <RadioGroupItem value="standard">Standard</RadioGroupItem>
          <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
        </RadioGroup>
        <p className="text-sm text-text-200 mt-2">
          Selected: {horizontalValue}
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">
          Radio Group Field with Label
        </h2>
        <RadioGroupField>
          <RadioGroupLabel>
            Notification Preferences
            <span className="text-red-500 ml-1">*</span>
          </RadioGroupLabel>
          <RadioGroupDescription>
            Choose how you want to receive notifications
          </RadioGroupDescription>
          <RadioGroup value={basicValue} onChange={setBasicValue}>
            <RadioGroupItem value="email">Email notifications</RadioGroupItem>
            <RadioGroupItem value="push">Push notifications</RadioGroupItem>
            <RadioGroupItem value="sms">SMS notifications</RadioGroupItem>
            <RadioGroupItem value="none">No notifications</RadioGroupItem>
          </RadioGroup>
        </RadioGroupField>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Disabled Radio Group</h2>
        <RadioGroup
          value={disabledValue}
          onChange={setDisabledValue}
          isDisabled
        >
          <RadioGroupItem value="option-one">
            Disabled Option One
          </RadioGroupItem>
          <RadioGroupItem value="option-two">
            Disabled Option Two
          </RadioGroupItem>
        </RadioGroup>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Invalid Radio Group</h2>
        <RadioGroupField>
          <RadioGroupLabel>Payment Method</RadioGroupLabel>
          <RadioGroupDescription>
            Select your preferred payment method
          </RadioGroupDescription>
          <RadioGroup
            value={invalidValue}
            onChange={setInvalidValue}
            aria-invalid={true}
          >
            <RadioGroupItem value="credit-card">Credit Card</RadioGroupItem>
            <RadioGroupItem value="paypal">PayPal</RadioGroupItem>
            <RadioGroupItem value="bank-transfer">Bank Transfer</RadioGroupItem>
          </RadioGroup>
          <RadioGroupError>Please select a payment method</RadioGroupError>
        </RadioGroupField>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Different Sizes</h2>
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium mb-2 block">Small Size</Label>
            <RadioGroup value="small">
              <RadioGroupItem value="small" size="sm">
                Small Option
              </RadioGroupItem>
              <RadioGroupItem value="small2" size="sm">
                Another Small
              </RadioGroupItem>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">
              Medium Size (Default)
            </Label>
            <RadioGroup value="medium">
              <RadioGroupItem value="medium">Medium Option</RadioGroupItem>
              <RadioGroupItem value="medium2">Another Medium</RadioGroupItem>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Large Size</Label>
            <RadioGroup value="large">
              <RadioGroupItem value="large" size="lg">
                Large Option
              </RadioGroupItem>
              <RadioGroupItem value="large2" size="lg">
                Another Large
              </RadioGroupItem>
            </RadioGroup>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Custom Styling</h2>
        <RadioGroup
          value="custom"
          className="bg-linear-to-r from-blue-50 to-purple-50 p-4 rounded-lg"
        >
          <RadioGroupItem
            value="custom"
            variant="outline"
            className="bg-white/80 backdrop-blur"
          >
            Custom Styled Option
          </RadioGroupItem>
          <RadioGroupItem
            value="custom2"
            variant="outline"
            className="bg-white/80 backdrop-blur"
          >
            Another Custom Option
          </RadioGroupItem>
        </RadioGroup>
      </div>
    </div>
  );
}
