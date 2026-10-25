import React, { useState } from 'react';
import ProductCard from './ProductCard';

const CATEGORIES = [
  { id: 'All', name: 'All Menu', emoji: '🍽️' },
  { id: 'Indian', name: 'Indian Specials', emoji: '🇮🇳', isSpecial: true },
  { id: 'Pizza', name: 'Pizza', emoji: '🍕' },
  { id: 'Burger', name: 'Burgers', emoji: '🍔' },
  { id: 'Italian', name: 'Italian', emoji: '🍝' },
  { id: 'Fast Food', name: 'Fast Food', emoji: '🍟' },
];

export default function MenuSection({
  products,
  selectedCategory = 'All',
  onSelectCategory,
  onAddToCart,
  onQuickView,
}) {
  const [internalCategory, setInternalCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const activeCategory = internalCategory !== null ? internalCategory : selectedCategory;

  const handleCategoryClick = (catId) => {
    setInternalCategory(catId);
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  // Filter by category
  const categoryFiltered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  // Sub-tab filtering (Best seller, latest, or all)
  const tabFiltered = activeTab === 'bestseller'
    ? categoryFiltered.filter(p => p.isBestSeller || p.rating >= 5)
    : activeTab === 'latest'
    ? categoryFiltered.filter(p => p.isLatest)
    : categoryFiltered;

  const displayLimit = showAll ? tabFiltered.length : 8;
  const displayedProducts = tabFiltered.slice(0, displayLimit);

  return (
    <section id="menu" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 scroll-mt-16">
      
      {/* Title & Section Header */}
      <div className="text-center space-y-2 mb-6">
        <span className="text-xs font-black uppercase tracking-widest text-[#c81e28] bg-red-50 px-3 py-1 rounded-full inline-block">
          Authentic Taste & Fresh Ingredients
        </span>
        <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight text-stone-900 uppercase">
          NEW MORE FLAVORS
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
          Explore our handcrafted Indian delicacies, stone-fired artisan pizzas, juicy gourmet burgers, and fresh sides.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory.toLowerCase() === cat.id.toLowerCase();
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                isActive
                  ? cat.isSpecial
                    ? 'bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-lg shadow-red-500/25 scale-105'
                    : 'bg-[#c81e28] text-white shadow-md shadow-red-500/25 scale-105'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200 hover:border-red-200'
              }`}
            >
              <span className="text-sm">{cat.emoji}</span>
              <span>{cat.name}</span>
              {cat.id === 'Indian' && !isActive && (
                <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.2 rounded-md font-extrabold">NEW</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Sub-Tabs (All Items / Best Selling / Latest) */}
      <div className="flex items-center justify-center gap-6 text-xs font-semibold pb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`pb-1 transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'text-[#c81e28] border-b-2 border-[#c81e28] font-bold'
              : 'text-stone-400 hover:text-stone-600'
          }`}
        >
          All Items ({categoryFiltered.length})
        </button>
        <span className="text-stone-300">•</span>
        <button
          onClick={() => setActiveTab('bestseller')}
          className={`pb-1 transition-all cursor-pointer ${
            activeTab === 'bestseller'
              ? 'text-[#c81e28] border-b-2 border-[#c81e28] font-bold'
              : 'text-stone-400 hover:text-stone-600'
          }`}
        >
          Best Selling Products
        </button>
        <span className="text-stone-300">•</span>
        <button
          onClick={() => setActiveTab('latest')}
          className={`pb-1 transition-all cursor-pointer ${
            activeTab === 'latest'
              ? 'text-[#c81e28] border-b-2 border-[#c81e28] font-bold'
              : 'text-stone-400 hover:text-stone-600'
          }`}
        >
          Latest Products
        </button>
      </div>

      {/* Grid of Menu Cards */}
      {displayedProducts.length === 0 ? (
        <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200">
          <p className="text-sm font-bold text-stone-600">No dishes found in this filter.</p>
          <button
            onClick={() => {
              setInternalCategory('All');
              setActiveTab('all');
            }}
            className="mt-3 text-xs font-bold text-red-600 hover:underline cursor-pointer"
          >
            Show All Menu Items
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      )}

      {/* Show More / Show Less Toggle Button */}
      {tabFiltered.length > 8 && (
        <div className="text-center pt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
          >
            {showAll ? 'Show Less' : `View All Dishes (${tabFiltered.length})`}
          </button>
        </div>
      )}

    </section>
  );
}
