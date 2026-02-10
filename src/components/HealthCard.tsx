"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface HealthCardProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
  trend?: string;
  color?: 'primary' | 'accent' | 'blue';
  className?: string;
}

const HealthCard = ({ title, value, unit, icon, trend, color = 'primary', className }: HealthCardProps) => {
  const colorClasses = {
    primary: "bg-primary/5 text-primary",
    accent: "bg-accent/5 text-accent",
    blue: "bg-blue-50 text-blue-600",
  };

  return (
    <div className={cn("bg-white p-5 rounded-[2rem] shadow-sm border border-gray-50 flex flex-col gap-4", className)}>
      <div className="flex justify-between items-start">
        <div className={cn("p-3 rounded-2xl", colorClasses[color])}>
          {icon}
        </div>
        {trend && (
          <span className="text-[10px] font-bold px-2 py-1 bg-green-50 text-green-600 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-gray-500 text-xs font-medium mb-1">{title}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-extrabold text-gray-900">{value}</span>
          <span className="text-xs text-gray-400 font-medium">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;