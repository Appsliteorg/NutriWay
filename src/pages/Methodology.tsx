"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MethodologyPage = () => {
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
        <h1 className="text-2xl font-extrabold text-gray-900">كيف يعمل التقييم الغذائي</h1>
      </header>

      <div className="space-y-8">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            يعتمد التقييم الغذائي في هذا التطبيق على تحليل مجموعة من المعلومات الغذائية العامة المرتبطة بالمنتج، مثل محتوى السكر، الدهون، الملح، ودرجة المعالجة الصناعية.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            يتم تحويل هذه المعلومات إلى تقييم مبسّط يساعد المستخدم على فهم جودة المنتج بسرعة، دون الحاجة إلى معرفة تفصيلية بالتغذية أو قراءة جداول معقدة.
          </p>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
              يعرض التطبيق نتيجة واحدة واضحة من ثلاث حالات:
            </p>
            <ul className="space-y-3 pr-4">
              <li className="flex items-center gap-3 text-green-600 font-bold">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                صحي
              </li>
              <li className="flex items-center gap-3 text-orange-600 font-bold">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                متوسط
              </li>
              <li className="flex items-center gap-3 text-red-600 font-bold">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                غير صحي
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            يتم تحديد النتيجة بناءً على مؤشرات غذائية معروفة، ويتم عرض سبب مختصر يساعد على فهم التقييم بشكل مباشر.
          </p>
        </div>

        <div className="bg-primary/5 rounded-[2rem] p-6 border border-primary/10">
          <p className="text-sm text-primary font-bold leading-relaxed text-center">
            هذا التقييم مخصص لأغراض إرشادية فقط، ويهدف إلى المساعدة في اتخاذ قرارات غذائية أفضل، ولا يُعد تشخيصًا طبيًا أو بديلاً عن استشارة مختصين في التغذية أو الصحة.
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

export default MethodologyPage;