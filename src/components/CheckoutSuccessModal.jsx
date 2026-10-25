import React from 'react';
import { CheckCircle2, Bike, X, ChevronRight } from 'lucide-react';

export default function CheckoutSuccessModal({ orderData, onClose }) {
  if (!orderData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/75 backdrop-blur-sm transition-opacity" 
      />

      <div className="relative bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-stone-200 z-10 p-6 sm:p-8 animate-in zoom-in-95 duration-200 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-2 rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebratory Icon */}
        <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
          <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
        </div>

        <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full inline-block">
          Order #{orderData.orderId || 'BU-849201'} Placed
        </span>

        <h3 className="text-2xl font-black font-heading text-stone-900 mt-2">
          Your Food is Sizzling!
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          Our master chefs have received your ticket and the kitchen is on fire.
        </p>

        {/* Live Delivery Tracker Card */}
        <div className="bg-stone-50 rounded-2xl p-4 mt-5 border border-stone-200/90 text-left space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-stone-700">
            <span className="flex items-center gap-1.5 text-stone-900">
              <Bike className="w-4 h-4 text-red-600" /> Express Delivery
            </span>
            <span className="text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full font-black text-[10px]">
              ON TIME • 25-30 MINS
            </span>
          </div>

          {/* Animated progress track */}
          <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-amber-500 h-full w-2/5 animate-pulse rounded-full" />
          </div>

          <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
            <span>Kitchen Prep</span>
            <span className="font-bold text-stone-800">Dispatching Soon</span>
            <span>At Your Door</span>
          </div>
        </div>

        {/* Order Breakdown in INR */}
        <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-600 space-y-1 text-left">
          <div className="flex justify-between font-bold text-stone-900">
            <span>Items Ordered:</span>
            <span>{orderData.items.reduce((acc, i) => acc + i.quantity, 0)} items</span>
          </div>
          {orderData.savings > 0 && (
            <div className="flex justify-between text-emerald-600 font-bold">
              <span>Coupon Discount:</span>
              <span>-₹{orderData.savings.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-black text-stone-950 text-sm pt-1 border-t border-dashed border-stone-200">
            <span>Total Paid:</span>
            <span className="text-red-600 font-heading text-base">₹{orderData.total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-black py-3.5 rounded-2xl shadow-lg shadow-red-500/30 transition-all cursor-pointer active:scale-95 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <span>Continue Browsing BiteUp</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
