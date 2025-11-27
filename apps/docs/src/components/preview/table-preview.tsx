import { Badge } from "@/registry/core/badge";
import {
  TableRoot,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/registry/core/table";

const DATA = [
  {
    product: "Laptop",
    price: "$999",
    inStock: 120
  },
  {
    product: "Mouse",
    price: "$29.99",
    inStock: 47
  },
  {
    product: "Keyboard",
    price: "$79.99",
    inStock: 7
  }
];

export default function TablePreview() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Basic Table */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Basic Table
        </h3>

        <TableRoot>
          <TableHeader>
            <TableRow className="bg-[#F9FAFB] [&>th]:text-[#374151]">
              <TableHead scope="col">Product</TableHead>
              <TableHead scope="col">Price</TableHead>
              <TableHead scope="col">Stock</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {DATA.map(item => (
              <TableRow key={item.price + item.product}>
                <TableCell
                  scope="row"
                  className="text-sm font-medium text-[#374151]"
                >
                  {item.product}
                </TableCell>

                <TableCell className="text-sm font-medium">
                  {item.price}
                </TableCell>

                <TableCell>
                  <Badge color={item.inStock < 10 ? "warning" : "success"}>
                    {item.inStock < 10 ? "Low Stock" : "In Stock"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </div>

      {/* Full Bleed */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Basic Table
        </h3>

        <TableRoot fullBleed>
          <TableHeader>
            <TableRow className="[&>th]:text-[#1F2937] [&>th]:font-semibold">
              <TableHead scope="col">Product</TableHead>
              <TableHead scope="col">Price</TableHead>
              <TableHead scope="col">Stock</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {DATA.map(item => (
              <TableRow key={item.price + item.product}>
                <TableCell
                  scope="row"
                  className="text-sm font-medium text-[#374151]"
                >
                  {item.product}
                </TableCell>

                <TableCell className="text-sm font-medium">
                  {item.price}
                </TableCell>

                <TableCell>
                  <Badge color={item.inStock < 10 ? "warning" : "success"}>
                    {item.inStock < 10 ? "Low Stock" : "In Stock"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </div>
    </div>
  );
}
