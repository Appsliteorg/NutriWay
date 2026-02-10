"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { day: 'س', steps: 4000 },
  { day: 'ح', steps: 3000 },
  { day: 'ن', steps: 2000 },
  { day: 'ث', steps: 2780 },
  { day: 'ر', steps: 1890 },
  { day: 'خ', steps: 2390 },
  { day: 'ج', steps: 3490 },
];

const Activity = () => {
  return (
    <AppLayout>
      <header className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900">نشاطي الأسبوعي</h1>
        <p className="text-gray-500 text-sm">تتبع تقدمك خلال الأيام السبعة الماضية</p>
      </header>

      <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-50 mb-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-gray-400 text-xs font-medium mb-1">متوسط الخطوات</p>
            <h2 className="text-3xl font-black text-primary">٥,٢٣٤</h2>
          </div>
          <div className="text-right">
            <span className="text-green-500 text-sm font-bold">+٨٪</span>
            <p className="text-gray-400 text-[10px]">عن الأسبوع الماضي</p>
          </div>
        </div>

        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }}
                dy={10}
              />
              <Bar dataKey="steps" radius={[6, 6, 6, 6]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 6 ? '#065f46' : '#E5E7EB'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-4">الأهداف المحققة</h2>
        <div className="grid grid-cols-1 gap-4">
          {[
            { title: 'تحدي المشي الصباحي', progress: 100, color: 'bg-primary' },
            { title: 'شرب ٨ أكواب ماء', progress: 65, color: 'bg-blue-500' },
            { title: 'ساعات النوم المثالية', progress: 40, color: 'bg-accent' },
          ].map((goal, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-sm">{goal.title}</span>
                <span className="text-xs font-bold text-gray-400">{goal.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${goal.color} transition-all duration-1000`} 
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
};

export default Activity;