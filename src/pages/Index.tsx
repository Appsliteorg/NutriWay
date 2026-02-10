"use client";

import React from 'react';
import AppLayout from '@/components/AppLayout';
import HealthCard from '@/components/HealthCard';
import WaterTracker from '@/components/WaterTracker';
import HealthInsightCard from '@/components/HealthInsightCard';
import LogActivityDrawer from '@/components/LogActivityDrawer';
import { Footprints, Moon, Heart, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <AppLayout>
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">أهلاً، أحمد 👋</h1>
          <p className="text-gray-500 text-sm">أتمنى لك يوماً صحياً سعيداً</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary overflow-hidden border-2 border-white shadow-sm">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed" alt="Profile" />
        </div>
      </header>

      {/* Daily Summary Card */}
      <div className="bg-primary rounded-[2.5rem] p-6 text-white mb-8 relative overflow-hidden shadow-xl shadow-primary/20">
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium opacity-80">ملخص النشاط اليومي</span>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">اليوم، ١٢ مايو</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full border-4 border-white/20 border-t-white flex items-center justify-center">
              <span className="text-xl font-bold">٧٥٪</span>
            </div>
            <div>
              <h3 className="text-lg font-bold">أداء ممتاز!</h3>
              <p className="text-sm opacity-80">لقد حققت معظم أهدافك اليومية حتى الآن.</p>
            </div>
          </div>
          <Button className="w-full bg-white text-primary hover:bg-gray-100 rounded-2xl font-bold py-6">
            عرض التفاصيل
          </Button>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <HealthCard 
          title="الخطوات"
          value="٨,٤٣٢"
          unit="خطوة"
          icon={<Footprints size={20} />}
          trend="+١٢٪"
        />
        <HealthCard 
          title="ساعات النوم"
          value="٧:٣٠"
          unit="ساعة"
          icon={<Moon size={20} />}
          color="accent"
        />
      </div>

      {/* Water Tracker */}
      <WaterTracker />

      {/* Health Insights */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">نصائح صحية لك</h2>
          <button className="text-primary text-sm font-bold">الكل</button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <HealthInsightCard 
            title="أهمية النوم المبكر لصحة القلب"
            category="نمط حياة"
            image="https://images.unsplash.com/photo-1511295742364-917e703b5ce0?auto=format&fit=crop&q=80&w=400"
            readTime="٥ دقائق"
          />
          <HealthInsightCard 
            title="أفضل الأطعمة لتقوية المناعة"
            category="تغذية"
            image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400"
            readTime="٣ دقائق"
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">إجراءات سريعة</h2>
          <button className="text-primary text-sm font-bold">الكل</button>
        </div>
        <div className="space-y-3">
          {[
            { title: 'تسجيل وجبة الغداء', time: 'منذ ساعة', icon: '🥗' },
            { title: 'موعد طبيب الأسنان', time: 'غداً، ١٠ صباحاً', icon: '🦷' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm border border-gray-50">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
              <ChevronLeft size={18} className="text-gray-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button with Drawer */}
      <LogActivityDrawer />
    </AppLayout>
  );
};

export default Index;