import React from 'react';
import { CheckCircle2, Heart, Sparkles, X, ShoppingBag } from 'lucide-react';

export default function Toast({ toast, onDismiss }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-stone-900 text-white px-4 py-3.5 rounded-2xl shadow-2xl border border-stone-800 flex items-center gap-3 max-w-sm">
        <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0 text-white shadow-md">
          {toast.type === 'wishlist' ? (
            <Heart className="w-4 h-4 fill-white" />
          ) : toast.type === 'order' ? (
            <Sparkles className="w-4 h-4 text-amber-300" />
          ) : (
            <ShoppingBag className="w-4 h-4" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs font-black tracking-tight">{toast.title}</p>
          {toast.message && (
            <p className="text-[11px] text-stone-400 truncate">{toast.message}</p>
          )}
        </div>

        <button
          onClick={onDismiss}
          className="text-stone-400 hover:text-white p-1 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
