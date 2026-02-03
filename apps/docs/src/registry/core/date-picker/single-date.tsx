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
      <button
        type="button"
        onClick={togglePicker}
        className="focus:ring-primary-500 flex h-11 w-full items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-left transition-all focus:ring-2 dark:border-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M13.9163 7.24966H2.08331V14.8336C2.08349 15.1096 2.30728 15.3336 2.58331 15.3336H13.4163C13.6924 15.3336 13.9161 15.1096 13.9163 14.8336V7.24966ZM13.9163 3.99966C13.9161 3.72367 13.6924 3.49966 13.4163 3.49966H2.58331C2.30728 3.49966 2.08349 3.72367 2.08331 3.99966V5.74966H13.9163V3.99966ZM15.4163 14.8336C15.4161 15.9381 14.5208 16.8336 13.4163 16.8336H2.58331C1.47885 16.8336 0.583489 15.9381 0.583313 14.8336V3.99966C0.583489 2.89524 1.47885 1.99966 2.58331 1.99966H3.91632V1.29166C3.91632 0.877551 4.25226 0.541832 4.66632 0.541656C5.08053 0.541656 5.41632 0.877443 5.41632 1.29166V1.99966H10.5833V1.29166C10.5833 0.877443 10.9191 0.541656 11.3333 0.541656C11.7475 0.541657 12.0833 0.877443 12.0833 1.29166V1.99966H13.4163C14.5208 1.99966 15.4161 2.89524 15.4163 3.99966V14.8336Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-sm font-normal text-gray-800 dark:text-white/90">
          {selectedDateText}
        </span>
      </button>

      {/* Calendar Popup */}
      {isOpen && (
        <div className="absolute left-0 z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
          <div className="p-5">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={handlePrevMonth}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                ←
              </button>

              <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                {format(currentMonth, "MMMM yyyy")}
              </h2>

              <button
                onClick={handleNextMonth}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                →
              </button>
            </div>

            {/* Week Days */}
            <div className="mb-2 grid grid-cols-7 gap-2 text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                <span
                  key={d}
                  className="py-2 text-sm font-medium text-gray-500 dark:text-gray-400"
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

                let classes =
                  "w-11 h-11 rounded-full text-sm font-medium transition-all cursor-pointer ";
                if (!inMonth)
                  classes += "text-gray-400 dark:text-gray-600 cursor-default";
                else if (selected)
                  classes += "bg-primary-600 text-white hover:bg-primary-700";
                else if (today)
                  classes += "bg-primary-500 text-white hover:bg-primary-600";
                else
                  classes +=
                    "text-gray-800 dark:text-white/90 hover:bg-gray-100 dark:hover:bg-gray-800";

                return (
                  <button
                    key={day.toISOString()}
                    disabled={!inMonth}
                    onClick={() => inMonth && handleDateClick(day)}
                    className={classes}
                  >
                    {format(day, "d")}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 border-t border-gray-200 p-4 dark:border-gray-800">
            <button
              onClick={handleCancel}
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="bg-primary-600 hover:bg-primary-700 flex-1 rounded-lg px-4 py-2.5 font-medium text-white transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
