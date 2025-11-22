import { cn } from '@/utils/cn';
import {
  Button,
  MenuTrigger,
  Popover,
  type ButtonProps,
} from 'react-aria-components';
import { useState } from 'react';
import { useMenuTriggerState } from 'react-stately';

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) =>
    String(start + i).padStart(2, '0')
  );

export function TimePicker({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect?: (data: Date) => void;
}) {
  const triggerState = useMenuTriggerState({});

  const [hour, setHour] = useState<string>('01');
  const [minute, setMinute] = useState<string>('00');
  const [period, setPeriod] = useState<string>('AM');

  const handleChange = (type: 'hour' | 'minute' | 'period', value: string) => {
    if (type === 'hour') setHour(value);
    if (type === 'minute') setMinute(value);
    if (type === 'period') setPeriod(value);

    const final = {
      hour: type === 'hour' ? value : hour,
      minute: type === 'minute' ? value : minute,
      period: type === 'period' ? value : period,
    };

    const date = toDate({
      hour: final.hour,
      minute: final.minute,
      period: final.period,
    });

    onSelect?.(date);
    triggerState.close();
  };

  return (
    <MenuTrigger>
      {children}
      <Popover className="bg-neutral rounded-xl border border-neutral-200 p-3 shadow-xl outline-none">
        <div className="grid max-w-41.5 grid-cols-3 gap-1">
          <TimeColumn
            values={range(1, 12)}
            onChange={(v) => handleChange('hour', v)}
          />
          <TimeColumn
            values={range(0, 59)}
            onChange={(v) => handleChange('minute', v)}
          />
          <TimeColumn
            values={['AM', 'PM']}
            onChange={(v) => handleChange('period', v)}
          />
        </div>
      </Popover>
    </MenuTrigger>
  );
}

function TimeColumn({
  values,
  onChange,
}: {
  values: string[];
  onChange?: (value: string) => void;
}) {
  const [selected, setSelected] = useState(values[0]);

  return (
    <div className="flex max-h-73 flex-col gap-2 overflow-y-auto">
      {values.map((value) => (
        <button
          key={value}
          onClick={() => {
            setSelected(value);
            onChange?.(value);
          }}
          className={cn(
            'grid size-11.5 shrink-0 place-items-center rounded-lg text-sm transition',
            selected === value
              ? 'bg-blue-600 text-white'
              : 'text-gray-800 hover:bg-gray-100'
          )}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export function TimePickerTrigger({ className, ...props }: ButtonProps) {
  return <Button className={cn('outline-none', className)} {...props} />;
}

type ToDateParams = {
  hour: string;
  minute: string;
  period: string;
};

function toDate({ hour, minute, period }: ToDateParams) {
  let hour24 = parseInt(hour);
  if (period === 'AM' && hour24 === 12) {
    hour24 = 0; // Midnight case
  } else if (period === 'PM' && hour24 !== 12) {
    hour24 += 12;
  }

  const date = new Date();
  date.setHours(hour24, parseInt(minute), 0, 0);

  return date;
}
