"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, ZapOff, CameraOff, Search, History, Info, Check } from 'lucide-react';
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
  const [isDetected, setIsDetected] = useState(false);
  const [cameraError, setCameraError] = useState(false);

  const isPreviewMode = searchParams.get('preview') === 'true'; 

  const handleDetection = (decodedText: string) => {
    if (!isScanning || isDetected) return;
    
    setIsDetected(true);
    setIsScanning(false);

    // Haptic feedback
    if (window.navigator.vibrate) {
      window.navigator.vibrate(40);
    }

    // Stop scanner immediately
    if (scannerRef.current?.isScanning) {
      scannerRef.current.stop().then(() => {
        setTimeout(() => {
          navigate(`/product/${decodedText}`);
        }, 600);
      }).catch(console.error);
    } else {
      setTimeout(() => {
        navigate(`/product/${decodedText}`);
      }, 600);
    }
  };

  useEffect(() => {
    if (isPreviewMode) {
      // Simulation for preview mode
      const timer = setTimeout(() => {
        handleDetection("1234567890123");
      }, 4000);
      return () => clearTimeout(timer);
    }

    const startScanner = async () => {
      try {
        const html5QrCode = new Html5Qrcode("reader");
        scannerRef.current = html5QrCode;

        const config = {
          fps: 20,
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
          (decodedText) => handleDetection(decodedText),
          undefined
        );

        // Check for flash capability
        const track = (html5QrCode as any).getRunningTrack();
        if (track) {
          const capabilities = track.getCapabilities() as any;
          if (capabilities.torch) {
            setHasFlash(true);
          }
        }
      } catch (err) {
        console.error("Scanner failed:", err);
        setCameraError(true);
        showError("تعذر تشغيل الكاميرا. تأكد من منح الإذن.");
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [navigate, isPreviewMode]);

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex flex-col overflow-hidden font-tajawal"
    >
      {/* Camera Feed Container */}
      <div id="reader" className="absolute inset-0 w-full h-full object-cover" />

      {/* Error State Overlay */}
      {cameraError && !isPreviewMode && (
        <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-50 px-10 text-center">
          <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mb-6">
            <CameraOff size={40} className="text-red-500" />
          </div>
          <h3 className="text-white text-xl font-black mb-4">تعذر تشغيل الكاميرا</h3>
          <p className="text-white/60 mb-8 leading-relaxed">تأكد من منح الإذن للكاميرا من إعدادات المتصفح للمتابعة.</p>
          <Button 
            onClick={() => navigate('/permission-info')}
            className="bg-primary text-white rounded-2xl px-8 py-6 font-bold"
          >
            عرض التعليمات
          </Button>
        </div>
      )}

      {/* Detection Flash Overlay */}
      <AnimatePresence>
        {isDetected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white z-[60] pointer-events-none"
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>

      {/* Top Controls */}
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
          <motion.div 
            animate={isDetected ? { scale: 1.05, borderColor: "rgba(255,255,255,0.8)" } : {}}
            className="absolute inset-0 border-2 border-white/10 rounded-[2.5rem] transition-colors duration-300" 
          />
          
          {/* Animated Corners */}
          <div className={cn("absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 rounded-tl-[1.5rem] transition-colors duration-300", isDetected ? "border-white" : "border-primary")} />
          <div className={cn("absolute -top-1 -right-1 w-10 h-10 border-t-4 border-r-4 rounded-tr-[1.5rem] transition-colors duration-300", isDetected ? "border-white" : "border-primary")} />
          <div className={cn("absolute -bottom-1 -left-1 w-10 h-10 border-b-4 border-l-4 rounded-bl-[1.5rem] transition-colors duration-300", isDetected ? "border-white" : "border-primary")} />
          <div className={cn("absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 rounded-br-[1.5rem] transition-colors duration-300", isDetected ? "border-white" : "border-primary")} />
          
          {/* Scanning Beam */}
          {!isDetected && !cameraError && (
            <motion.div 
              animate={{ 
                top: ["10%", "90%", "10%"],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-6 right-6 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(var(--primary),0.8)] z-20"
            />
          )}

          {/* Success Icon */}
          <AnimatePresence>
            {isDetected && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center z-30"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Check size={40} className="text-primary" strokeWidth={4} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Center Decoration */}
          {!isDetected && !cameraError && (
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-16 h-16 border-2 border-dashed border-white rounded-full animate-spin-slow" />
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center space-y-2">
          <h3 className="text-white text-xl font-black tracking-wide">
            {isDetected ? "تم التعرف على المنتج" : "امسح الرمز الشريطي"}
          </h3>
          <p className="text-white/50 text-sm font-medium">
            {isDetected ? "جاري جلب البيانات..." : "ضع الرمز داخل الإطار للتعرف عليه تلقائياً"}
          </p>
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
    </motion.div>
  );
};

export default ScanPage;