"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Scan, Apple, Heart } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-between px-8 py-16 text-center overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm">
        {/* Central Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-12"
        >
          <div className="w-48 h-48 bg-white rounded-[3.5rem] shadow-2xl shadow-primary/10 flex items-center justify-center relative overflow-hidden border border-white">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            
            {/* Animated Scanning Line */}
            <motion.div 
              animate={{ top: ["20%", "80%", "20%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-8 right-8 h-0.5 bg-primary/40 blur-[1px] z-10"
            />
            
            <div className="relative z-20 flex flex-col items-center gap-2">
              <div className="p-4 bg-primary/10 rounded-3xl text-primary">
                <Scan size={48} strokeWidth={1.5} />
              </div>
              <div className="flex gap-2">
                <Apple size={20} className="text-primary/40" />
                <Heart size={20} className="text-primary/40" />
              </div>
            </div>
          </div>
          
          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-gray-50"
          >
            <ShieldCheck className="text-primary" size={24} />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            افحص طعامك بثقة
          </h1>
          
          <p className="text-lg text-gray-500 leading-relaxed mb-12 font-medium px-4">
            تطبيق عربي يساعدك على معرفة جودة المنتجات الغذائية بسرعة وبسهولة.
          </p>
        </motion.div>
      </div>

      {/* CTA Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-sm"
      >
        <Button 
          onClick={() => navigate('/permission-info')}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-[2rem] py-8 text-xl font-bold shadow-2xl shadow-primary/30 transition-all active:scale-[0.98] group"
        >
          ابدأ الفحص
          <motion.span 
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mr-2"
          >
            ←
          </motion.span>
        </Button>
        
        <p className="mt-6 text-xs text-gray-400 font-bold tracking-widest uppercase">
          صحتك تبدأ من هنا
        </p>
      </motion.div>
    </div>
  );
};

export default Welcome;