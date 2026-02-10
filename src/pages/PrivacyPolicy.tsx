"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicyPage = () => {
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
        <h1 className="text-2xl font-extrabold text-gray-900">سياسة الخصوصية</h1>
      </header>

      <div className="space-y-8">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            نحن نحترم خصوصية المستخدمين ونلتزم بحماية بياناتهم.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            لا يقوم هذا التطبيق بجمع أو تخزين أي معلومات شخصية عن المستخدمين، ولا يتطلب إنشاء حساب أو تسجيل دخول لاستخدامه.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            يتم استخدام الكاميرا فقط لغرض مسح الرمز الشريطي على المنتجات الغذائية، ولا يتم حفظ الصور أو إرسالها أو تخزينها بأي شكل من الأشكال.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            لا يقوم التطبيق بتتبع موقع المستخدم، ولا يجمع أي بيانات تعريفية، ولا يستخدم أدوات تحليل أو تتبع خارجية.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            جميع عمليات المعالجة تتم لأغراض عرض معلومات إرشادية فقط، ولا يتم مشاركة أي بيانات مع أطراف خارجية.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            قد يتم تحديث سياسة الخصوصية هذه من وقت لآخر عند الحاجة، وسيتم نشر أي تحديث داخل التطبيق.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            باستخدامك لهذا التطبيق، فإنك توافق على سياسة الخصوصية الموضحة أعلاه.
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

export default PrivacyPolicyPage;