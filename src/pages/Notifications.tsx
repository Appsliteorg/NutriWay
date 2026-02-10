"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { Bell, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'حان وقت شرب الماء',
      desc: 'لم تقم بتسجيل أي كمية ماء منذ ساعتين. اشرب كوباً الآن!',
      time: 'منذ ١٠ دقائق',
      type: 'alert',
      icon: <Clock className="text-accent" size={20} />,
      bg: 'bg-accent/10'
    },
    {
      id: 2,
      title: 'هدف الخطوات مكتمل',
      desc: 'تهانينا! لقد حققت هدفك اليومي بالمشي ١٠,٠٠٠ خطوة.',
      time: 'منذ ٣ ساعات',
      type: 'success',
      icon: <CheckCircle2 className="text-primary" size={20} />,
      bg: 'bg-primary/10'
    },
    {
      id: 3,
      title: 'تذكير بالدواء',
      desc: 'موعد فيتامين د الآن. يرجى تناوله بعد الوجبة.',
      time: 'منذ ٥ ساعات',
      type: 'warning',
      icon: <AlertCircle className="text-blue-500" size={20} />,
      bg: 'bg-blue-50'
    }
  ];

  return (
    <AppLayout>
      <header className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900">التنبيهات</h1>
        <p className="text-gray-500 text-sm">ابقَ على اطلاع بحالتك الصحية</p>
      </header>

      <div className="space-y-4">
        {notifications.map((n) => (
          <div key={n.id} className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-50 flex gap-4">
            <div className={`w-12 h-12 rounded-2xl ${n.bg} flex items-center justify-center shrink-0`}>
              {n.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-sm text-gray-900">{n.title}</h3>
                <span className="text-[10px] text-gray-400">{n.time}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{n.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Notifications;