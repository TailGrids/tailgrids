import { cn } from "@/utils/cn";
import { Calendar, ChevronLeft, ChevronRight } from "@tailgrids/icons";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  startOfMonth,
  subMonths
} from "date-fns";
import { useState } from "react";
import { Button } from "../button";

type PropsType = {
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  onDateChange?: (startDate: Date | null, endDate: Date | null) => void;
};

export function RangeDatePicker({
  defaultStartDate = new Date(2028, 7, 25),
  defaultEndDate = new Date(2028, 8, 9),
  onDateChange
}: PropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date(2028, 7, 1));
  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate);
  const [tempStartDate, setTempStartDate] = useState<Date | null>(
    defaultStartDate
  );
  const [tempEndDate, setTempEndDate] = useState<Date | null>(defaultEndDate);

  const handleDateClick = (date: Date) => {
    if (!tempStartDate || (tempStartDate && tempEndDate)) {
      setTempStartDate(date);
      setTempEndDate(null);
    } else {
      if (date < tempStartDate) {
        setTempEndDate(tempStartDate);
        setTempStartDate(date);
      } else {
        setTempEndDate(date);
      }
    }
  };

  const handleCancel = () => {
    setTempStartDate(startDate);
    setTempEndDate(endDate);
    setIsOpen(false);
  };

  const handleOk = () => {
    setStartDate(tempStartDate);
    setEndDate(tempEndDate);
    onDateChange?.(tempStartDate, tempEndDate);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const renderCalendar = (monthDate: Date) => {
    const monthStart = startOfMonth(monthDate);
    const monthEnd = endOfMonth(monthDate);
    const startDay = monthStart.getDay();

    const prevMonthEnd = endOfMonth(subMonths(monthDate, 1));
    const prevMonthDays = eachDayOfInterval({
      start: new Date(
        prevMonthEnd.getFullYear(),
        prevMonthEnd.getMonth(),
        prevMonthEnd.getDate() - startDay + 1
      ),
      end: prevMonthEnd
    });

    const currentMonthDays = eachDayOfInterval({
      start: monthStart,
      end: monthEnd
    });

    const totalCells = prevMonthDays.length + currentMonthDays.length;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    const nextMonthDays = Array.from({ length: remainingCells }, (_, i) => {
      const nextMonth = addMonths(monthDate, 1);
      return new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i + 1);
    });

    const allDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

    return (
      <div className="grid grid-cols-7">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
          <div
            key={day}
            className="py-2 text-center text-xs font-medium text-text-100"
          >
            {day}
          </div>
        ))}

        {allDays.map((day, index) => {
          const isCurrentMonth = isSameMonth(day, monthDate);
          const isStart = tempStartDate && isSameDay(day, tempStartDate);
          const isEnd = tempEndDate && isSameDay(day, tempEndDate);
          const isInRange =
            tempStartDate &&
            tempEndDate &&
            isWithinInterval(day, { start: tempStartDate, end: tempEndDate }) &&
            !isStart &&
            !isEnd;

          return (
            <button
              key={index}
              className={cn(
                "grid place-items-center size-12 font-medium text-title-50 hover:bg-datepicker-selected-hover-background",
                {
                  "pointer-events-none text-text-200": !isCurrentMonth,
                  "rounded-l-full": isStart,
                  "rounded-r-full": isEnd,
                  "bg-primary-500! text-white-100": isStart || isEnd,
                  "bg-datepicker-selected-hover-background text-title-50":
                    isInRange && isCurrentMonth,
                  "rounded-full": !isStart && !isEnd && !isInRange
                }
              )}
              onClick={() => isCurrentMonth && handleDateClick(day)}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    );
  };

  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${format(startDate, "MMM d, yyyy")} - ${format(
        endDate,
        "MMM d, yyyy"
      )}`;
    }
    return "Select date";
  };

  return (
    <div className="relative mx-auto">
      <Button
        appearance="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-start min-w-sm"
      >
        <Calendar className="text-text-100" />

        <span>{formatDateRange()}</span>
      </Button>

      {/* Calendar Container */}
      {isOpen && (
        <div className="absolute z-50 min-w-3xl translate-y-4 rounded-xl border border-base-100 bg-background-50 shadow-lg">
          {/* Two Month View */}
          <div className="flex flex-col divide-y divide-(--border-color-base-100) md:flex-row md:divide-x md:divide-y-0">
            {/* First Month */}
            <div className="p-5 md:w-1/2">
              <div className="mb-4 flex items-center justify-between">
                <Button
                  variant="ghost"
                  iconOnly
                  onClick={handlePrevMonth}
                  className="text-text-50!"
                >
                  <ChevronLeft />
                </Button>

                <h3 className="text-lg font-medium text-title-50">
                  {format(currentDate, "MMMM yyyy")}
                </h3>

                <div className="w-9" />
              </div>

              {renderCalendar(currentDate)}
            </div>

            {/* Second Month */}
            <div className="p-5 md:w-1/2">
              <div className="mb-4 flex items-center justify-between">
                <div className="w-9" />

                <h3 className="text-lg font-medium text-title-50">
                  {format(addMonths(currentDate, 1), "MMMM yyyy")}
                </h3>

                <Button
                  variant="ghost"
                  iconOnly
                  onClick={handleNextMonth}
                  className="text-text-50!"
                >
                  <ChevronRight />
                </Button>
              </div>
              {renderCalendar(addMonths(currentDate, 1))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 divide-x divide-(--border-color-base-100) border-t border-base-100">
            <div className="p-4">
              <Button
                appearance="outline"
                onClick={handleCancel}
                className="w-full"
              >
                Cancel
              </Button>
            </div>

            <div className="p-4">
              <Button onClick={handleOk} className="w-full h-full">
                Ok
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
