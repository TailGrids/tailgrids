import { ComponentProps } from "react";

type PropsType = ComponentProps<"svg"> & {
  size?: number;
  percentage?: number;
};

export function DefaultSpinner({
  size = 130,
  percentage = 80,
  ...props
}: PropsType) {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percentage / 100) * circumference;
  const center = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background Track Circle */}
      <mask id={`path-1-inside-1-${percentage}`} fill="white">
        <path
          d={`
            M ${size} ${center} 
            C ${size} ${size * 0.776} ${size * 0.776} ${size} ${center} ${size}
            C ${size * 0.224} ${size} 0 ${size * 0.776} 0 ${center}
            C 0 ${size * 0.224} ${size * 0.224} 0 ${center} 0
            C ${size * 0.776} 0 ${size} ${size * 0.224} ${size} ${center}
            Z
            M ${size * 0.0768} ${center}
            C ${size * 0.0768} ${size * 0.734} ${size * 0.266} ${size * 0.923} ${center} ${size * 0.923}
            C ${size * 0.734} ${size * 0.923} ${size * 0.923} ${size * 0.734} ${size * 0.923} ${center}
            C ${size * 0.923} ${size * 0.266} ${size * 0.734} ${size * 0.0768} ${center} ${size * 0.0768}
            C ${size * 0.266} ${size * 0.0768} ${size * 0.0768} ${size * 0.266} ${size * 0.0768} ${center}
            Z
          `}
        />
      </mask>
      <path
        d={`
            M ${size} ${center} 
            C ${size} ${size * 0.776} ${size * 0.776} ${size} ${center} ${size}
            C ${size * 0.224} ${size} 0 ${size * 0.776} 0 ${center}
            C 0 ${size * 0.224} ${size * 0.224} 0 ${center} 0
            C ${size * 0.776} 0 ${size} ${size * 0.224} ${size} ${center}
            Z
            M ${size * 0.0768} ${center}
            C ${size * 0.0768} ${size * 0.734} ${size * 0.266} ${size * 0.923} ${center} ${size * 0.923}
            C ${size * 0.734} ${size * 0.923} ${size * 0.923} ${size * 0.734} ${size * 0.923} ${center}
            C ${size * 0.923} ${size * 0.266} ${size * 0.734} ${size * 0.0768} ${center} ${size * 0.0768}
            C ${size * 0.266} ${size * 0.0768} ${size * 0.0768} ${size * 0.266} ${size * 0.0768} ${center}
            Z
          `}
        stroke="var(--border-color-base-100)"
        strokeWidth="20"
        mask={`url(#path-1-inside-1-${percentage})`}
      />

      {/* Progress Arc */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="var(--color-primary-500)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
        className="transition-all duration-700 ease-out"
      />
    </svg>
  );
}
