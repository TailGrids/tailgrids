"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/core/radio-group";
import { useState } from "react";

export function RadioGroupCustomPreview() {
  const [theme, setTheme] = useState("ocean");
  const [layout, setLayout] = useState("grid");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium text-text-700 mb-3">
          Theme Selection with Gradient Background
        </h3>
        <RadioGroup
          value={theme}
          onChange={setTheme}
          className="bg-linear-to-r from-blue-50 via-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200"
        >
          <RadioGroupItem
            value="ocean"
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-blue-300 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🌊</span>
              </div>
              <div>
                <div className="font-semibold text-blue-900">Ocean Theme</div>
                <div className="text-sm text-blue-600">
                  Calm and professional blue tones
                </div>
              </div>
            </div>
          </RadioGroupItem>
          <RadioGroupItem
            value="forest"
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-green-300 hover:border-green-400 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🌲</span>
              </div>
              <div>
                <div className="font-semibold text-green-900">Forest Theme</div>
                <div className="text-sm text-green-600">
                  Natural and refreshing green palette
                </div>
              </div>
            </div>
          </RadioGroupItem>
          <RadioGroupItem
            value="sunset"
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-orange-300 hover:border-orange-400 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🌅</span>
              </div>
              <div>
                <div className="font-semibold text-orange-900">
                  Sunset Theme
                </div>
                <div className="text-sm text-orange-600">
                  Warm and energetic sunset colors
                </div>
              </div>
            </div>
          </RadioGroupItem>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-text-700 mb-3">
          Layout Options with Custom Styling
        </h3>
        <RadioGroup
          value={layout}
          onChange={setLayout}
          orientation="horizontal"
          spacing="lg"
          className="bg-linear-to-r from-gray-50 to-gray-100 p-4 rounded-xl"
        >
          <RadioGroupItem
            value="grid"
            className="bg-white border-2 border-gray-300 rounded-xl p-4 hover:border-purple-400 hover:shadow-lg transition-all hover:scale-105"
          >
            <div>
              <div className="text-3xl mb-2">⚏</div>
              <div className="font-bold text-gray-800">Grid</div>
            </div>
          </RadioGroupItem>
          <RadioGroupItem
            value="list"
            className="bg-white border-2 border-gray-300 rounded-xl p-4 hover:border-purple-400 hover:shadow-lg transition-all hover:scale-105"
          >
            <div>
              <div className="text-3xl mb-2">☰</div>
              <div className="font-bold text-gray-800">List</div>
            </div>
          </RadioGroupItem>
          <RadioGroupItem
            value="cards"
            className="bg-white border-2 border-gray-300 rounded-xl p-4 hover:border-purple-400 hover:shadow-lg transition-all hover:scale-105"
          >
            <div>
              <div className="text-3xl mb-2">▦</div>
              <div className="font-bold text-gray-800">Cards</div>
            </div>
          </RadioGroupItem>
        </RadioGroup>
        <p className="text-sm text-text-200 mt-3">
          Selected layout:{" "}
          <span className="font-medium capitalize">{layout}</span>
        </p>
      </div>

      <div className="p-4 bg-linear-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-200">
        <p className="text-sm text-purple-800">
          <span className="font-semibold">💡 Tip:</span> These examples show how
          you can combine custom CSS classes, gradients, and transitions to
          create unique radio group designs that match your brand.
        </p>
      </div>
    </div>
  );
}
