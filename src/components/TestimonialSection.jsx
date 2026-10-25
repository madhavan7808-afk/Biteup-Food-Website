import React from 'react';
import { TESTIMONIAL } from '../data/foodData';

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 relative overflow-hidden">
      
      {/* Title with decorative curves matching mockup */}
      <div className="text-center mb-12">
        <h2 className="text-xl sm:text-2xl font-bold font-heading text-stone-900">
          Our Testimonial
        </h2>
        <div className="w-8 h-0.5 bg-[#c81e28] mx-auto mt-1.5" />
      </div>

      {/* Circular Testimonial Layout matching mockup */}
      <div className="relative max-w-xl mx-auto min-h-[420px] flex items-center justify-center">
        
        {/* Floating Ingredient 1: Red Bell Pepper slice (Top-Left) */}
        <div className="absolute top-2 left-6 sm:left-12 z-10 animate-float-slow pointer-events-none">
          <span className="text-4xl sm:text-5xl drop-shadow-md select-none">🫑</span>
        </div>

        {/* Floating Ingredient 2: Fresh Basil Leaf (Middle-Left) */}
        <div className="absolute top-1/2 -left-2 sm:left-4 z-10 animate-float-reverse pointer-events-none">
          <span className="text-3xl sm:text-4xl drop-shadow-md select-none">🌿</span>
        </div>

        {/* Floating Ingredient 3: Sliced Red Tomato (Bottom-Center) */}
        <div className="absolute -bottom-2 left-1/3 z-10 animate-float-slow pointer-events-none">
          <span className="text-4xl sm:text-5xl drop-shadow-md select-none">🍅</span>
        </div>

        {/* Floating Ingredient 4: Fresh Garlic (Bottom-Right) */}
        <div className="absolute bottom-4 right-10 sm:right-16 z-10 animate-float-reverse pointer-events-none">
          <span className="text-3xl sm:text-4xl drop-shadow-md select-none">🧄</span>
        </div>

        {/* Floating Ingredient 5: Red Pepper Shards (Top-Right) */}
        <div className="absolute top-6 right-8 sm:right-16 z-10 animate-float-slow pointer-events-none">
          <span className="text-3xl sm:text-4xl drop-shadow-md select-none">🌶️</span>
        </div>

        {/* Center Circular Card matching mockup */}
        <div className="relative z-20 w-[290px] sm:w-[350px] h-[290px] sm:h-[350px] rounded-full bg-white shadow-xl border border-stone-100 flex flex-col items-center justify-center p-6 text-center group hover:shadow-2xl transition-shadow duration-300">
          
          {/* Chef Avatar */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-stone-200 mb-2 shadow-xs group-hover:scale-105 transition-transform">
            <img
              src={TESTIMONIAL.avatar}
              alt={TESTIMONIAL.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h4 className="text-sm font-bold text-stone-900 leading-tight">
            {TESTIMONIAL.name}
          </h4>
          <p className="text-[10px] text-stone-400 mb-3">
            {TESTIMONIAL.role}
          </p>

          <p className="text-stone-500 text-[11px] sm:text-xs leading-relaxed max-w-[240px]">
            {TESTIMONIAL.quote}
          </p>
        </div>

      </div>

    </section>
  );
}
