import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function PromoBanner({
  onBookLunch,
  onQuickView,
}) {
  const rowProducts = [
    {
      id: 'promo-p1',
      name: 'Cheese Burger Meal',
      price: 290.00,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'promo-p2',
      name: 'Spicy Margherita',
      price: 220.00,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'promo-p3',
      name: 'Melted Chicken Toast',
      price: 180.00,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      
      {/* Top Banner: Awarded Restaurant Business Lunch */}
      <div className="relative rounded-2xl bg-[#fafafa] border border-stone-200/80 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
        <div className="max-w-xl space-y-2 z-10">
          <p className="font-script text-xl sm:text-2xl text-amber-600 font-bold tracking-wide">
            Competently promote sticky supply chains
          </p>

          <h2 className="text-2xl sm:text-4xl font-black font-heading text-stone-900 leading-tight">
            Celebrate at one of NY's most awarded restaurant
          </h2>

          <p className="text-stone-500 text-xs sm:text-sm font-medium">
            Only this month business lunch from <strong className="text-[#c81e28] font-bold">₹299.00</strong>
          </p>

          <div className="pt-3">
            <button
              onClick={onBookLunch}
              className="bg-[#c81e28] hover:bg-[#b01720] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
            >
              ORDER BUSINESS LUNCH
            </button>
          </div>
        </div>

        {/* Fresh Salad Bowl with Fork */}
        <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 flex-shrink-0 group">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
            alt="Business Lunch Salad"
            className="w-full h-full object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Bottom Row: Dark "Fresh & Grilled Foods" card + 3 Food Items Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Dark Card: Fresh & Grilled Foods */}
        <div className="lg:col-span-4 rounded-2xl bg-[#222124] text-white p-7 flex flex-col justify-between shadow-md relative overflow-hidden group">
          <div className="space-y-1 z-10">
            <span className="text-[11px] font-semibold text-stone-300">
              New Super Delicious
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading leading-tight text-white">
              Fresh & <br /> Grilled Foods
            </h3>
          </div>

          <div className="my-4 relative h-32 w-full z-10 overflow-hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80"
              alt="Grilled Platter"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="z-10">
            <button
              onClick={onBookLunch}
              className="bg-[#c81e28] hover:bg-[#b01720] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2 rounded-md transition-all cursor-pointer active:scale-95"
            >
              EXPLORE MORE
            </button>
          </div>
        </div>

        {/* Right 3 Product Cards Row */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 h-full">
            {rowProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => onQuickView(item)}
                className="bg-white border border-stone-200/90 rounded-2xl p-4 flex flex-col justify-between text-center hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="h-36 w-full flex items-center justify-center p-2 bg-stone-50/50 rounded-xl mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-center text-stone-300 text-xs">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <h4 className="text-xs font-bold text-stone-800 truncate group-hover:text-[#c81e28]">
                    {item.name}
                  </h4>
                  <p className="text-xs font-black text-[#c81e28]">
                    ₹{item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Arrows Navigation (from mockup) */}
          <div className="flex items-center justify-end gap-2 pt-4">
            <button className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-stone-800 hover:text-stone-900 transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-stone-800 hover:text-stone-900 transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
