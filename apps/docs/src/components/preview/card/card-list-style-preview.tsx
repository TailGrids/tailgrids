"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/registry/core/card";
import { CheckCircle1, StarFatFalling } from "@tailgrids/icons";

export default function CardListStylePreview() {
  return (
    <Card className="md:max-w-115 w-full rounded-2xl gap-7">
      <CardHeader className="flex flex-col items-center pt-10 px-9">
        <div className="mb-5 text-warning-500">
          <StarFatFalling size={40} strokeWidth={1.5} />
        </div>
        <CardTitle className="text-center text-xl md:text-2xl font-bold text-title-50 mb-0">
          What Is the Importance of Social Media in Today's World?
        </CardTitle>
      </CardHeader>

      <CardContent className="px-8 pb-8">
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <div className="text-green-600 mt-1 shrink-0">
              <CheckCircle1 className="size-5 " />
            </div>
            <div>
              <h4 className="text-base font-semibold text-title-50 mb-1 -tracking-[0.2px]">
                Facebook
              </h4>
              <p className="text-base text-text-100 leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-green-600 mt-1 shrink-0">
              <CheckCircle1 className="size-5 " />
            </div>
            <div>
              <h4 className="text-base font-semibold text-title-50 mb-1 -tracking-[0.2px]">
                Instagram
              </h4>
              <p className="text-base text-text-100 leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-8 pb-8">
        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white-100 font-medium text-base py-3 rounded-lg transition-colors">
          Got it
        </button>
      </CardFooter>
    </Card>
  );
}
