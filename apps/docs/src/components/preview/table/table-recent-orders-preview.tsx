import { Badge } from "@/registry/core/badge";
import { Input } from "@/registry/core/input";

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow
} from "@/registry/core/table";
import { Search } from "lucide-react";
import Image from "next/image";

const DATA = [
  {
    id: 1,
    product: "Macbook pro 13”",
    variants: "2 Variants",
    category: "Laptop",
    date: "Nov 23, 01:00 PM",
    price: "$2399.00",
    status: "Delivered",
    image: "/docs/images/products/product-1.webp"
  },
  {
    id: 2,
    product: "Apple Watch Ultra",
    variants: "1 Variants",
    category: "Watch",
    date: "Nov 22, 09:00 PM",
    price: "$879.00",
    status: "Pending",
    image: "/docs/images/products/product-2.webp"
  },
  {
    id: 3,
    product: "iPhone 15 Pro Max",
    variants: "2 Variants",
    category: "Smart Phone",
    date: "Oct 12, 03:54 PM",
    price: "$1869.00",
    status: "Delivered",
    image: "/docs/images/products/product-3.webp"
  },
  {
    id: 4,
    product: "iPad Pro 3rd Gen",
    variants: "2 Variants",
    category: "Electronics",
    date: "Sep 09, 02:00 AM",
    price: "$1699.00",
    status: "Canceled",
    image: "/docs/images/products/product-4.webp"
  },
  {
    id: 5,
    product: "Airpods Pro 2nd Gen",
    variants: "1 Variants",
    category: "Accessories",
    date: "Feb 35, 08:00 PM",
    price: "$240.00",
    status: "Delivered",
    image: "/docs/images/products/product-5.webp"
  }
];

export default function TableRecentOrdersPreview() {
  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-title-50">Recent Orders</h3>
        <div className="flex gap-2">
          <div className="relative">
            <Input
              placeholder="Search..."
              className="pl-8 pr-3 py-1.5 text-sm w-48 sm:w-64"
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-text-200" />
          </div>
          <button className="border rounded px-4 py-1.5 text-sm font-medium hover:bg-background-soft-50">
            See All
          </button>
        </div>
      </div>

      <TableRoot className="mb-1">
        <TableHeader>
          <TableRow className="border-b border-(--border-color-base-50)">
            <TableHead>Products</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map(item => (
            <TableRow
              key={item.id}
              className="text-sm border-b border-(--border-color-base-50) last:border-none"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="size-12.5 rounded-md border border-(--border-color-base-50) flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.product}
                      width={50}
                      height={50}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-title-50 whitespace-nowrap">
                      {item.product}
                    </div>
                    <div className="text-xs text-text-100 whitespace-nowrap">
                      {item.variants}
                    </div>
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-text-50 whitespace-nowrap">
                {item.category}
              </TableCell>

              <TableCell className="text-xs -tracking-[0.2px] text-text-100 whitespace-nowrap">
                {item.date}
              </TableCell>

              <TableCell className="font-semibold text-text-100 -tracking-[0.2px] whitespace-nowrap">
                {item.price}
              </TableCell>

              <TableCell>
                <Badge
                  color={
                    item.status === "Delivered"
                      ? "success"
                      : item.status === "Canceled"
                        ? "error"
                        : "warning"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </div>
  );
}
