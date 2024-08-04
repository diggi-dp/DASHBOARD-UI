import ProgressRing from '@/components/ui/ProgressRing';
import React from 'react';
import { IoMdArrowDropup } from 'react-icons/io';

interface CardProps {
  description: string;
  value: number | string;
  percentage: number;
  goalPercentage: number;
  isProfit: boolean;
}

const NetProfitCard: React.FC<CardProps> = ({ description, value, percentage, isProfit, goalPercentage }) => {
  return (
    <div className="grid h-full w-full grid-cols-2 rounded-sm border bg-opacity-50 p-4 dark:bg-slate-800 lg:grid-cols-1 xl:grid-cols-2">
      <div className="grid-col-1 grid">
        <p className="text-sm">{description}</p>
        <div className="flex flex-col justify-between lg:flex-row lg:items-center xl:flex-col xl:items-start">
          <p className="text-3xl font-semibold leading-3 tracking-wide">$ {value}</p>
          <p className={`text-sm font-semibold ${isProfit ? 'text-green-500' : 'text-red-500'} flex items-center`}>
            <span className={`${!isProfit && 'rotate-180'}`}>
              <IoMdArrowDropup className="text-lg" />
            </span>
            {percentage}%
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ProgressRing percentage={goalPercentage} height={120} width={120} />
        <p className="text-[0.5rem]">*The value here has been rounded off</p>
      </div>
    </div>
  );
};

export default NetProfitCard;
