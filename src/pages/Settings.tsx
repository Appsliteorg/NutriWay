"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';

const SettingsPage = () => {
  return (
    <AppLayout>
      <header className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900">الإعدادات</h1>
        <p className="text-gray-500 text-sm">تحكم في تفضيلات تطبيقك</p>
      </header>
      <div className="bg-white rounded-[2.5rem] border border-gray-50 shadow-sm overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-16 border-b border-gray-50 last:border-0" />
        ))}
      </div>
    </AppLayout>
  );
};

export default SettingsPage;