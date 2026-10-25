import React, { useState } from 'react';
import { Star, Check } from 'lucide-react';

export default function ProductCard({
  product,
  onAddToCart,
  onQuickView,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    onAddToCart(product);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(product)}
      className="group relative bg-white border border-stone-200/90 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:border-stone-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Food Image Container with Hover Action Buttons Overlay */}
      <div className="relative w-full h-44 sm:h-48 rounded-lg overflow-hidden flex items-center justify-center p-2 mb-3 bg-stone-50/50">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-contain transition-transform duration-500 ${
            isHovered ? 'scale-108' : 'scale-100'
          }`}
          loading="lazy"
        />

        {/* Hover Pill Buttons Overlay matching mockup (ADD TO CART & QUICK VIEW) */}
        <div
          className={`absolute inset-0 bg-white/20 backdrop-blur-[1px] flex items-center justify-center gap-2 transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={handleAdd}
            className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-90 ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-stone-800 hover:bg-[#c81e28] text-white'
            }`}
          >
            {isAdded ? (
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 stroke-[3]" /> Added
              </span>
            ) : (
              'ADD TO CART'
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-stone-200 hover:bg-stone-300 text-stone-800 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-90"
          >
            QUICK VIEW
          </button>
        </div>
      </div>

      {/* Product Info below image */}
      <div className="text-center space-y-1">
        {/* 5-star rating */}
        <div className="flex items-center justify-center text-stone-300 text-xs">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < product.rating
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-stone-300'
              }`}
            />
          ))}
        </div>

        {/* Dish Title */}
        <h4 className="text-xs sm:text-sm font-bold text-stone-800 line-clamp-1 group-hover:text-[#c81e28] transition-colors">
          {product.name}
        </h4>

        {/* Price */}
        <div className="flex items-center justify-center gap-2 pt-0.5">
          <span className="text-xs sm:text-sm font-extrabold text-[#c81e28]">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-[11px] text-stone-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
