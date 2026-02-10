"use client";

import React, { useState } from 'react';
import { Droplets, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const WaterTracker = () => {
  const [cups, setCups] = useState(4);
  const goal = 8;

  return (
    <div className="bg-blue-50/50 p-6 rounded-[2.5rem] border border-blue-100/50 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500 text-white rounded-xl">
            <Droplets size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">شرب الماء</h3>
            <p className="text-xs text-gray-500">الهدف: {goal} أكواب</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-blue-600">{cups}</span>
          <span className="text-xs text-gray-400 font-bold">/{goal}</span>
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
        {Array.from({ length: goal }).map((_, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ 
              backgroundColor: i < cups ? '#3b82f6' : '#dbeafe',
              scale: i < cups ? 1.1 : 1
            }}
            className="w-8 h-10 rounded-lg shrink-0 flex items-center justify-center"
          >
            <Droplets size={14} className={i < cups ? "text-white" : "text-blue-300"} />
          </motion.div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button 
          variant="outline" 
          className="flex-1 rounded-2xl border-blue-200 text-blue-600 hover:bg-blue-50"
          onClick={() => setCups(Math.max(0, cups - 1))}
        >
          <Minus size={18} />
        </Button>
        <Button 
          className="flex-2 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-bold px-8"
          onClick={() => setCups(Math.min(goal, cups + 1))}
        >
          <Plus size={18} className="ml-2" />
          إضافة كوب
        </Button>
      </div>
    </div>
  );
};

export default WaterTracker;