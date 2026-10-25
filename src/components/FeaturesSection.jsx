import React from 'react';
import { VolumeX, Utensils } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Text & Features List matching Screen 4 */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <p className="font-script text-2xl text-[#c81e28] font-bold">
              Corporate Applications
            </p>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-stone-900 leading-tight">
              Brought to you by largest creatives.
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Feature 1: Quiet Environment */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-full border border-red-200 text-[#c81e28] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c81e28] group-hover:text-white transition-colors">
                <VolumeX className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  Quiet Environment
                </h4>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Feature 2: Hygienic Food */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-full border border-red-200 text-[#c81e28] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c81e28] group-hover:text-white transition-colors">
                <Utensils className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  Hygienic Food
                </h4>
                <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Collage matching Screen 4 (Burrito wrap & Steaming bowl) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden shadow-md group h-72">
            <img
              src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
              alt="Sliced Gourmet Wrap"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md group h-72">
            <img
              src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=600&q=80"
              alt="Steaming Hot Soup Bowl"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
