"use client";

import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface HealthInsightProps {
  title: string;
  category: string;
  image: string;
  readTime: string;
}

const HealthInsightCard = ({ title, category, image, readTime }: HealthInsightProps) => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-50 shadow-sm group active:scale-95 transition-transform">
      <div className="h-40 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-[10px] font-bold text-primary">{category}</span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-bold text-gray-900 mb-3 leading-tight">{title}</h4>
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-gray-400 font-medium">{readTime} قراءة</span>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
            <ArrowLeft size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsightCard;