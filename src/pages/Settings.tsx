"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { 
  Info, 
  Activity, 
  Database, 
  ShieldCheck, 
  FileText, 
  Scale, 
  Mail, 
  Star,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SettingsPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "عن التطبيق",
      items: [
        { icon: Info, label: "عن التطبيق", color: "text-primary", bg: "bg-primary/10", path: "/about" },
        { icon: Activity, label: "كيف يعمل التقييم الغذائي", color: "text-blue-500", bg: "bg-blue-50", path: "/methodology" },
        { icon: Database, label: "مصادر البيانات", color: "text-cyan-500", bg: "bg-cyan-50", path: "/data-sources" },
      ]
    },
    {
      title: "الخصوصية والقانون",
      items: [
        { icon: ShieldCheck, label: "سياسة الخصوصية", color: "text-green-500", bg: "bg-green-50", path: "/privacy-policy" },
        { icon: FileText, label: "شروط الاستخدام", color: "text-gray-500", bg: "bg-gray-50", path: "/terms-of-use" },
        { icon: Scale, label: "التراخيص", color: "text-amber-500", bg: "bg-amber-50" },
      ]
    },
    {
      title: "الدعم",
      items: [
        { icon: Mail, label: "تواصل معنا", color: "text-indigo-500", bg: "bg-indigo-50", path: "/contact" },
        { icon: Star, label: "قيّم التطبيق", color: "text-yellow-500", bg: "bg-yellow-50" },
      ]
    }
  ];

  return (
    <AppLayout>
      <header className="mb-10">
        <h1 className="text-2xl font-extrabold text-gray-900">عن التطبيق</h1>
        <p className="text-gray-500 text-sm">معلومات حول كيفية عمل التطبيق وخصوصيتك</p>
      </header>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-sm font-bold text-gray-400 mb-4 px-2">{section.title}</h2>
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
              {section.items.map((item, itemIdx) => (
                <button 
                  key={itemIdx}
                  onClick={() => item.path && navigate(item.path)}
                  className={cn(
                    "w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors active:bg-gray-100",
                    itemIdx !== section.items.length - 1 && "border-b border-gray-50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("p-2.5 rounded-2xl", item.bg, item.color)}>
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-gray-700 text-sm">{item.label}</span>
                  </div>
                  
                  <ChevronLeft size={18} className="text-gray-300" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center pb-10">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/5 rounded-2xl mb-4">
          <ShieldCheck className="text-primary/40" size={24} />
        </div>
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">صحتي - الإصدار ١.٠.٠</p>
        <p className="text-[10px] font-medium text-gray-300">صنع بكل حب في العالم العربي</p>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;