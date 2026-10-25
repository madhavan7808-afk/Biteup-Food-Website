import React from 'react';

export default function SpecialRecipes({ recipes, onSelectRecipe }) {
  return (
    <section id="recipes" className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      {/* Title with red underline matching mockup */}
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-black font-heading tracking-tight text-stone-900 uppercase">
          OUR SPECIAL RECIPES
        </h2>
        <div className="w-10 h-0.5 bg-[#c81e28] mx-auto mt-2" />
      </div>

      {/* 3 Photos Grid matching mockup */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectRecipe(item)}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer h-60 bg-stone-100"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-xs font-bold tracking-wide">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
