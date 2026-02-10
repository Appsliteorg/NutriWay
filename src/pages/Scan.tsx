"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import { motion } from 'framer-motion';
import { X, Zap, ZapOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { showError } from '@/utils/toast';

const ScanPage = () => {
  const navigate = useNavigate();
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const [hasFlash, setHasFlash] = useState(false);
  const [isFlashOn, setIsFlashOn] = useState(false);

  useEffect(() => {
    const startScanner = async () => {
      try {
        const html5QrCode = new Html5Qrcode("reader");
        scannerRef.current = html5QrCode;

        const config = {
          fps: 10,
          qrbox: { width: 280, height: 180 },
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

        // Check for flash support
        const track = html5QrCode.getRunningTrack();
        if (track) {
          const capabilities = track.getCapabilities() as any;
          if (capabilities.torch) {
            setHasFlash(true);
          }
        }
      } catch (err) {
        console.error("Scanner initialization failed:", err);
        showError("فشل تشغيل الكاميرا. يرجى التأكد من منح الصلاحيات.");
        navigate('/permission-info');
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [navigate, isScanning]);

  const toggleFlash = async () => {
    if (scannerRef.current && hasFlash) {
      try {
        const track = scannerRef.current.getRunningTrack();
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
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Camera Preview Container */}
      <div id="reader" className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay UI */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-black/20 backdrop-blur-md text-white rounded-2xl hover:bg-black/40"
            onClick={() => navigate('/')}
          >
            <X size={24} />
          </Button>
          
          {hasFlash && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-black/20 backdrop-blur-md text-white rounded-2xl hover:bg-black/40"
              onClick={toggleFlash}
            >
              {isFlashOn ? <ZapOff size={24} /> : <Zap size={24} />}
            </Button>
          )}
        </div>

        {/* Scanning Frame */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="relative w-72 h-48">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-2xl" />
            
            {/* Scanning Line Animation */}
            <motion.div 
              animate={{ top: ["10%", "90%", "10%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-4 right-4 h-0.5 bg-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.5)] z-20"
            />
          </div>
          
          <p className="mt-12 text-white font-bold text-lg text-center drop-shadow-md">
            وجّه الكاميرا نحو الرمز الشريطي
          </p>
        </div>

        {/* Footer Info */}
        <div className="p-10 text-center">
          <p className="text-white/60 text-xs font-medium">
            يتم التعرف على الرمز تلقائياً
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;