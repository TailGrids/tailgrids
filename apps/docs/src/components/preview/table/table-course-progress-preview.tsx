import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow
} from "@/registry/core/table";
import { MenuKebab1 } from "@tailgrids/icons";
import Image from "next/image";

const DATA = [
  {
    id: 1,
    course: "UX Design Basics",
    instructor: "Tom Blake",
    progress: 100,
    date: "Jan 02, 2025",
    certificate: "Issued",
    image: "/docs/images/courses/course-1.webp"
  },
  {
    id: 2,
    course: "React Fundamentals",
    instructor: "Sara Khan",
    progress: 60,
    date: "Feb 20, 2025",
    certificate: null,
    image: "/docs/images/courses/course-2.webp"
  },
  {
    id: 3,
    course: "Motion Design",
    instructor: "Liam Patel",
    progress: 40,
    date: "Mar 01, 2025",
    certificate: null,
    image: "/docs/images/courses/course-3.webp"
  },
  {
    id: 4,
    course: "Figma for Beginners",
    instructor: "Olivia James",
    progress: 20,
    date: "Jan 30, 2025",
    certificate: null,
    image: "/docs/images/courses/course-4.webp"
  },
  {
    id: 5,
    course: "Webflow Mastery",
    instructor: "Daniel Green",
    progress: 70,
    date: "Dec 15, 2024",
    certificate: "Issued",
    image: "/docs/images/courses/course-5.webp"
  }
];

export default function TableCourseProgressPreview() {
  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-title-50">Course Progress</h3>
        <button className="p-2 hover:bg-background-soft-100 rounded-full">
          <MenuKebab1 className="h-5 w-5 text-text-100" />
        </button>
      </div>

      <TableRoot fullBleed>
        <TableHeader>
          <TableRow className="border-b border-(--border-color-base-100)">
            <TableHead className="min-w-60">Course Name</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead className="w-1/3">Progress</TableHead>
            <TableHead className="whitespace-nowrap">Enrolled Date</TableHead>
            <TableHead>Certificate</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {DATA.map(item => (
            <TableRow key={item.id} className="text-sm">
              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    width={50}
                    height={40}
                    src={item.image}
                    alt={item.course}
                    className="h-10 w-12.5 rounded-lg object-cover"
                  />
                  <span className="font-medium text-title-50 whitespace-nowrap">
                    {item.course}
                  </span>
                </div>
              </TableCell>

              <TableCell className="text-text-50 whitespace-nowrap">
                {item.instructor}
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-3 min-w-50">
                  <div className="flex-1 bg-background-soft-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-primary-600 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="font-semibold text-text-100 -tracking-[0.2px] min-w-[3ch]">
                    {item.progress}%
                  </span>
                </div>
              </TableCell>

              <TableCell className="text-xs -tracking-[0.2px] text-text-100 whitespace-nowrap">
                {item.date}
              </TableCell>

              <TableCell>
                {item.certificate ? (
                  <span className="text-text-50 whitespace-nowrap">
                    {item.certificate}
                  </span>
                ) : (
                  <span className="text-text-200">—</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </div>
  );
}
