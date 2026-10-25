import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, X } from 'lucide-react';
import { NAV_LINKS } from '../data/foodData';

export default function Navbar({
  cartCount,
  cartTotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSelectItem,
  onSelectCategory,
  allProducts,
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLink, setActiveLink] = useState('Home');

  const searchResults = searchQuery.trim() === ''
    ? []
    : allProducts.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  const handleLinkClick = (link) => {
    setActiveLink(link.name);
    if (link.category && onSelectCategory) {
      onSelectCategory(link.category);
    }
  };

  return (
    <>
      {/* Top thin red accent bar from mockup */}
      <div className="h-1.5 w-full bg-[#c81e28]" />

      <header className="sticky top-0 z-40 bg-white border-b border-stone-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="text-2xl font-black tracking-tight text-stone-900 font-heading">
              Bite<span className="text-[#c81e28]">Up</span>
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold text-stone-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link)}
                className={`transition-colors duration-200 hover:text-[#c81e28] cursor-pointer ${
                  activeLink === link.name ? 'text-[#c81e28] font-bold' : ''
                } ${link.category === 'Indian' ? 'flex items-center gap-1 text-amber-700' : ''}`}
              >
                {link.category === 'Indian' && <span className="text-xs">🇮🇳</span>}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-5 text-stone-700">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:text-[#c81e28] transition-colors cursor-pointer"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-9 w-72 sm:w-80 bg-white rounded-xl shadow-xl border border-stone-200 p-2.5 z-50">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Indian dishes, pizza, burgers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="w-full bg-stone-50 text-stone-800 text-xs px-3 py-2 rounded-lg border border-stone-200 focus:outline-none focus:border-[#c81e28]"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2 top-2 text-stone-400 hover:text-stone-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {searchResults.length > 0 && (
                    <div className="mt-2 divide-y divide-stone-100 max-h-56 overflow-y-auto">
                      {searchResults.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            onSelectItem(item);
                            setSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center gap-2.5 p-2 hover:bg-stone-50 cursor-pointer rounded-lg"
                        >
                          <img src={item.image} alt={item.name} className="w-9 h-9 object-cover rounded-md" />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs font-bold text-stone-900 truncate">{item.name}</h5>
                            <span className="text-[11px] text-[#c81e28] font-extrabold">₹{item.price.toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="relative hover:text-[#c81e28] transition-colors cursor-pointer"
              title="Wishlist"
            >
              <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-[#c81e28] text-[#c81e28]' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#c81e28] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Icon in Nav */}
            <button
              onClick={onOpenCart}
              className="relative hover:text-[#c81e28] transition-colors cursor-pointer"
              title="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#c81e28] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Language / Currency text */}
            <span className="text-[11px] font-semibold text-stone-500 hidden sm:inline-block border-l border-stone-200 pl-4">
              English - ₹INR
            </span>
          </div>

        </div>
      </header>

      {/* Floating Right Red Tab showing items & total in ₹ */}
      <div
        onClick={onOpenCart}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#c81e28] hover:bg-[#b01720] text-white py-3 px-2 rounded-l-xl shadow-xl flex flex-col items-center gap-1.5 cursor-pointer transition-all hover:pl-3 group"
        title="Open Basket"
      >
        <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-bold tracking-tight">
          {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
        </span>
        <span className="text-[11px] font-black bg-white/20 px-1.5 py-0.5 rounded text-white">
          ₹{cartTotal.toFixed(2)}
        </span>
      </div>
    </>
  );
}
