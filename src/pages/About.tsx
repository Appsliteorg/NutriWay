"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
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
        <h1 className="text-2xl font-extrabold text-gray-900">عن التطبيق</h1>
      </header>

      <div className="space-y-8">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            يهدف هذا التطبيق إلى مساعدة المستخدمين على فهم جودة المنتجات الغذائية بسهولة من خلال مسح الرمز الشريطي الموجود على عبوات المنتجات.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            يعرض التطبيق تقييمًا غذائيًا مبسّطًا يساعد على اتخاذ قرار أفضل عند الشراء، دون الحاجة إلى قراءة معلومات معقدة أو مصطلحات تقنية.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            يعتمد التطبيق على تحليل بيانات غذائية عامة ويقدّمها بطريقة واضحة ومفهومة للمستخدم العربي.
          </p>
        </div>

        <div className="bg-primary/5 rounded-[2rem] p-6 border border-primary/10">
          <p className="text-sm text-primary font-bold leading-relaxed text-center">
            المعلومات المعروضة داخل التطبيق إرشادية فقط، ولا تُعد بديلاً عن الاستشارة الطبية أو الغذائية المتخصصة.
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

export default AboutPage;