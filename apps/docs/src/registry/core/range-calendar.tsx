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
  CalendarCell as AriaCalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody as AriaCalendarGridBody,
  CalendarGridHeader as AriaCalendarGridHeader,
  Heading as AriaHeading,
  RangeCalendar as AriaRangeCalendar,
  CalendarCellRenderProps,
  CalendarHeaderCell,
  ListBox,
  ListBoxItem,
  Popover,
  RangeCalendarStateContext,
  useLocale,
  type CalendarCellProps as AriaCalendarCellProps,
  type RangeCalendarProps as AriaRangeCalendarProps,
  type DateValue,
  type RangeValue
} from "react-aria-components";

const rangeCalendarStyles = cva(
  "flex w-full max-w-full flex-col overflow-hidden rounded-3xl border border-base-100 bg-background-50 p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-5"
);

export interface RangeCalendarProps<T extends DateValue> extends Omit<
  AriaRangeCalendarProps<T>,
  "isDisabled" | "isReadOnly"
> {
  className?: string;
  disabled?: boolean;
  readonly?: boolean;
}

export function RangeCalendar<T extends DateValue>({
  className,
  children,
  disabled,
  readonly,
  ...props
}: RangeCalendarProps<T>) {
  return (
    <AriaRangeCalendar
      {...props}
      className={cn(rangeCalendarStyles(), className)}
      isDisabled={disabled}
      isReadOnly={readonly}
    >
      {children}
    </AriaRangeCalendar>
  );
}

const rangeCalendarHeaderStyles = cva(
  "mb-3 flex flex-wrap items-center gap-2 px-1 sm:mb-4 sm:flex-nowrap"
);

type RangeCalendarHeaderProps = ComponentProps<"header">;

export function RangeCalendarHeader({
  className,
  ...props
}: RangeCalendarHeaderProps) {
  return (
    <header className={cn(rangeCalendarHeaderStyles(), className)} {...props}>
      {props.children}
    </header>
  );
}

type RangeNavButtonProps = ComponentProps<typeof AriaButton> & {
  slot: "previous" | "next";
};

export function RangeNavButton({
  slot,
  className,
  ...props
}: RangeNavButtonProps) {
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
        "size-8 shrink-0 rounded-full text-text-50 sm:size-9",
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

type RangeCalendarHeadingProps = ComponentProps<typeof AriaHeading>;

export function RangeCalendarHeading({
  className,
  ...props
}: RangeCalendarHeadingProps) {
  return (
    <AriaHeading
      {...props}
      className={cn("min-w-0 flex-1 text-center", className)}
    />
  );
}

const rangeCalendarGridStyles = cva("w-full border-collapse border-spacing-0");

type RangeCalendarGridProps = ComponentProps<typeof AriaCalendarGrid>;

export function RangeCalendarGrid({
  className,
  ...props
}: RangeCalendarGridProps) {
  return (
    <AriaCalendarGrid
      className={cn(rangeCalendarGridStyles(), className)}
      {...props}
    />
  );
}

type RangeCalendarGridHeaderProps = Omit<
  ComponentProps<typeof AriaCalendarGridHeader>,
  "children"
> & {
  children?: ComponentProps<typeof AriaCalendarGridHeader>["children"];
};

const rangeCalendarGridHeaderCellStyles = cva(
  "table-grid-header-cell pb-2 text-center text-[0.7rem] font-medium uppercase tracking-[0.16em] text-text-100 sm:text-xs"
);

export function RangeCalendarGridHeader({
  className,
  children,
  ...props
}: RangeCalendarGridHeaderProps) {
  if (children) {
    return (
      <AriaCalendarGridHeader
        className={cn(rangeCalendarGridHeaderCellStyles(), className)}
        {...props}
      >
        {children}
      </AriaCalendarGridHeader>
    );
  }

  return (
    <AriaCalendarGridHeader {...props}>
      {(day: string) => (
        <CalendarHeaderCell
          className={cn(rangeCalendarGridHeaderCellStyles(), className)}
        >
          {day}
        </CalendarHeaderCell>
      )}
    </AriaCalendarGridHeader>
  );
}

type RangeCalendarGridBodyProps = ComponentProps<typeof AriaCalendarGridBody>;

export function RangeCalendarGridBody({
  ...props
}: RangeCalendarGridBodyProps) {
  return <AriaCalendarGridBody {...props} />;
}

const rangeCalendarCellButtonStyles = cva(
  [
    "relative z-10 flex size-10 items-center justify-center rounded-full text-sm font-medium text-title-50 outline-none transition forced-color-adjust-none [-webkit-tap-highlight-color:transparent] hover:bg-datepicker-selected-hover-background data-[outside-month=true]:pointer-events-none data-[outside-month=true]:text-text-200 data-[disabled=true]:cursor-not-allowed group-[&[data-disabled=true]:not([data-outside-month]):not([data-today])]:text-text-100 group-data-[unavailable=true]:text-text-100 group-data-[today=true]:bg-datepicker-selected-background/90 group-data-[today=true]:text-white data-[selection-start=true]:bg-datepicker-selected-background data-[selection-start=true]:text-white-100 data-[selection-end=true]:bg-datepicker-selected-background data-[selection-end=true]:text-white-100 data-[selected=true]:bg-transparent data-[selected=true]:text-title-50 data-[selection-start=true]:rounded-l-full data-[selection-end=true]:rounded-r-full data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-button-primary-focus-ring data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background-50 m:size-11 [&[data-disabled=true]:not([data-outside-month])]:line-through group-data-[today=true]:hover:bg-datepicker-selected-background/90 data-[selection-start=true]:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] data-[selection-end=true]:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
  ].join(" ")
);

interface RangeCalendarCellProps extends Omit<
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
  selectionStart?: boolean;
  selectionEnd?: boolean;
}

export function RangeCalendarCell({
  className,
  disabled,
  focusVisible,
  outsideMonth,
  pressed,
  selected,
  selectionStart,
  selectionEnd,
  ...props
}: RangeCalendarCellProps) {
  return (
    <AriaCalendarCell {...props} className="group p-0 outline-none">
      {({
        formattedDate,
        isDisabled,
        isFocusVisible,
        isOutsideMonth,
        isPressed,
        isSelected,
        isSelectionStart,
        isSelectionEnd
      }: CalendarCellRenderProps) => (
        <span className="relative flex h-10 w-full items-center justify-center sm:h-11">
          {((selected ?? isSelected) ||
            (selectionStart ?? isSelectionStart) ||
            (selectionEnd ?? isSelectionEnd)) && (
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-y-0.5 bg-datepicker-selected-background/10",
                {
                  "rounded-l-full": selectionStart ?? isSelectionStart,
                  "rounded-r-full": selectionEnd ?? isSelectionEnd,
                  "right-0 w-[calc(50%+1.25rem)]":
                    selectionStart ?? isSelectionStart,
                  "left-0 w-[calc(50%+1.25rem)]":
                    selectionEnd ?? isSelectionEnd,
                  "w-full":
                    !(selectionStart ?? isSelectionStart) &&
                    !(selectionEnd ?? isSelectionEnd)
                }
              )}
            />
          )}
          <span
            data-disabled={(disabled ?? isDisabled) || undefined}
            data-focus-visible={(focusVisible ?? isFocusVisible) || undefined}
            data-outside-month={(outsideMonth ?? isOutsideMonth) || undefined}
            data-pressed={(pressed ?? isPressed) || undefined}
            data-selected={(selected ?? isSelected) || undefined}
            data-selection-start={
              (selectionStart ?? isSelectionStart) || undefined
            }
            data-selection-end={(selectionEnd ?? isSelectionEnd) || undefined}
            className={cn(rangeCalendarCellButtonStyles(), className)}
          >
            {formattedDate}
          </span>
        </span>
      )}
    </AriaCalendarCell>
  );
}

type YearPickerProps = {
  className?: string;
};

export function RangeCalendarYearPicker({ className }: YearPickerProps) {
  const state = useContext(RangeCalendarStateContext);
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
    return null;
  }

  const focusedDate = state.focusedDate;
  if (!focusedDate) {
    return null;
  }

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
          "h-10 min-w-20 justify-between rounded-full border border-base-100 bg-white-100 px-3 text-sm font-medium text-title-50 hover:bg-white-100 hover:text-title-50 focus:ring-button-primary-focus-ring sm:min-w-24 sm:h-11",
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
        className="w-56 max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl border border-base-100 bg-dropdown-background p-0 shadow-md"
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
          className="max-h-60 overflow-y-auto p-1.5 outline-none sm:max-h-64"
        >
          {years.map(year => (
            <ListBoxItem
              key={year}
              id={String(year)}
              textValue={String(year)}
              className={cn(
                "flex w-full justify-between rounded-md px-3 py-2 text-left text-sm outline-hidden cursor-pointer data-[selected=true]:bg-dropdown-hover-background data-[selected=true]:text-title-50 data-[focused=true]:bg-dropdown-hover-background data-[focused=true]:text-title-50 hover:bg-dropdown-hover-background"
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

export type { DateValue, RangeValue };
