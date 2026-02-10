"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Scan, Leaf, Sparkles } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-between px-8 py-16 text-center overflow-hidden relative">
      {/* Sophisticated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-24 -left-24 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" 
        />
      </div>

      {/* Top Decorative Element */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md border border-white/20 rounded-full shadow-sm"
      >
        <Sparkles size={14} className="text-primary" />
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">صحتك تبدأ من هنا</span>
      </motion.div>

      {/* Central Visual Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex-1 flex items-center justify-center w-full max-w-xs"
      >
        <div className="relative">
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl animate-pulse" />
          
          {/* Main Icon Container */}
          <div className="relative w-48 h-48 bg-white rounded-[3.5rem] shadow-2xl shadow-primary/10 border border-white flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            
            {/* Animated Scanning Line */}
            <motion.div 
              animate={{ top: ["10%", "90%", "10%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 right-4 h-0.5 bg-primary/30 z-10"
            />
            
            <div className="relative z-20 flex flex-col items-center gap-3">
              <div className="p-5 bg-primary rounded-[2rem] text-white shadow-lg shadow-primary/30">
                <Scan size={48} strokeWidth={2.5} />
              </div>
              <div className="flex gap-2">
                <Leaf size={16} className="text-primary/40" />
                <ShieldCheck size={16} className="text-primary/40" />
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-50"
          >
            <ShieldCheck size={28} className="text-primary" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-50"
          >
            <Leaf size={24} className="text-green-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Content Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-sm space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-gray-900 leading-tight tracking-tight">
            افحص طعامك <span className="text-primary">بثقة</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed font-medium px-4">
            تطبيق عربي يساعدك على معرفة جودة المنتجات الغذائية بسرعة وبسهولة.
          </p>
        </div>

        {/* Primary Action */}
        <div className="pt-4">
          <Button 
            onClick={() => navigate('/permission-info')}
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-[2rem] py-8 text-xl font-bold shadow-2xl shadow-primary/20 transition-all active:scale-[0.98] group"
          >
            ابدأ الفحص
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mr-3"
            >
              <ArrowRight className="rotate-180" size={24} />
            </motion.div>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

// Helper component for the arrow icon
const ArrowRight = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default Welcome;