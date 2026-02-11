"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LicensesPage = () => {
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
        <h1 className="text-2xl font-extrabold text-gray-900">التراخيص</h1>
      </header>

      <div className="space-y-8">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
          <p className="text-lg text-gray-700 leading-relaxed font-bold mb-6">
            يستخدم هذا التطبيق الأذونات التالية:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">١. الكاميرا:</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                يتم استخدامها فقط لمسح الرمز الشريطي للمنتجات الغذائية.
                <br />
                لا يتم حفظ الصور أو تخزينها أو مشاركتها.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed font-medium">
              لا يطلب التطبيق أي أذونات إضافية تتعلق بالموقع أو التخزين أو جهات الاتصال.
            </p>

            <p className="text-gray-600 leading-relaxed font-medium">
              يتم طلب الإذن عند الحاجة فقط ويمكن للمستخدم رفضه في أي وقت من إعدادات الجهاز.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center pb-10">
        <div className="w-16 h-1 bg-gray-100 mx-auto rounded-full mb-6" />
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">صحتي - ٢٠٢٤</p>
      </div>
    </AppLayout>
  );
};

export default LicensesPage;