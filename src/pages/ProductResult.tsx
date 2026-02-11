"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, CheckCircle2, Info, Beaker, Loader2, WifiOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fetchProductByBarcode, ProductData } from '@/services/productService';
import { evaluateNutriScore, evaluateNutrient, HealthStatus } from '@/utils/ratingEngine';

const ProductResult = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<'not_found' | 'network_error' | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      if (!code) return;
      
      setLoading(true);
      setError(null);
      
      const response = await fetchProductByBarcode(code);
      
      if (response.success && response.data) {
        setProduct(response.data);
      } else {
        setError(response.error || 'not_found');
      }
      
      setLoading(false);
    };
    
    getProduct();
  }, [code]);

  if (loading) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
          <p className="text-gray-500 font-bold">جاري جلب بيانات المنتج...</p>
        </div>
      </AppLayout>
    );
  }

  if (error === 'network_error') {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
          <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mb-6">
            <WifiOff className="text-orange-500" size={40} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">خطأ في الاتصال</h2>
          <p className="text-gray-500 mb-8">يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.</p>
          <Button 
            className="w-full bg-primary text-white rounded-2xl py-6 font-bold"
            onClick={() => navigate(0)} // Refresh
          >
            إعادة المحاولة
          </Button>
        </div>
      </AppLayout>
    );
  }

  if (error === 'not_found' || !product) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
          <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mb-6">
            <AlertCircle className="text-red-500" size={40} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">عذراً، المنتج غير موجود</h2>
          <p className="text-gray-500 mb-8">لم نتمكن من العثور على معلومات لهذا المنتج في قاعدة بياناتنا.</p>
          <Button 
            className="w-full bg-primary text-white rounded-2xl py-6 font-bold"
            onClick={() => navigate('/scan')}
          >
            مسح منتج آخر
          </Button>
        </div>
      </AppLayout>
    );
  }

  const health = evaluateNutriScore(product.nutriscore_grade);

  const indicators = [
    { label: "السكر", value: product.nutriments?.sugars_100g || 0, ...evaluateNutrient(product.nutriments?.sugars_100g, 'sugar') },
    { label: "الدهون", value: product.nutriments?.fat_100g || 0, ...evaluateNutrient(product.nutriments?.fat_100g, 'fat') },
    { label: "الملح", value: product.nutriments?.salt_100g || 0, ...evaluateNutrient(product.nutriments?.salt_100g, 'salt') },
  ];

  const getStatusConfig = (status: HealthStatus) => {
    switch (status) {
      case "success":
        return {
          bg: "bg-green-500",
          lightBg: "bg-green-50",
          text: "text-green-700",
          icon: <CheckCircle2 className="text-white" size={32} />,
          border: "border-green-100"
        };
      case "warning":
        return {
          bg: "bg-orange-500",
          lightBg: "bg-orange-50",
          text: "text-orange-700",
          icon: <Info className="text-white" size={32} />,
          border: "border-orange-100"
        };
      case "danger":
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

  const config = getStatusConfig(health.status);

  return (
    <AppLayout>
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

      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-32 h-32 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center justify-center mb-4 overflow-hidden">
          {product.image_url ? (
            <img 
              src={product.image_url} 
              alt={product.product_name} 
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <img 
              src="/placeholder.svg" 
              alt="Product" 
              className="w-20 h-20 opacity-10"
            />
          )}
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-1">{product.product_name || "منتج غير معروف"}</h2>
        <p className="text-gray-400 font-bold">{product.brands || "علامة تجارية غير معروفة"}</p>
      </div>

      <div className={cn("rounded-[2.5rem] p-8 mb-6 text-center shadow-xl shadow-black/5 border", config.lightBg, config.border)}>
        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg", config.bg)}>
          {config.icon}
        </div>
        <h3 className={cn("text-3xl font-black mb-2", config.text)}>
          {health.emoji} {health.label}
        </h3>
        <p className="text-gray-600 font-medium">
          {health.status === 'success' ? 'خيار ممتاز غني بالعناصر الغذائية المفيدة.' : 
           health.status === 'warning' ? 'يحتوي على بعض المكونات التي يجب تناولها باعتدال.' : 
           health.status === 'danger' ? 'يحتوي على نسبة عالية من السكر أو الدهون أو الملح.' :
           'لا تتوفر معلومات كافية لتقييم هذا المنتج.'}
        </p>
      </div>

      <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-50 mb-6">
        <h4 className="text-sm font-bold text-gray-400 mb-6 text-right">المؤشرات الغذائية (لكل ١٠٠ جم)</h4>
        <div className="space-y-6">
          {indicators.map((ind, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{ind.label}</span>
                    <span className="text-xs text-gray-400 font-medium">({ind.value} جم)</span>
                  </div>
                  <span className={cn(
                    "text-xs font-bold px-3 py-1 rounded-full",
                    ind.status === 'success' ? 'bg-green-50 text-green-600' : 
                    ind.status === 'warning' ? 'bg-orange-50 text-orange-600' : 
                    ind.status === 'danger' ? 'bg-red-50 text-red-600' :
                    'bg-gray-50 text-gray-600'
                  )}>
                    {ind.label === "غير متوفر" ? "غير متوفر" : ind.label}
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      ind.status === 'success' ? 'bg-green-500' : 
                      ind.status === 'warning' ? 'bg-orange-500' : 
                      ind.status === 'danger' ? 'bg-red-500' :
                      'bg-gray-200'
                    )}
                    style={{ width: ind.width }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {product.additives_n !== undefined && product.additives_n > 0 && (
        <div className="bg-red-50/50 border border-red-100 rounded-[2rem] p-5 flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
            <Beaker className="text-red-600" size={24} />
          </div>
          <p className="text-sm font-bold text-red-700 leading-relaxed">
            يحتوي هذا المنتج على {product.additives_n} من المواد المضافة الصناعية.
          </p>
        </div>
      )}

      <div className="space-y-4 pb-10">
        <Button 
          className="w-full bg-primary text-white rounded-[1.5rem] py-7 text-lg font-bold shadow-xl shadow-primary/20"
          onClick={() => navigate('/scan')}
        >
          مسح منتج جديد
        </Button>
      </div>
    </AppLayout>
  );
};

export default ProductResult;