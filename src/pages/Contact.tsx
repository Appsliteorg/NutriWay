"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const navigate = useNavigate();

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
        <h1 className="text-2xl font-extrabold text-gray-900">تواصل معنا</h1>
      </header>

      <div className="space-y-8">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            نرحّب بملاحظاتكم واقتراحاتكم التي تساعدنا على تحسين التطبيق وتقديم تجربة أفضل للمستخدمين.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
            في حال واجهت أي مشكلة أثناء استخدام التطبيق، أو كان لديك استفسار عام حول طريقة عمله، يمكنك التواصل معنا عبر البريد الإلكتروني التالي:
          </p>

          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-8 text-center">
            <p className="text-xl font-bold text-primary select-all">
              appsliteorg@gmail.com
            </p>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            نحرص على مراجعة الرسائل الواردة والرد عليها عند الإمكان.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center pb-10">
        <div className="w-16 h-1 bg-gray-100 mx-auto rounded-full mb-6" />
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">صحتي - ٢٠٢٤</p>
      </div>
    </AppLayout>
  );
};

export default ContactPage;