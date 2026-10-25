import React from 'react';
import { Heart, Sparkles, X, ShoppingBag } from 'lucide-react';

export default function Toast({ toast, onDismiss }) {
  if (!toast) return null;

  const isWishlist = toast.type === 'wishlist';

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-stone-900/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-2xl border border-stone-800 flex items-center gap-3.5 max-w-sm">
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isWishlist ? 'bg-rose-500/20 text-rose-400' : 'bg-red-500/20 text-red-400'
        }`}>
          {isWishlist ? <Heart className="w-4 h-4 fill-rose-400" /> : <ShoppingBag className="w-4 h-4" />}
        </div>

        <div className="flex-1 min-w-0 pr-2">
          <h5 className="text-xs font-bold leading-tight flex items-center gap-1.5">
            <span>{toast.title}</span>
            <Sparkles className="w-3 h-3 text-amber-400" />
          </h5>
          {toast.message && (
            <p className="text-[11px] text-stone-400 truncate mt-0.5">
              {toast.message}
            </p>
          )}
        </div>

        <button
          onClick={onDismiss}
          className="text-stone-500 hover:text-stone-300 transition-colors p-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
