"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RateAppPage = () => {
  const navigate = useNavigate();

  const handleRate = () => {
    try {
      // Placeholder for app store link
      window.open('https://play.google.com/store/apps', '_blank');
    } catch (err) {
      // Silent fail as per requirements
    }
  };

  return (
    <AppLayout>
      <header className="flex items-center gap-4 mb-10">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-2xl bg-white shadow-sm border border-gray-100 shrink-0"
          onClick={() => navigate(-1)}
        >
          <ArrowRight size={20} />
        </Button>
        <h1 className="text-2xl font-extrabold text-gray-900">قيّم التطبيق</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-50 w-full">
          <h2 className="text-xl font-bold text-gray-900 mb-6">يسعدنا رأيك في التطبيق.</h2>
          
          <p className="text-lg text-gray-600 leading-relaxed font-medium mb-6">
            إذا أعجبك التطبيق أو كان لديك اقتراح لتحسينه، يمكنك تقييمه عبر متجر التطبيقات.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed font-medium mb-10">
            ملاحظاتك تساعدنا على تطوير التطبيق وتقديم تجربة أفضل للجميع.
          </p>

          <Button 
            onClick={handleRate}
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-[1.5rem] py-7 text-lg font-bold shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
          >
            تقييم الآن
          </Button>
        </div>
      </div>

      <div className="mt-12 text-center pb-10">
        <div className="w-16 h-1 bg-gray-100 mx-auto rounded-full mb-6" />
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">صحتي - ٢٠٢٤</p>
      </div>
    </AppLayout>
  );
};

export default RateAppPage;