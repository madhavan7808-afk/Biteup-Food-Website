import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import PromoBanner from './components/PromoBanner';
import SpecialRecipes from './components/SpecialRecipes';
import TestimonialSection from './components/TestimonialSection';
import FeaturesSection from './components/FeaturesSection';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import WishlistModal from './components/WishlistModal';
import CheckoutSuccessModal from './components/CheckoutSuccessModal';
import Toast from './components/Toast';
import Footer from './components/Footer';

import { PRODUCTS, SPECIAL_RECIPES } from './data/foodData';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'prod-ind-1',
      name: 'Butter Chicken (Murgh Makhani)',
      price: 320.00,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
      quantity: 1,
    },
    {
      id: 'prod-1',
      name: 'Yummy Pasta & Noodles',
      price: 240.00,
      image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=600&q=80',
      quantity: 1,
    }
  ]);
  const [wishlistIds, setWishlistIds] = useState(['prod-ind-2']);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Modals & Panels
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [checkoutOrderData, setCheckoutOrderData] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (title, message = '', type = 'cart') => {
    setToast({ title, message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product, qty = 1) => {
    const quantityToAdd = product.quantity || qty || 1;
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantityToAdd,
        }
      ];
    });

    showToast(
      'Added to Cart!',
      `${quantityToAdd}x ${product.name} added to your basket.`
    );
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== productId));
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleToggleWishlist = (product) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistIds(prev => prev.filter(id => id !== product.id));
      showToast('Removed from Wishlist', product.name, 'wishlist');
    } else {
      setWishlistIds(prev => [...prev, product.id]);
      showToast('Saved to Wishlist ❤️', product.name, 'wishlist');
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#c81e28] selection:text-white">
      {/* Navbar with floating right cart tab */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectItem={(item) => setQuickViewProduct(item)}
        onSelectCategory={handleSelectCategory}
        allProducts={PRODUCTS}
      />

      <main>
        {/* Screen 1: Hero Section */}
        <HeroSection
          onShopNow={() => handleSelectCategory('All')}
          onSelectCategory={handleSelectCategory}
        />

        {/* Screen 1: NEW MORE FLAVORS Menu with Indian Food & Categories */}
        <MenuSection
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* Screen 3: Promo Banner + Fresh & Grilled Foods + 3 Items */}
        <PromoBanner
          onBookLunch={() => {
            handleAddToCart({
              id: 'lunch-special',
              name: 'NY Awarded Business Lunch',
              price: 299.00,
              image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
            });
            setIsCartOpen(true);
          }}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* Screen 2: OUR SPECIAL RECIPES */}
        <SpecialRecipes
          recipes={SPECIAL_RECIPES}
          onSelectRecipe={(recipe) => {
            handleAddToCart({
              id: recipe.id,
              name: recipe.title,
              price: 260.00,
              image: recipe.image,
            });
          }}
        />

        {/* Screen 2: Our Testimonial */}
        <TestimonialSection />

        {/* Screen 4: Corporate Applications / Brought to you by largest creatives */}
        <FeaturesSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setIsCartOpen(true)} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
        onCheckoutSuccess={(data) => {
          setIsCartOpen(false);
          setCartItems([]);
          setCheckoutOrderData(data);
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={PRODUCTS.filter(p => wishlistIds.includes(p.id))}
        onAddToCart={handleAddToCart}
        onRemoveWishlist={(id) => setWishlistIds(prev => prev.filter(i => i !== id))}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      {/* Order Confirmed Modal */}
      <CheckoutSuccessModal
        orderData={checkoutOrderData}
        onClose={() => setCheckoutOrderData(null)}
      />

      {/* Toast Alert */}
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
