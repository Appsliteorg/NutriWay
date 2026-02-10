"use client";

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';

const ProductResult = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  return (
    <AppLayout>
      <header className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-2xl bg-white shadow-sm"
          onClick={() => navigate('/scan')}
        >
          <ArrowRight size={20} />
        </Button>
        <h1 className="text-xl font-black text-gray-900">نتيجة الفحص</h1>
      </header>

      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
          <Package size={40} className="text-primary" />
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">تم العثور على المنتج</h2>
        <p className="text-gray-400 font-medium mb-6">الرمز الشريطي: {code}</p>
        
        <div className="p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-sm text-gray-500">سيتم عرض تفاصيل المنتج هنا قريباً</p>
        </div>
      </div>

      <Button 
        className="w-full mt-8 bg-primary text-white rounded-[1.5rem] py-7 text-lg font-bold"
        onClick={() => navigate('/scan')}
      >
        مسح منتج آخر
      </Button>
    </AppLayout>
  );
};

export default ProductResult;