import React from 'react';
import { IoMdArrowDropup } from 'react-icons/io';

interface CardProps {
  description: string;
  value: number | string;
  percentage: number;
  isProfit: boolean;
  icon: React.ComponentType;
  iconColor: string;
  iconWrapperColor: string;
}

const Card: React.FC<CardProps> = ({ description, value, percentage, isProfit, icon, iconColor, iconWrapperColor }) => {
  const IconComponent = icon;
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-sm border bg-opacity-50 p-4 dark:bg-slate-800">
      <div className={`h-12 w-12 ${iconWrapperColor} flex items-center justify-center rounded-lg`}>
        <IconComponent className={`neon text-2xl ${iconColor}`} />
      </div>
      <p className="py-2 text-sm">{description}</p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">{value}</p>
        <p className={`text-sm font-semibold ${isProfit ? 'text-green-500' : 'text-red-500'} flex items-center`}>
          <span className={`${!isProfit && 'rotate-180'}`}>
            <IoMdArrowDropup className="text-lg" />
          </span>
          {percentage}%
        </p>
      </div>
    </div>
  );
};

export default Card;
