import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Leaf } from 'lucide-react';

export default function ToastNotification() {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="flex items-center gap-3 bg-[#1D461A] text-white px-5 py-3.5 rounded-2xl shadow-xl border border-[#62C058]/40">
        <div className="w-8 h-8 rounded-full bg-[#2D8425] flex items-center justify-center shrink-0">
          <Leaf className="w-4 h-4 text-[#C5E9C1]" />
        </div>
        <span className="text-sm font-medium">{toast}</span>
      </div>
    </div>
  );
}
