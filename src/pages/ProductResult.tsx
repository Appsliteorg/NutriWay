"use client";

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, CheckCircle2, Info, ShieldAlert, Beaker } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductResult = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  // Mock data logic for preview
  const isMockPreview = code === "1234567890123";
  
  const product = {
    name: isMockPreview ? "بسكويت الشوكولاتة الداكنة" : "منتج غذائي",
    brand: isMockPreview ? "حلويات السعادة" : "العلامة التجارية",
    status: isMockPreview ? "غير صحي" : "صحي",
    explanation: isMockPreview 
      ? "يحتوي على نسبة سكر مرتفعة جداً" 
      : "خيار ممتاز غني بالألياف الطبيعية",
    indicators: [
      { label: "السكر", level: isMockPreview ? "مرتفع" : "منخفض", status: isMockPreview ? "danger" : "success" },
      { label: "الدهون", level: isMockPreview ? "متوسط" : "منخفض", status: isMockPreview ? "warning" : "success" },
      { label: "الملح", level: isMockPreview ? "منخفض" : "منخفض", status: "success" },
    ],
    hasAdditives: isMockPreview,
    additivesText: "يحتوي على مواد مضافة صناعية"
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "صحي":
        return {
          bg: "bg-green-500",
          lightBg: "bg-green-50",
          text: "text-green-700",
          icon: <CheckCircle2 className="text-white" size={32} />,
          border: "border-green-100"
        };
      case "متوسط":
        return {
          bg: "bg-orange-500",
          lightBg: "bg-orange-50",
          text: "text-orange-700",
          icon: <Info className="text-white" size={32} />,
          border: "border-orange-100"
        };
      case "غير صحي":
        return {
          bg: "bg-red-500",
          lightBg: "bg-red-50",
          text: "text-red-700",
          icon: <AlertCircle className="text-white" size={32} />,
          border: "border-red-100"
        };
      default:
        return {
          bg: "bg-gray-500",
          lightBg: "bg-gray-50",
          text: "text-gray-700",
          icon: <Info className="text-white" size={32} />,
          border: "border-gray-100"
        };
    }
  };

  const config = getStatusConfig(product.status);

  return (
    <AppLayout>
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-2xl bg-white shadow-sm border border-gray-100"
          onClick={() => navigate('/')}
        >
          <ArrowRight size={20} />
        </Button>
        <h1 className="text-lg font-bold text-gray-900">تفاصيل المنتج</h1>
        <div className="w-10" />
      </header>

      {/* Product Info */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-32 h-32 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="Product" 
            className="w-20 h-20 opacity-10"
          />
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-1">{product.name}</h2>
        <p className="text-gray-400 font-bold">{product.brand}</p>
      </div>

      {/* Primary Health Card */}
      <div className={cn("rounded-[2.5rem] p-8 mb-6 text-center shadow-xl shadow-black/5 border", config.lightBg, config.border)}>
        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg", config.bg)}>
          {config.icon}
        </div>
        <h3 className={cn("text-3xl font-black mb-2", config.text)}>{product.status}</h3>
        <p className="text-gray-600 font-medium">{product.explanation}</p>
      </div>

      {/* Nutritional Indicators */}
      <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-50 mb-6">
        <h4 className="text-sm font-bold text-gray-400 mb-6 text-right">المؤشرات الغذائية</h4>
        <div className="space-y-6">
          {product.indicators.map((ind, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900">{ind.label}</span>
                  <span className={cn(
                    "text-xs font-bold px-3 py-1 rounded-full",
                    ind.status === 'success' ? 'bg-green-50 text-green-600' : 
                    ind.status === 'warning' ? 'bg-orange-50 text-orange-600' : 
                    'bg-red-50 text-red-600'
                  )}>
                    {ind.level}
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      ind.status === 'success' ? 'bg-green-500 w-1/3' : 
                      ind.status === 'warning' ? 'bg-orange-500 w-2/3' : 
                      'bg-red-500 w-full'
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additives Section */}
      {product.hasAdditives && (
        <div className="bg-red-50/50 border border-red-100 rounded-[2rem] p-5 flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
            <Beaker className="text-red-600" size={24} />
          </div>
          <p className="text-sm font-bold text-red-700 leading-relaxed">
            {product.additivesText}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-4 pb-10">
        <Button 
          className="w-full bg-primary text-white rounded-[1.5rem] py-7 text-lg font-bold shadow-xl shadow-primary/20"
          onClick={() => navigate('/scan')}
        >
          مسح منتج جديد
        </Button>
        <Button 
          variant="ghost"
          className="w-full text-gray-400 font-bold py-4"
        >
          إضافة إلى المفضلة
        </Button>
      </div>
    </AppLayout>
  );
};

export default ProductResult;