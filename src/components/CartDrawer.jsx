import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  CheckCircle2, 
  Bike 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckoutSuccess,
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const freeShippingThreshold = 499;
  const isFreeShipping = rawSubtotal >= freeShippingThreshold || rawSubtotal === 0;
  const shippingFee = isFreeShipping ? 0 : 49;
  const finalTotal = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setIsApplyingPromo(true);
    setPromoError('');

    setTimeout(() => {
      setIsApplyingPromo(false);
      if (promoCode.trim().toUpperCase() === 'BITE20') {
        setDiscountPercent(20);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      } else {
        setPromoError('Invalid coupon code. Try "BITE20"!');
      }
    }, 400);
  };

  const handleCheckout = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#f59e0b', '#10b981', '#6366f1'],
    });

    onCheckoutSuccess({
      orderId: 'BU-' + Math.floor(100000 + Math.random() * 900000),
      items: cartItems,
      total: finalTotal,
      savings: discountAmount,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity" 
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/70">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-500/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black font-heading text-stone-900">Your Food Basket</h3>
                <p className="text-xs text-stone-500">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items ready to savor
                </p>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress bar */}
          <div className="bg-amber-50 px-6 py-2.5 border-b border-amber-100 text-xs font-semibold text-amber-900 flex items-center gap-2">
            <Bike className="w-4 h-4 text-amber-600 flex-shrink-0" />
            {isFreeShipping ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Congratulations! You unlocked FREE Delivery!
              </span>
            ) : (
              <span>
                Add <strong className="text-red-600">₹{(freeShippingThreshold - rawSubtotal).toFixed(2)}</strong> more for <strong>FREE Delivery</strong>
              </span>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-stone-100 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-stone-800">Your basket is empty</h4>
                <p className="text-xs text-stone-400 max-w-xs mx-auto mt-1 mb-6">
                  Explore our Biryani, Butter Chicken, artisan pizzas and loaded sides to start your order!
                </p>
                <button
                  onClick={onClose}
                  className="bg-red-600 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition-colors cursor-pointer"
                >
                  Explore Delicious Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
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
                    <p className="text-xs text-stone-500 font-medium">
                      ₹{item.price.toFixed(2)} each
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 rounded-l transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 rounded-r transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-extrabold text-stone-900">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-stone-300 hover:text-red-500 p-2 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout Calculation */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-50 space-y-4">
              
              {/* Promo Coupon Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Coupon: BITE20"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs uppercase font-bold tracking-wider placeholder:normal-case placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <Tag className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-2.5" />
                </div>
                <button
                  type="submit"
                  disabled={isApplyingPromo || !promoCode}
                  className="bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer"
                >
                  {isApplyingPromo ? 'Applying...' : 'Apply'}
                </button>
              </form>
              {promoError && (
                <p className="text-[11px] text-red-600 font-bold -mt-2">{promoError}</p>
              )}
              {discountPercent > 0 && (
                <p className="text-[11px] text-emerald-600 font-bold -mt-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Promo BITE20 applied: 20% discount!
                </p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-stone-900">₹{rawSubtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount (20%)</span>
                    <span>-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-bold">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-600 uppercase font-black text-[11px]">FREE</span>
                    ) : (
                      `₹${shippingFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="border-t border-stone-200 pt-2 flex justify-between text-base font-black text-stone-950 font-heading">
                  <span>Total Amount</span>
                  <span className="text-red-600 text-lg">₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-500/30 transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95 text-sm uppercase tracking-wider"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-[11px] text-stone-400 hover:text-red-500 font-bold cursor-pointer"
              >
                Clear Entire Basket
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
