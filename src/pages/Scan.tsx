"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';

const ScanPage = () => {
  return (
    <AppLayout>
      <header className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900">المسح</h1>
        <p className="text-gray-500 text-sm">ابدأ عملية المسح الصحي الآن</p>
      </header>
      <div className="flex flex-col items-center justify-center h-[50vh] border-2 border-dashed border-gray-200 rounded-[3rem] bg-white/50">
        <p className="text-gray-400 font-medium">مساحة المسح</p>
      </div>
    </AppLayout>
  );
};

export default ScanPage;