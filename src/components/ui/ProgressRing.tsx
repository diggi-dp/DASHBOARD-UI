import React from 'react';

interface ProgressRingProps {
  percentage: number;
  height: number;
  width: number;
  strokeWidth?: number;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ percentage, height, width, strokeWidth = 8 }) => {
  const radius = Math.min(height, width) / 2 - strokeWidth;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg height={height} width={width} className="relative">
        <circle stroke="#1e3a8a" fill="transparent" strokeWidth={strokeWidth} r={radius} cx={width / 2} cy={height / 2} />
        <circle
          stroke="#1d4ed8"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={radius}
          cx={width / 2}
          cy={height / 2}
          className="transition-stroke-dashoffset duration-500 ease-in-out"
        />
        <text x="50%" y="50%" dy=".3em" textAnchor="middle" className="fill-current text-lg font-bold text-white">
          {percentage}%
        </text>
        <text x="50%" y="64%" dy=".3em" textAnchor="middle" className="fill-current text-[0.6rem] font-normal text-white">
          Goal completed
        </text>
      </svg>
    </div>
  );
};

export default ProgressRing;
