"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { Settings, Shield, CreditCard, HelpCircle, LogOut, ChevronLeft } from 'lucide-react';

const Profile = () => {
  const menuItems = [
    { icon: Settings, label: 'إعدادات الحساب', color: 'text-gray-600' },
    { icon: Shield, label: 'الخصوصية والأمان', color: 'text-gray-600' },
    { icon: CreditCard, label: 'الاشتراكات', color: 'text-gray-600' },
    { icon: HelpCircle, label: 'مركز المساعدة', color: 'text-gray-600' },
    { icon: LogOut, label: 'تسجيل الخروج', color: 'text-red-500' },
  ];

  return (
    <AppLayout>
      <div className="flex flex-col items-center mb-10">
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-[2.5rem] bg-primary/10 p-1 border-2 border-primary/20">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed" 
              alt="Profile" 
              className="w-full h-full rounded-[2.2rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100">
            <Settings size={18} className="text-primary" />
          </div>
        </div>
        <h2 className="text-xl font-black text-gray-900">أحمد محمد</h2>
        <p className="text-gray-400 text-sm font-medium">عضو بريميوم منذ ٢٠٢٣</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: 'الطول', value: '١٧٨ سم' },
          { label: 'الوزن', value: '٧٥ كجم' },
          { label: 'العمر', value: '٢٨ سنة' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl text-center shadow-sm border border-gray-50">
            <p className="text-[10px] text-gray-400 font-bold mb-1">{stat.label}</p>
            <p className="text-sm font-black text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
        {menuItems.map((item, i) => (
          <button 
            key={i} 
            className={`w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors ${i !== menuItems.length - 1 ? 'border-b border-gray-50' : ''}`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-xl bg-gray-50 ${item.color}`}>
                <item.icon size={20} />
              </div>
              <span className={`font-bold text-sm ${item.color}`}>{item.label}</span>
            </div>
            <ChevronLeft size={18} className="text-gray-300" />
          </button>
        ))}
      </div>
    </AppLayout>
  );
};

export default Profile;