"use client";

import { buttonStyles } from "@/registry/core/button";
import { cn } from "@/utils/cn";
import { ChevronDown, ChevronLeft, ChevronRight } from "@tailgrids/icons";
import { cva } from "class-variance-authority";
import {
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ComponentProps
} from "react";
import {
  Button as AriaButton,
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody as AriaCalendarGridBody,
  CalendarGridHeader as AriaCalendarGridHeader,
  Heading as AriaHeading,
  CalendarCellRenderProps,
  CalendarHeaderCell,
  CalendarStateContext,
  ListBox,
  ListBoxItem,
  Popover,
  useLocale,
  type CalendarCellProps as AriaCalendarCellProps,
  type CalendarProps as AriaCalendarProps,
  type DateValue
} from "react-aria-components";

const calendarStyles = cva(
  "flex w-full flex-col rounded-3xl border border-base-100 bg-background-50 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-5"
);

export interface CalendarProps<T extends DateValue> extends Omit<
  AriaCalendarProps<T>,
  "visibleDuration" | "isDisabled" | "isReadOnly"
> {
  className?: string;
  disabled?: boolean;
  readonly?: boolean;
}

export function Calendar<T extends DateValue>({
  className,
  children,
  disabled,
  readonly,
  ...props
}: CalendarProps<T>) {
  return (
    <AriaCalendar
      {...props}
      className={cn(calendarStyles(), className)}
      isDisabled={disabled}
      isReadOnly={readonly}
    >
      {children}
    </AriaCalendar>
  );
}

const calendarHeaderStyles = cva("mb-4 flex items-center gap-2 px-1");

type CalendarHeaderProps = ComponentProps<"header">;

export function CalendarHeader({ className, ...props }: CalendarHeaderProps) {
  return (
    <header className={cn(calendarHeaderStyles(), className)} {...props}>
      {props.children}
    </header>
  );
}

type NavButtonProps = ComponentProps<typeof AriaButton> & {
  slot: "previous" | "next";
};

export function NavButton({ slot, className, ...props }: NavButtonProps) {
  const { direction } = useLocale();

  return (
    <AriaButton
      slot={slot}
      type="button"
      className={cn(
        buttonStyles({
          variant: "ghost",
          iconOnly: true,
          size: "sm"
        }),
        "size-9 shrink-0 rounded-full text-text-50",
        className
      )}
      aria-label={slot === "previous" ? "Previous month" : "Next month"}
      {...props}
    >
      {slot === "previous" ? (
        direction === "rtl" ? (
          <ChevronRight aria-hidden />
        ) : (
          <ChevronLeft aria-hidden />
        )
      ) : direction === "rtl" ? (
        <ChevronLeft aria-hidden />
      ) : (
        <ChevronRight aria-hidden />
      )}
    </AriaButton>
  );
}

type YearPickerProps = {
  className?: string;
};

export function CalendarYearPicker({ className }: YearPickerProps) {
  const state = useContext(CalendarStateContext);
  const { locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);

  const currentMonth = state?.focusedDate.month ?? new Date().getMonth() + 1;
  const currentYear = state?.focusedDate.year ?? new Date().getFullYear();

  const years = useMemo(() => {
    const yearStart = currentYear - 20;
    return Array.from({ length: 40 }, (_, index) => yearStart + index);
  }, [currentYear]);

  const monthFormatter = useMemo(
    () => new Intl.DateTimeFormat(locale, { month: "short" }),
    [locale]
  );

  const currentMonthLabel = monthFormatter.format(
    new Date(Date.UTC(2000, currentMonth - 1, 1))
  );

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      const listboxElement = listboxRef.current;
      const selectedItem = listboxElement?.querySelector<HTMLElement>(
        "[data-selected='true']"
      );

      if (!listboxElement || !selectedItem) {
        return;
      }

      const targetScrollTop =
        selectedItem.offsetTop -
        listboxElement.clientHeight / 2 +
        selectedItem.clientHeight / 2;

      listboxElement.scrollTop = Math.max(0, targetScrollTop);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [isOpen, currentYear]);

  if (!state) {
    return;
  }

  const focusedDate = state.focusedDate;
  const currentDay = focusedDate.day;
  const clampFocusedDateToYear = (year: number) => {
    const safeDate = focusedDate.set({ day: 1, year });
    const maxDay = safeDate.calendar.getDaysInMonth(safeDate);
    return safeDate.set({ day: Math.min(currentDay, maxDay) });
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Select year"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen(open => !open);
        }}
        className={cn(
          buttonStyles({
            variant: "ghost",
            iconOnly: false,
            size: "sm"
          }),
          "h-10 min-w-24 justify-between rounded-full border border-base-100 bg-white-100 px-3 text-sm font-medium text-title-50 hover:bg-white-100 hover:text-title-50 focus:ring-button-primary-focus-ring sm:h-11",
          className
        )}
      >
        <span>
          {currentMonthLabel} {currentYear}
        </span>
        <ChevronDown aria-hidden className="size-4 shrink-0 text-text-100" />
      </button>

      <Popover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        triggerRef={triggerRef}
        placement="bottom"
        offset={8}
        className="w-56 overflow-hidden rounded-xl border border-base-100 bg-dropdown-background p-0 shadow-md"
      >
        <ListBox
          ref={listboxRef}
          aria-label="Select year"
          autoFocus
          selectionMode="single"
          selectedKeys={[String(currentYear)]}
          disallowEmptySelection
          shouldFocusWrap
          onSelectionChange={keys => {
            if (keys === "all") {
              return;
            }

            const selectedYear = Number([...keys][0]);
            if (Number.isNaN(selectedYear)) {
              return;
            }

            state.setFocusedDate(clampFocusedDateToYear(selectedYear));
            setIsOpen(false);
          }}
          className="max-h-60 overflow-y-auto p-1.5 outline-none"
        >
          {years.map(year => (
            <ListBoxItem
              key={year}
              id={String(year)}
              textValue={String(year)}
              className={cn(
                "flex w-full justify-between rounded-md px-3 py-2 text-left text-sm outline-hidden",
                "data-[selected=true]:bg-dropdown-hover-background data-[selected=true]:text-title-50",
                "data-[focused=true]:bg-dropdown-hover-background data-[focused=true]:text-title-50"
              )}
            >
              {year}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </>
  );
}

const calendarGridStyles = cva("w-full border-collapse border-spacing-0");

type CalendarGridProps = ComponentProps<typeof AriaCalendarGrid>;

export function CalendarGrid({ className, ...props }: CalendarGridProps) {
  return (
    <AriaCalendarGrid
      className={cn(calendarGridStyles(), className)}
      {...props}
    />
  );
}

type CalendarGridBodyProps = ComponentProps<typeof AriaCalendarGridBody>;

export function CalendarGridBody({ ...props }: CalendarGridBodyProps) {
  return <AriaCalendarGridBody {...props} />;
}

type CalendarHeadingProps = ComponentProps<typeof AriaHeading>;

export function CalendarHeading({ className, ...props }: CalendarHeadingProps) {
  return (
    <AriaHeading {...props} className={cn("flex-1 text-center", className)} />
  );
}

export type { DateValue };

const calendarGridHeaderCellStyles = cva(
  "table-grid-header-cell pb-2 text-center text-[0.7rem] font-medium uppercase tracking-[0.16em] text-text-100 sm:text-xs"
);

export function CalendarGridHeader({ className }: { className?: string }) {
  return (
    <AriaCalendarGridHeader>
      {(day: string) => (
        <CalendarHeaderCell
          className={cn(calendarGridHeaderCellStyles(), className)}
        >
          {day}
        </CalendarHeaderCell>
      )}
    </AriaCalendarGridHeader>
  );
}

const calendarCellButtonStyles = cva(
  "flex size-10 items-center justify-center rounded-full text-sm font-medium text-title-50 outline-none transition forced-color-adjust-none [-webkit-tap-highlight-color:transparent] hover:bg-datepicker-selected-hover-background data-[outside-month=true]:pointer-events-none data-[outside-month=true]:text-text-200 data-[disabled=true]:cursor-not-allowed group-[&[data-disabled=true]:not([data-outside-month]):not([data-today])]:text-text-100 group-[[data-unavailable=true]:not([data-today=true])]:text-text-100 group-data-[today=true]:bg-datepicker-selected-background/90 group-data-[today=true]:text-white data-[selected=true]:bg-datepicker-selected-background data-[selected=true]:text-white-100 data-[pressed=true]:scale-95 data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-button-primary-focus-ring data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background-50 sm:size-11 [&[data-disabled=true]:not([data-outside-month])]:line-through group-data-[today=true]:hover:bg-datepicker-selected-background/90"
);

interface CalendarCellProps extends Omit<
  AriaCalendarCellProps,
  | "isDisabled"
  | "isFocusVisible"
  | "isOutsideMonth"
  | "isPressed"
  | "isSelected"
> {
  className?: string;
  disabled?: boolean;
  focusVisible?: boolean;
  outsideMonth?: boolean;
  pressed?: boolean;
  selected?: boolean;
}

export function CalendarCell({
  className,
  disabled,
  focusVisible,
  outsideMonth,
  pressed,
  selected,
  ...props
}: CalendarCellProps) {
  return (
    <AriaCalendarCell {...props} className="group p-0 outline-none">
      {({
        formattedDate,
        isDisabled,
        isFocusVisible,
        isOutsideMonth,
        isPressed,
        isSelected
      }: CalendarCellRenderProps) => (
        <span
          data-disabled={(disabled ?? isDisabled) || undefined}
          data-focus-visible={(focusVisible ?? isFocusVisible) || undefined}
          data-outside-month={(outsideMonth ?? isOutsideMonth) || undefined}
          data-pressed={(pressed ?? isPressed) || undefined}
          data-selected={(selected ?? isSelected) || undefined}
          className={cn(calendarCellButtonStyles(), className)}
        >
          {formattedDate}
        </span>
      )}
    </AriaCalendarCell>
  );
}
