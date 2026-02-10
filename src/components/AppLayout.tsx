"use client";

import React from 'react';
import BottomNav from './BottomNav';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen max-w-md mx-auto bg-[#F9FAFB] relative pb-24">
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="px-5 pt-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <BottomNav />
    </div>
  );
};

export default AppLayout;