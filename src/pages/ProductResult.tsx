"use client";

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductResult = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  // Placeholder data for the premium UI
  const product = {
    name: "اسم المنتج التجريبي",
    brand: "العلامة التجارية",
    barcode: code,
    rating: "صحي", // صحي, متوسط, غير صحي
    score: 85,
    reason: "يحتوي على نسبة عالية من الألياف وبروتين طبيعي مع سكر منخفض.",
    nutrients: [
      { label: "الدهون", value: "٢.٥ غ", status: "low" },
      { label: "السكريات", value: "١.٢ غ", status: "low" },
      { label: "الألياف", value: "٨.٠ غ", status: "high" },
      { label: "الصوديوم", value: "٠.١ غ", status: "low" },
    ]
  };

  const getRatingStyles = (rating: string) => {
    switch (rating) {
      case "صحي":
        return {
          bg: "bg-green-50",
          text: "text-green-700",
          border: "border-green-100",
          icon: <CheckCircle2 className="text-green-600" size={24} />,
          accent: "bg-green-600"
        };
      case "متوسط":
        return {
          bg: "bg-orange-50",
          text: "text-orange-700",
          border: "border-orange-100",
          icon: <Info className="text-orange-600" size={24} />,
          accent: "bg-orange-600"
        };
      case "غير صحي":
        return {
          bg: "bg-red-50",
          text: "text-red-700",
          border: "border-red-100",
          icon: <AlertTriangle className="text-red-600" size={24} />,
          accent: "bg-red-600"
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-700",
          border: "border-gray-100",
          icon: <Info className="text-gray-600" size={24} />,
          accent: "bg-gray-600"
        };
    }
  };

  const styles = getRatingStyles(product.rating);

  return (
    <AppLayout>
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-2xl bg-white shadow-sm border border-gray-100"
          onClick={() => navigate('/scan')}
        >
          <ArrowRight size={20} />
        </Button>
        <h1 className="text-xl font-black text-gray-900">تفاصيل المنتج</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      {/* Product Main Card */}
      <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-50 mb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-24 h-24 bg-gray-50 rounded-[2rem] flex items-center justify-center border border-gray-100 shrink-0">
            <img 
              src="/placeholder.svg" 
              alt="Product" 
              className="w-16 h-16 opacity-20"
            />
          </div>
          <div className="flex-1 pt-2">
            <h2 className="text-xl font-black text-gray-900 mb-1">{product.name}</h2>
            <p className="text-gray-400 text-sm font-bold mb-2">{product.brand}</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{product.barcode}</span>
            </div>
          </div>
        </div>

        {/* Rating Banner */}
        <div className={cn("p-5 rounded-[2rem] border flex items-center gap-4 mb-6", styles.bg, styles.border)}>
          <div className="p-3 bg-white rounded-2xl shadow-sm">
            {styles.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className={cn("text-lg font-black", styles.text)}>{product.rating}</span>
              <span className="text-xs font-bold text-gray-400">• {product.score}/١٠٠</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              {product.reason}
            </p>
          </div>
        </div>

        {/* Nutrition Grid */}
        <div className="grid grid-cols-2 gap-3">
          {product.nutrients.map((n, i) => (
            <div key={i} className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
              <p className="text-[10px] text-gray-400 font-bold mb-1">{n.label}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-gray-900">{n.value}</span>
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  n.status === 'low' ? 'bg-green-500' : n.status === 'high' ? 'bg-red-500' : 'bg-orange-500'
                )} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badge */}
      <div className="flex items-center justify-center gap-2 mb-8 text-gray-400">
        <ShieldCheck size={16} />
        <span className="text-[10px] font-bold">بيانات موثوقة من مصادر عالمية</span>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button 
          className="w-full bg-primary text-white rounded-[1.5rem] py-7 text-lg font-bold shadow-xl shadow-primary/10"
          onClick={() => navigate('/scan')}
        >
          مسح منتج آخر
        </Button>
        <Button 
          variant="ghost"
          className="w-full text-gray-400 font-bold py-6"
        >
          إضافة إلى المفضلة
        </Button>
      </div>
    </AppLayout>
  );
};

export default ProductResult;