"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, ZapOff, CameraOff, Search, History, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { showError } from '@/utils/toast';
import { cn } from '@/lib/utils';

const ScanPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const [hasFlash, setHasFlash] = useState(false);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const isPreviewMode = searchParams.get('preview') === 'true' || true; 

  useEffect(() => {
    if (isPreviewMode) return;

    const startScanner = async () => {
      try {
        const html5QrCode = new Html5Qrcode("reader");
        scannerRef.current = html5QrCode;

        const config = {
          fps: 15,
          qrbox: { width: 280, height: 200 },
          aspectRatio: 1.0,
          formatsToSupport: [
            Html5QrcodeSupportedFormats.EAN_13,
            Html5QrcodeSupportedFormats.EAN_8,
            Html5QrcodeSupportedFormats.UPC_A,
            Html5QrcodeSupportedFormats.UPC_E,
          ]
        };

        await html5QrCode.start(
          { facingMode: "environment" },
          config,
          (decodedText) => {
            if (isScanning) {
              setIsScanning(false);
              html5QrCode.stop().then(() => {
                navigate(`/product/${decodedText}`);
              });
            }
          },
          undefined
        );

        const track = (html5QrCode as any).getRunningTrack();
        if (track) {
          const capabilities = track.getCapabilities() as any;
          if (capabilities.torch) {
            setHasFlash(true);
          }
        }
      } catch (err) {
        console.error("Scanner failed:", err);
        showError("فشل تشغيل الكاميرا. يرجى التحقق من الصلاحيات.");
        navigate('/permission-info');
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [navigate, isScanning, isPreviewMode]);

  const toggleFlash = async () => {
    if (scannerRef.current && hasFlash) {
      try {
        const track = (scannerRef.current as any).getRunningTrack();
        await track?.applyConstraints({
          advanced: [{ torch: !isFlashOn }]
        } as any);
        setIsFlashOn(!isFlashOn);
      } catch (err) {
        console.error("Flash toggle failed:", err);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col overflow-hidden font-tajawal">
      {/* Immersive Background */}
      {isPreviewMode ? (
        <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] flex items-center justify-center">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center blur-sm" />
          <div className="relative z-10 flex flex-col items-center gap-4 opacity-40">
            <CameraOff size={48} className="text-white/50" />
            <span className="text-white/50 text-sm font-medium tracking-widest uppercase">وضع المعاينة</span>
          </div>
        </div>
      ) : (
        <div id="reader" className="absolute inset-0 w-full h-full object-cover" />
      )}

      {/* Top Controls - Glassmorphism */}
      <div className="relative z-20 p-6 flex justify-between items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="w-12 h-12 bg-white/10 backdrop-blur-xl text-white rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
          onClick={() => navigate('/')}
        >
          <X size={22} />
        </Button>
        
        <div className="flex gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-12 h-12 bg-white/10 backdrop-blur-xl text-white rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={22} />
          </Button>
          {(hasFlash || isPreviewMode) && (
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "w-12 h-12 backdrop-blur-xl rounded-2xl border transition-all",
                isFlashOn ? "bg-primary text-white border-primary" : "bg-white/10 text-white border-white/10 hover:bg-white/20"
              )}
              onClick={toggleFlash}
            >
              {isFlashOn ? <ZapOff size={22} /> : <Zap size={22} />}
            </Button>
          )}
        </div>
      </div>

      {/* Main Scanning Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8">
        <AnimatePresence>
          {showSearch && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-6 right-6 z-30"
            >
              <div className="bg-white/10 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/20 shadow-2xl">
                <Input 
                  placeholder="ابحث عن منتج بالاسم..." 
                  className="bg-transparent border-none text-white placeholder:text-white/40 text-right h-12 focus-visible:ring-0"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative w-72 h-56">
          {/* Premium Scanning Frame */}
          <div className="absolute inset-0 border-2 border-white/10 rounded-[2.5rem]" />
          
          {/* Animated Corners */}
          <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-primary rounded-tl-[1.5rem]" />
          <div className="absolute -top-1 -right-1 w-10 h-10 border-t-4 border-r-4 border-primary rounded-tr-[1.5rem]" />
          <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-4 border-l-4 border-primary rounded-bl-[1.5rem]" />
          <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-primary rounded-br-[1.5rem]" />
          
          {/* Scanning Beam */}
          <motion.div 
            animate={{ 
              top: ["10%", "90%", "10%"],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-6 right-6 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(var(--primary),0.8)] z-20"
          />

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-16 h-16 border-2 border-dashed border-white rounded-full animate-spin-slow" />
          </div>
        </div>
        
        <div className="mt-12 text-center space-y-2">
          <h3 className="text-white text-xl font-black tracking-wide">امسح الرمز الشريطي</h3>
          <p className="text-white/50 text-sm font-medium">ضع الرمز داخل الإطار للتعرف عليه تلقائياً</p>
        </div>
      </div>

      {/* Bottom Quick Actions */}
      <div className="relative z-20 p-10 flex justify-center gap-8">
        <button className="flex flex-col items-center gap-2 group">
          <div className="w-14 h-14 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/10 group-active:scale-90 transition-all">
            <History size={20} className="text-white/70" />
          </div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">السجل</span>
        </button>
        
        <button className="flex flex-col items-center gap-2 group">
          <div className="w-14 h-14 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/10 group-active:scale-90 transition-all">
            <Info size={20} className="text-white/70" />
          </div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">تعليمات</span>
        </button>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default ScanPage;