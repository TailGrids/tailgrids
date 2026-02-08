import { cn } from "@/utils/cn";
import { Calendar, ChevronLeft, ChevronRight } from "@tailgrids/icons";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths
} from "date-fns";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../button";

type PropsType = {
  value?: Date | null;
  onChange?: (date: Date) => void;
  placeholder?: string;
  className?: string;
};

export function DatePicker({
  value = null,
  onChange,
  placeholder = "Select date",
  className = ""
}: PropsType) {
  const [currentMonth, setCurrentMonth] = useState<Date>(value || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(value);
  const [tempSelected, setTempSelected] = useState<Date | null>(value);
  const [isOpen, setIsOpen] = useState(false);

  const pickerRef = useRef<HTMLDivElement>(null);

  // Close picker when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const togglePicker = () => {
    setTempSelected(selectedDate);
    setIsOpen(prev => !prev);
  };

  const handlePrevMonth = () => setCurrentMonth(prev => subMonths(prev, 1));
  const handleNextMonth = () => setCurrentMonth(prev => addMonths(prev, 1));

  const handleCancel = () => {
    setTempSelected(selectedDate);
    setIsOpen(false);
  };

  const handleApply = () => {
    if (tempSelected) {
      setSelectedDate(tempSelected);
      onChange?.(tempSelected);
    }
    setIsOpen(false);
  };

  const handleDateClick = (day: Date) => setTempSelected(day);

  // Generate days grid for current month
  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 0 });
    const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 0 });
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const selectedDateText = selectedDate
    ? format(selectedDate, "MMMM dd, yyyy")
    : placeholder;

  return (
    <div ref={pickerRef} className={`relative w-full max-w-sm ${className}`}>
      {/* Trigger Button */}
      <Button
        appearance="outline"
        type="button"
        onClick={togglePicker}
        className="flex w-full justify-start"
      >
        <Calendar className="text-text-100" />

        <span className="text-sm font-normal text-title-50">
          {selectedDateText}
        </span>
      </Button>

      {/* Calendar Popup */}
      {isOpen && (
        <div className="absolute left-0 z-20 mt-2 w-full rounded-xl border border-base-100 bg-background-50 shadow-xl">
          <div className="p-5">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <Button
                variant="ghost"
                iconOnly
                onClick={handlePrevMonth}
                className="text-text-50 hover:text-text-50"
              >
                <ChevronLeft />
              </Button>

              <h2 className="text-lg font-semibold text-title-50">
                {format(currentMonth, "MMMM yyyy")}
              </h2>

              <Button
                variant="ghost"
                iconOnly
                onClick={handleNextMonth}
                className="text-text-50 hover:text-text-50"
              >
                <ChevronRight />
              </Button>
            </div>

            {/* Week Days */}
            <div className="mb-2 grid grid-cols-7 gap-2 text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                <span
                  key={d}
                  className="py-2 text-sm font-medium text-text-100"
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {days.map(day => {
                const inMonth = isSameMonth(day, currentMonth);
                const selected = tempSelected && isSameDay(day, tempSelected);
                const today = isToday(day);

                return (
                  <button
                    key={day.toISOString()}
                    disabled={!inMonth}
                    onClick={() => inMonth && handleDateClick(day)}
                    className={cn(
                      "size-11 rounded-full text-sm font-medium transition-all",
                      {
                        "text-text-200 cursor-not-allowed": !inMonth,
                        "bg-primary-600 text-white-100 hover:bg-primary-700":
                          selected,
                        "bg-primary-500 text-white-100 hover:bg-primary-600":
                          today,
                        "text-title-50 hover:bg-datepicker-selected-background":
                          inMonth && !selected && !today
                      }
                    )}
                  >
                    {format(day, "d")}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 border-t border-base-100 p-4">
            <Button
              onClick={handleCancel}
              appearance="outline"
              className="flex-1"
            >
              Cancel
            </Button>

            <Button onClick={handleApply} className="flex-1">
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
