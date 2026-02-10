"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { 
  Globe, 
  Moon, 
  Bell, 
  Info, 
  Database, 
  ShieldCheck, 
  FileText, 
  Mail, 
  Star,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SettingsPage = () => {
  const sections = [
    {
      title: "الإعدادات",
      items: [
        { icon: Globe, label: "اللغة", value: "العربية", color: "text-blue-500", bg: "bg-blue-50" },
        { icon: Moon, label: "المظهر", value: "فاتح", color: "text-purple-500", bg: "bg-purple-50" },
        { icon: Bell, label: "التنبيهات", value: "مفعلة", color: "text-orange-500", bg: "bg-orange-50" },
      ]
    },
    {
      title: "عن التطبيق",
      items: [
        { icon: Info, label: "عن التطبيق", color: "text-primary", bg: "bg-primary/10" },
        { icon: Database, label: "مصادر البيانات", color: "text-cyan-500", bg: "bg-cyan-50" },
        { icon: ShieldCheck, label: "سياسة الخصوصية", color: "text-green-500", bg: "bg-green-50" },
        { icon: FileText, label: "شروط الاستخدام", color: "text-gray-500", bg: "bg-gray-50" },
      ]
    },
    {
      title: "الدعم",
      items: [
        { icon: Mail, label: "تواصل معنا", color: "text-indigo-500", bg: "bg-indigo-50" },
        { icon: Star, label: "قيّم التطبيق", color: "text-yellow-500", bg: "bg-yellow-50" },
      ]
    }
  ];

  return (
    <AppLayout>
      <header className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900">الإعدادات</h1>
        <p className="text-gray-500 text-sm">تحكم في تفضيلات تطبيقك ومعلوماتك</p>
      </header>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-sm font-bold text-gray-400 mb-4 px-2">{section.title}</h2>
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
              {section.items.map((item, itemIdx) => (
                <button 
                  key={itemIdx}
                  className={cn(
                    "w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors active:bg-gray-100",
                    itemIdx !== section.items.length - 1 && "border-b border-gray-50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("p-2.5 rounded-2xl", item.bg, item.color)}>
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-gray-700">{item.label}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {item.value && (
                      <span className="text-xs font-bold text-gray-400">{item.value}</span>
                    )}
                    <ChevronLeft size={18} className="text-gray-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center pb-10">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">صحتي - الإصدار ١.٠.٠</p>
        <p className="text-[10px] font-medium text-gray-300">صنع بكل حب في العالم العربي</p>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;