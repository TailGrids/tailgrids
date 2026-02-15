import { Button } from "@/registry/core/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/registry/core/card";

export default function CardPreview() {
  return (
    <Card className="w-full max-w-full md:max-w-md gap-0">
      <CardHeader>
        <CardTitle>Ready for Business Website Crafted by TailGrids</CardTitle>
      </CardHeader>
      <CardContent className="px-5 mt-3 mb-7">
        <p>
          TailGrids is a free and open-source collection of UI components for
          Tailwind CSS.
        </p>
      </CardContent>
      <CardFooter>
        <Button appearance="outline">Learn More</Button>
      </CardFooter>
    </Card>
  );
}
