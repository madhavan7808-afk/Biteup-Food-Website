import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Flame, 
  Clock, 
  Check, 
  Plus, 
  Minus, 
  ShoppingBag,
  Heart
} from 'lucide-react';

const EXTRA_TOPPINGS = [
  { id: 'top-1', name: 'Extra Melted Aged Cheddar', price: 40.00 },
  { id: 'top-2', name: 'Crispy Paneer / Bacon Bites', price: 50.00 },
  { id: 'top-3', name: 'Signature Mint Chutney & Garlic Dip', price: 30.00 },
  { id: 'top-4', name: 'Grilled Spicy Jalapeño & Green Chilies', price: 25.00 },
];

export default function QuickViewModal({ 
  product, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted 
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSpice, setSelectedSpice] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const currentSpice = product.spicyLevel || selectedSpice;

  const toggleTopping = (toppingId) => {
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter(id => id !== toppingId));
    } else {
      setSelectedToppings([...selectedToppings, toppingId]);
    }
  };

  const toppingsTotal = selectedToppings.reduce((sum, id) => {
    const top = EXTRA_TOPPINGS.find(t => t.id === id);
    return sum + (top ? top.price : 0);
  }, 0);

  const unitPrice = product.price + toppingsTotal;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart({
      ...product,
      price: unitPrice,
      customizations: {
        spiceLevel: currentSpice,
        toppings: selectedToppings,
      },
      quantity,
    });

    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity" 
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 z-10 animate-in zoom-in-95 duration-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-stone-900/60 hover:bg-stone-900 text-white p-2 rounded-full cursor-pointer transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image & Badges */}
          <div className="relative h-64 md:h-full bg-stone-100 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className={`absolute top-4 left-4 ${product.badgeColor || 'bg-red-500'} text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md`}>
                {product.badge}
              </span>
            )}

            <button
              onClick={() => onToggleWishlist(product)}
              className="absolute bottom-4 left-4 bg-white/90 hover:bg-white text-stone-700 p-2.5 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-600 text-red-600' : ''}`} />
            </button>
          </div>

          {/* Details & Customizations */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-5 max-h-[80vh] overflow-y-auto">
            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-stone-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-900">{product.rating}</span>
                <span className="text-xs text-stone-400">({product.reviews} reviews)</span>
              </div>

              <h3 className="text-2xl font-black font-heading text-stone-900 leading-snug">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-3 mt-1 text-xs text-stone-500 font-medium">
                <span className="capitalize bg-stone-100 px-2 py-0.5 rounded-md text-stone-700 font-bold">{product.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-amber-500" /> {product.prepTime}</span>
                <span>•</span>
                <span>{product.calories}</span>
              </div>

              <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Customization 1: Spice Level */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-900 flex items-center justify-between">
                <span>Spiciness Level:</span>
                <span className="text-red-600 uppercase font-black text-[11px]">
                  {currentSpice === 1 ? 'Mild' : currentSpice === 2 ? 'Medium Spicy' : currentSpice === 3 ? 'Hot & Spicy' : 'Fiery Inferno 🔥'}
                </span>
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[1, 2, 3, 4].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSelectedSpice(level)}
                    className={`py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                      currentSpice === level
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    <Flame className={`w-3 h-3 ${currentSpice === level ? 'text-amber-300 fill-amber-300' : 'text-stone-400'}`} />
                    <span>Lvl {level}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Customization 2: Extra Toppings */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-900 block">
                Extra Gourmet Toppings (Optional):
              </label>
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {EXTRA_TOPPINGS.map((top) => {
                  const isChecked = selectedToppings.includes(top.id);
                  return (
                    <div
                      key={top.id}
                      onClick={() => toggleTopping(top.id)}
                      className={`flex items-center justify-between p-2 rounded-xl border text-xs cursor-pointer transition-all ${
                        isChecked
                          ? 'border-red-500 bg-red-50/70 font-bold text-red-900'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-red-600 border-red-600 text-white' : 'border-stone-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{top.name}</span>
                      </div>
                      <span className="font-extrabold text-stone-900">+₹{top.price.toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quantity and Order Button */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center border border-stone-200 rounded-xl bg-stone-50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-black text-stone-900 text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-stone-400 uppercase font-bold block">Total Amount</span>
                  <span className="text-xl font-black text-red-600 font-heading">
                    ₹{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className={`w-full py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/25'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Added To Basket</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add To Basket • ₹{totalPrice.toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
