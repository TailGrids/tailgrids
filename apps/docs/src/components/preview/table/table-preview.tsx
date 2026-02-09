import { Badge } from "@/registry/core/badge";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow
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
    <div className="w-full">
      <TableRoot>
        <TableHeader>
          <TableRow className="bg-background-soft-50 [&>th]:text-text-50">
            <TableHead scope="col">Product</TableHead>
            <TableHead scope="col">Price</TableHead>
            <TableHead scope="col">Stock</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map(item => (
            <TableRow key={item.price + item.product} className="text-sm">
              <TableCell
                scope="row"
                className="font-medium text-title-50 whitespace-nowrap"
              >
                {item.product}
              </TableCell>

              <TableCell className="font-semibold text-text-100 -tracking-[0.2px] whitespace-nowrap">
                {item.price}
              </TableCell>

              <TableCell>
                <Badge
                  color={item.inStock < 10 ? "warning" : "success"}
                  prefixIcon={
                    <span
                      className={`size-1.5 rounded-full ${
                        item.inStock < 10 ? "bg-warning-500" : "bg-success-500"
                      }`}
                    />
                  }
                >
                  {item.inStock < 10 ? "Low Stock" : "In Stock"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </div>
  );
}
