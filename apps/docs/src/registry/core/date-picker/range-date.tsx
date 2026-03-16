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
      <div className="grid grid-cols-7 gap-y-0.5">
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
          const isSunday = day.getDay() === 0;
          const isSaturday = day.getDay() === 6;
          const isWithin =
            tempStartDate &&
            tempEndDate &&
            isWithinInterval(day, { start: tempStartDate, end: tempEndDate });

          return (
            <div
              key={index}
              className="relative w-full h-9 sm:h-12 flex items-center justify-center group"
            >
              {isWithin && (
                <div
                  className={cn(
                    "absolute inset-y-0 bg-datepicker-selected-hover-background",
                    {
                      "rounded-l-full": isStart || isSunday,
                      "rounded-r-full": isEnd || isSaturday,
                      "right-0 w-[calc(50%+1.125rem)] sm:w-[calc(50%+1.5rem)]":
                        isStart,
                      "left-0 w-[calc(50%+1.125rem)] sm:w-[calc(50%+1.5rem)]":
                        isEnd,
                      "w-full": !isStart && !isEnd
                    }
                  )}
                />
              )}
              <button
                className={cn(
                  "relative z-10 grid place-items-center size-9 sm:size-12 font-medium text-title-50 rounded-full hover:bg-datepicker-selected-hover-background",
                  {
                    "pointer-events-none text-text-200": !isCurrentMonth,
                    "bg-primary-500! text-white-100": isStart || isEnd
                  }
                )}
                onClick={() => isCurrentMonth && handleDateClick(day)}
              >
                {day.getDate()}
              </button>
            </div>
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
        className="flex justify-start w-full sm:w-auto sm:min-w-75"
      >
        <Calendar className="text-text-100" />

        <span>{formatDateRange()}</span>
      </Button>

      {/* Calendar Container */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-50 w-[calc(100vw-2rem)] md:w-max max-w-[calc(100vw-2rem)] sm:max-w-none overflow-hidden sm:overflow-visible translate-y-4 rounded-xl border border-base-100 bg-background-50 shadow-lg">
          {/* Two Month View */}
          <div className="flex flex-col divide-y divide-(--border-color-base-100) md:flex-row md:divide-x md:divide-y-0">
            {/* First Month */}
            <div className="p-3 sm:p-5 md:w-1/2">
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
            <div className="p-3 sm:p-5 md:w-1/2">
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
