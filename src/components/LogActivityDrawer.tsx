"use client";

import React from 'react';
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger,
  DrawerClose
} from '@/components/ui/drawer';
import { Plus, Utensils, Dumbbell, Pill, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LogActivityDrawer = () => {
  const activities = [
    { icon: Utensils, label: 'وجبة', color: 'bg-orange-50 text-orange-500' },
    { icon: Dumbbell, label: 'تمرين', color: 'bg-primary/5 text-primary' },
    { icon: Pill, label: 'دواء', color: 'bg-blue-50 text-blue-500' },
    { icon: Moon, label: 'نوم', color: 'bg-purple-50 text-purple-500' },
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="fixed bottom-24 left-6 w-14 h-14 bg-accent text-white rounded-2xl shadow-lg shadow-accent/30 flex items-center justify-center hover:scale-110 transition-transform z-40">
          <Plus size={28} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="rounded-t-[3rem] px-6 pb-10">
        <DrawerHeader className="mb-6">
          <DrawerTitle className="text-center text-xl font-black">ماذا تريد أن تسجل؟</DrawerTitle>
        </DrawerHeader>
        <div className="grid grid-cols-2 gap-4">
          {activities.map((act, i) => (
            <button 
              key={i}
              className="flex flex-col items-center gap-3 p-6 rounded-[2rem] bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className={`p-4 rounded-2xl ${act.color}`}>
                <act.icon size={24} />
              </div>
              <span className="font-bold text-sm">{act.label}</span>
            </button>
          ))}
        </div>
        <DrawerClose asChild>
          <Button variant="ghost" className="w-full mt-6 rounded-2xl font-bold text-gray-400">إلغاء</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

export default LogActivityDrawer;