"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';

const ResultsPage = () => {
  return (
    <AppLayout>
      <header className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900">النتائج</h1>
        <p className="text-gray-500 text-sm">استعرض نتائج فحوصاتك السابقة</p>
      </header>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-white rounded-[2rem] border border-gray-50 shadow-sm animate-pulse" />
        ))}
      </div>
    </AppLayout>
  );
};

export default ResultsPage;