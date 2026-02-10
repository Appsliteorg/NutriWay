"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Camera, CheckCircle2 } from 'lucide-react';

const PermissionExplanation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col px-8 pt-20 pb-12 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 flex flex-col items-center"
      >
        <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8">
          <Camera size={32} className="text-blue-600" />
        </div>

        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          لماذا نحتاج الكاميرا؟
        </h2>
        
        <p className="text-gray-500 leading-relaxed mb-10 font-medium">
          نستخدم الكاميرا لمسح الباركود الخاص بالمنتجات الغذائية وتحليل مكوناتها فوراً.
        </p>

        <div className="w-full space-y-4 text-right mb-12">
          {[
            'تحليل سريع للمكونات',
            'تنبيهات الحساسية والسكريات',
            'بدائل صحية مقترحة'
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <CheckCircle2 size={20} className="text-primary shrink-0" />
              <span className="text-sm font-bold text-gray-700">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <Button 
        onClick={() => navigate('/scan')}
        className="w-full bg-primary text-white rounded-[1.5rem] py-7 text-lg font-bold shadow-lg"
      >
        متابعة
      </Button>
    </div>
  );
};

export default PermissionExplanation;