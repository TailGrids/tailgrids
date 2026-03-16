import AccordionImage from "@/assets/skeleton-image/accordion.png";
import AlertDialogImage from "@/assets/skeleton-image/alert-dialog.png";
import AlertImage from "@/assets/skeleton-image/alert.png";
import AspectRatioImage from "@/assets/skeleton-image/aspect-ratio.png";
import AvatarImage from "@/assets/skeleton-image/avatar.png";
import BadgeImage from "@/assets/skeleton-image/badge.png";
import BreadcrumbImage from "@/assets/skeleton-image/breadcrumb.png";
import ButtonGroupImage from "@/assets/skeleton-image/button-group.png";
import ButtonImage from "@/assets/skeleton-image/button.png";
import CardImage from "@/assets/skeleton-image/card.png";
import CarouselImage from "@/assets/skeleton-image/carousel.png";
import ChartImage from "@/assets/skeleton-image/chart.png";
import CheckboxImage from "@/assets/skeleton-image/checkbox.png";
import ComboboxImage from "@/assets/skeleton-image/combobox.png";
import CommandImage from "@/assets/skeleton-image/command.png";
import ContextMenuImage from "@/assets/skeleton-image/context-menu.png";
import DatePickerImage from "@/assets/skeleton-image/date-picker.png";
import DialogImage from "@/assets/skeleton-image/dialog.png";
import DrawerImage from "@/assets/skeleton-image/drawer.png";
import DropdownImage from "@/assets/skeleton-image/dropdown.png";
import FieldImage from "@/assets/skeleton-image/field.png";
import HoverCardImage from "@/assets/skeleton-image/hover-card.png";
import InputImage from "@/assets/skeleton-image/input.png";
import LabelImage from "@/assets/skeleton-image/label.png";
import LinkImage from "@/assets/skeleton-image/link.png";
import ListImage from "@/assets/skeleton-image/list.png";
import NavigationMenuImage from "@/assets/skeleton-image/navigation-menu.png";
import OtpInputImage from "@/assets/skeleton-image/otp-input.png";
import PaginationImage from "@/assets/skeleton-image/paginations.png";
import PopoverImage from "@/assets/skeleton-image/popover.png";
import ProgressImage from "@/assets/skeleton-image/progress.png";
import RadioImage from "@/assets/skeleton-image/radio.png";
import ResizableImage from "@/assets/skeleton-image/resizable.png";
import ScrollAreaImage from "@/assets/skeleton-image/scroll-area.png";
import SeparatorImage from "@/assets/skeleton-image/separator.png";
import SheetImage from "@/assets/skeleton-image/sheet.png";
import SkeletonImage from "@/assets/skeleton-image/skeleton.png";
import SliderImage from "@/assets/skeleton-image/slider.png";
import SocialButtonImage from "@/assets/skeleton-image/social-button.png";
import SpinnerImage from "@/assets/skeleton-image/spinners.png";
import SwitchImage from "@/assets/skeleton-image/switch.png";
import TableImage from "@/assets/skeleton-image/table.png";
import TabsImage from "@/assets/skeleton-image/tabs.png";
import TextAreaImage from "@/assets/skeleton-image/text-area.png";
import TimePickerImage from "@/assets/skeleton-image/time-picker.png";
import ToastImage from "@/assets/skeleton-image/toast.png";
import TooltipImage from "@/assets/skeleton-image/tooltip.png";
import { StaticImageData } from "next/image";

export const componentImages: Record<string, StaticImageData> = {
  accordion: AccordionImage,
  alert: AlertImage,
  "alert-dialog": AlertDialogImage,
  "aspect-ratio": AspectRatioImage,
  avatar: AvatarImage,
  badge: BadgeImage,
  breadcrumbs: BreadcrumbImage,
  button: ButtonImage,
  "button-group": ButtonGroupImage,
  card: CardImage,
  carousel: CarouselImage,
  chart: ChartImage,
  checkbox: CheckboxImage,
  collapsible: AccordionImage,
  "context-menu": ContextMenuImage,
  combobox: ComboboxImage,
  command: CommandImage,
  "date-picker": DatePickerImage,
  dialog: DialogImage,
  drawer: DrawerImage,
  dropdown: DropdownImage,
  field: FieldImage,
  "hover-card": HoverCardImage,
  label: LabelImage,
  input: InputImage,
  "input-group": InputImage, // Fallback
  link: LinkImage,
  list: ListImage,
  menubar: NavigationMenuImage, // Fallback
  "native-select": DropdownImage, // Fallback
  "navigation-menu": NavigationMenuImage,
  "otp-input": OtpInputImage,
  pagination: PaginationImage,
  popover: PopoverImage,
  progress: ProgressImage,
  "radio-input": RadioImage,
  resizable: ResizableImage,
  "scroll-area": ScrollAreaImage,
  select: DropdownImage, // Fallback
  separator: SeparatorImage,
  sheet: SheetImage,
  skeleton: SkeletonImage,
  slider: SliderImage,
  "social-button": SocialButtonImage,
  spinner: SpinnerImage,
  table: TableImage,
  tabs: TabsImage,
  "text-area": TextAreaImage,
  "time-picker": TimePickerImage,
  toast: ToastImage,
  toggle: SwitchImage,
  tooltip: TooltipImage
};
