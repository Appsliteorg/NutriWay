"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Camera, ShieldCheck, Lock } from 'lucide-react';
import { showError } from '@/utils/toast';

const PermissionExplanation = () => {
  const navigate = useNavigate();

  const requestPermission = async () => {
    try {
      // In a real app, we'd request permission here.
      // For this design review, we navigate to scan with preview mode enabled.
      navigate('/scan?preview=true');
    } catch (err) {
      console.error("Camera permission denied:", err);
      showError("يرجى تفعيل صلاحية الكاميرا من إعدادات المتصفح للمتابعة");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col px-8 pt-24 pb-12 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col items-center"
      >
        <div className="relative mb-10">
          <div className="w-24 h-24 bg-blue-50 rounded-[2.5rem] flex items-center justify-center shadow-sm border border-blue-100/50">
            <Camera size={40} className="text-blue-600" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-50">
            <ShieldCheck size={20} className="text-primary" />
          </div>
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-6">
          الوصول إلى الكاميرا
        </h2>
        
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 mb-8">
          <p className="text-gray-600 leading-relaxed font-medium text-lg">
            نحتاج إلى الكاميرا فقط لمسح الرمز الشريطي على المنتجات الغذائية.
            <br />
            <span className="text-primary font-bold mt-4 block">
              لا نقوم بحفظ الصور أو أي بيانات شخصية.
            </span>
          </p>
        </div>

        <div className="flex items-center gap-3 text-gray-400 mb-12">
          <Lock size={16} />
          <span className="text-xs font-bold">بياناتك مشفرة وآمنة تماماً</span>
        </div>
      </motion.div>

      <div className="space-y-4">
        <Button 
          onClick={requestPermission}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-[1.5rem] py-7 text-lg font-bold shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
        >
          السماح
        </Button>
        
        <Button 
          variant="ghost"
          onClick={() => navigate('/')}
          className="w-full text-gray-400 hover:text-gray-600 rounded-[1.5rem] py-7 text-lg font-bold"
        >
          لاحقًا
        </Button>
      </div>
    </div>
  );
};

export default PermissionExplanation;