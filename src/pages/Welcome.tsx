"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Eye } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-8 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm flex flex-col items-center"
      >
        {/* Trust Icon/Logo Area */}
        <div className="w-24 h-24 bg-primary/10 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-sm border border-primary/5">
          <ShieldCheck size={48} className="text-primary" />
        </div>

        {/* Content */}
        <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">
          مرحبًا بك
        </h1>
        
        <p className="text-lg text-gray-500 leading-relaxed mb-12 font-medium">
          تطبيق ذكي يساعدك على اختيار أطعمة أفضل لك ولعائلتك بسهولة.
        </p>

        {/* Primary Action */}
        <div className="w-full space-y-4">
          <Button 
            onClick={() => navigate('/permission-info')}
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-[1.5rem] py-7 text-lg font-bold shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
          >
            ابدأ الآن
          </Button>

          {/* Temporary Preview Button */}
          <Button 
            variant="outline"
            onClick={() => navigate('/product/1234567890123')}
            className="w-full border-gray-200 text-gray-500 rounded-[1.5rem] py-7 text-lg font-bold hover:bg-gray-50 transition-all"
          >
            <Eye size={20} className="ml-2" />
            معاينة شاشة النتائج
          </Button>
        </div>
      </motion.div>

      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Welcome;