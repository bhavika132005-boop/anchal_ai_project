import React from 'react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast } = useCart();

  if (!toast.show) return null;

  return (
    <div className="fixed bottom-20 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
      <div className="bg-surface-container-high/95 backdrop-blur-xl border border-primary/30 text-on-surface px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 max-w-sm pointer-events-auto">
        <span className="material-symbols-outlined text-primary text-[20px]">
          check_circle
        </span>
        <span className="font-label-md text-xs font-medium truncate">
          {toast.message}
        </span>
      </div>
    </div>
  );
}
