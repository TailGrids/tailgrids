import AccordionImage from "@/assets/skeleton-image/accordion.png";
import AlertImage from "@/assets/skeleton-image/alert.png";
import AvatarImage from "@/assets/skeleton-image/avatar.png";
import BadgeImage from "@/assets/skeleton-image/badge.png";
import BreadcrumbImage from "@/assets/skeleton-image/breadcrumb.png";
import ButtonImage from "@/assets/skeleton-image/button.png";
import CheckboxImage from "@/assets/skeleton-image/checkbox.png";
import DatePickerImage from "@/assets/skeleton-image/date-picker.png";
import DropdownImage from "@/assets/skeleton-image/dropdown.png";
import InputImage from "@/assets/skeleton-image/input.png";
import ListImage from "@/assets/skeleton-image/list.png";
import PaginationImage from "@/assets/skeleton-image/paginations.png";
import PopoverImage from "@/assets/skeleton-image/popover.png";
import ProgressImage from "@/assets/skeleton-image/progress.png";
import RadioImage from "@/assets/skeleton-image/radio.png";
import SkeletonImage from "@/assets/skeleton-image/skeleton.png";
import SpinnerImage from "@/assets/skeleton-image/spinners.png";
import SwitchImage from "@/assets/skeleton-image/switch.png";
import TableImage from "@/assets/skeleton-image/table.png";
import TabsImage from "@/assets/skeleton-image/tabs.png";
import TimePickerImage from "@/assets/skeleton-image/time-picker.png";
import ToastImage from "@/assets/skeleton-image/toast.png";
import TooltipImage from "@/assets/skeleton-image/tooltip.png";
import { StaticImageData } from "next/image";

export const componentImages: Record<string, StaticImageData> = {
  accordion: AccordionImage,
  alert: AlertImage,
  avatar: AvatarImage,
  badge: BadgeImage,
  breadcrumbs: BreadcrumbImage,
  button: ButtonImage,
  "button-group": ButtonImage, // Fallback
  checkbox: CheckboxImage,
  "date-picker": DatePickerImage,
  dropdown: DropdownImage,
  input: InputImage,
  link: ButtonImage, // Fallback
  list: ListImage,
  "otp-input": InputImage, // Fallback
  pagination: PaginationImage,
  popover: PopoverImage,
  progress: ProgressImage,
  "radio-input": RadioImage,
  skeleton: SkeletonImage,
  "social-button": ButtonImage, // Fallback
  spinner: SpinnerImage,
  table: TableImage,
  tabs: TabsImage,
  "text-area": InputImage, // Fallback
  "time-picker": TimePickerImage,
  toast: ToastImage,
  toggle: SwitchImage,
  tooltip: TooltipImage
};
