import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistItems,
  onAddToCart,
  onRemoveWishlist,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity" 
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/70">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                <Heart className="w-5 h-5 fill-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-black font-heading text-stone-900">Your Wishlist</h3>
                <p className="text-xs text-stone-500">{wishlistItems.length} favorites saved</p>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-stone-100 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-stone-800">No favorites yet</h4>
                <p className="text-xs text-stone-400 max-w-xs mx-auto mt-1 mb-4">
                  Tap the heart icon on any dish card to save it for quick ordering later!
                </p>
                <button
                  onClick={onClose}
                  className="bg-stone-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex items-center gap-4 group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl border border-stone-200 flex-shrink-0 group-hover:scale-105 transition-transform"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-black text-stone-900 truncate font-heading">
                      {item.name}
                    </h5>
                    <p className="text-xs font-bold text-red-600">₹{item.price.toFixed(2)}</p>
                    
                    <button
                      onClick={() => {
                        onAddToCart(item);
                        onRemoveWishlist(item.id);
                      }}
                      className="mt-2 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm transition-all cursor-pointer active:scale-95"
                    >
                      <ShoppingBag className="w-3 h-3" /> Move to Cart
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveWishlist(item.id)}
                    className="text-stone-300 hover:text-red-500 p-2 transition-colors cursor-pointer"
                    title="Remove from favorites"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistItems.length > 0 && (
            <div className="p-6 border-t border-stone-100 bg-stone-50">
              <button
                onClick={() => {
                  wishlistItems.forEach(item => onAddToCart(item));
                  onClose();
                }}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white font-black py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-xs uppercase tracking-wider"
              >
                <span>Add All ({wishlistItems.length}) To Cart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
