import React from 'react';

export default function HeroSection({ onShopNow, onSelectCategory }) {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Large Banner (8 columns) */}
        <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-[#151210] min-h-[440px] sm:min-h-[480px] p-8 sm:p-12 text-white flex flex-col justify-center shadow-md group">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80" 
              alt="Grilled BBQ Burger"
              className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            {/* Dark gradient from left to ensure text pops cleanly */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#12100e] via-[#12100e]/90 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-md space-y-3">
            <p className="text-stone-300 text-xs tracking-wider">
              Grilled BBQ Burgers. Available now.
            </p>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-[1.1] text-white uppercase">
              THE GOODNESS <br />
              OF THE BEST FOOD
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm font-normal">
              Get <span className="text-[#c81e28] font-bold">20% off</span> on BBQ Burgers. Use code: BITE20
            </p>

            <div className="pt-3">
              <button
                onClick={onShopNow}
                className="bg-[#c81e28] hover:bg-[#b01720] text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-md shadow-md transition-all duration-200 active:scale-95 cursor-pointer hover:shadow-lg hover:shadow-red-900/30"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Right Stack: 2 Promo Cards (4 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          
          {/* Top Amber Card: Burgar House 15% Off */}
          <div 
            onClick={() => onSelectCategory('Burger')}
            className="group relative flex-1 rounded-2xl overflow-hidden bg-[#e99a16] p-6 text-stone-900 flex items-center justify-between cursor-pointer min-h-[210px] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative z-10 max-w-[55%] space-y-1">
              <span className="text-xs font-semibold text-stone-800">
                Fast Food
              </span>
              <h3 className="text-2xl font-black font-heading text-stone-950 leading-tight">
                Burgar House
              </h3>
              <p className="text-stone-900 font-bold text-xs">
                15.00% Off
              </p>
            </div>

            {/* Burger & Fries image on yellow background */}
            <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80" 
                alt="Burgar House"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Bottom Red Card: Healthy Foods Mega Discount 35% */}
          <div 
            onClick={() => onSelectCategory('Italian')}
            className="group relative flex-1 rounded-2xl overflow-hidden bg-[#8e171b] p-6 text-white flex items-center justify-between cursor-pointer min-h-[210px] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative z-10 max-w-[55%] space-y-1">
              <span className="text-xs font-semibold text-red-200">
                Fast Food
              </span>
              <h3 className="text-2xl font-black font-heading text-white leading-tight">
                Healthy Foods
              </h3>
              <p className="text-amber-300 font-bold text-xs">
                Mega Discount 35%
              </p>
            </div>

            {/* Fresh healthy bowl image */}
            <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80" 
                alt="Healthy Foods"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
