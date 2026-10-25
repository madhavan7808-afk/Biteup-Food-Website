import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function MenuSection({
  products,
  onAddToCart,
  onQuickView,
}) {
  const [activeTab, setActiveTab] = useState('bestseller');

  const displayedProducts = activeTab === 'bestseller'
    ? products.filter(p => p.isBestSeller || p.rating >= 5)
    : products.filter(p => p.isLatest);

  return (
    <section id="menu" className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      {/* Title & Tabs */}
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-stone-900 uppercase">
          NEW MORE FLAVORS
        </h2>

        {/* Centered Tabs (Best Selling Products / Latest Products) */}
        <div className="flex items-center justify-center gap-6 text-xs font-semibold pt-1">
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
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
}
