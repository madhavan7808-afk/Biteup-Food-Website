import React from 'react';
import { 
  UtensilsCrossed, 
  Flame, 
  Pizza, 
  Soup, 
  Salad, 
  IceCream,
  Sandwich
} from 'lucide-react';

const ICON_MAP = {
  UtensilsCrossed,
  Burger: Sandwich,
  Pizza,
  Soup,
  Flame,
  Salad,
  IceCream,
};

export default function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
      <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
        {categories.map((cat) => {
          const IconComponent = ICON_MAP[cat.icon] || UtensilsCrossed;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer select-none active:scale-95 ${
                isActive
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/30 scale-105'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/80 hover:border-red-200 shadow-sm'
              }`}
            >
              <IconComponent className={`w-4 h-4 transition-transform duration-300 ${
                isActive ? 'scale-110 text-white' : 'text-red-500'
              }`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
