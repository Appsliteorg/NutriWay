"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Activity, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'الرئيسية' },
    { path: '/activity', icon: Activity, label: 'نشاطي' },
    { path: '/notifications', icon: Bell, label: 'التنبيهات' },
    { path: '/profile', icon: User, label: 'حسابي' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 safe-bottom z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 transition-all duration-300",
                isActive ? "text-primary scale-110" : "text-gray-400 hover:text-gray-600"
              )}
            >
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className={cn("text-[10px] font-bold", isActive ? "opacity-100" : "opacity-0")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;