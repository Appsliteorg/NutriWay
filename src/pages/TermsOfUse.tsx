"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfUsePage = () => {
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
        <h1 className="text-2xl font-extrabold text-gray-900">شروط الاستخدام</h1>
      </header>

      <div className="space-y-8">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
          <p className="text-lg text-gray-700 leading-relaxed font-bold mb-8">
            يُرجى قراءة شروط الاستخدام هذه بعناية قبل استخدام التطبيق.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            يقدّم هذا التطبيق معلومات إرشادية عامة تهدف إلى مساعدة المستخدمين على فهم جودة المنتجات الغذائية بشكل مبسّط، ولا يُعد مصدرًا رسميًا أو بديلاً عن الاستشارة الطبية أو الغذائية المتخصصة.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            يتم عرض المعلومات داخل التطبيق اعتمادًا على بيانات غذائية عامة، وقد تكون هذه المعلومات غير مكتملة أو غير محدثة في بعض الحالات.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            لا يتحمّل مطوّر التطبيق أي مسؤولية عن القرارات التي يتخذها المستخدم بناءً على المعلومات المعروضة داخل التطبيق.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            يتحمّل المستخدم مسؤولية التحقق من معلومات المنتج من العبوة الأصلية أو من مصادر رسمية عند الحاجة.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-bold mb-8">
            باستخدامك لهذا التطبيق، فإنك تقرّ بموافقتك على شروط الاستخدام الموضحة أعلاه.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            قد يتم تعديل شروط الاستخدام هذه من وقت لآخر، وسيتم نشر أي تحديث داخل التطبيق.
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

export default TermsOfUsePage;