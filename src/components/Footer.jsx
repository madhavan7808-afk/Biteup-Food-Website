import React, { useState } from 'react';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenReservation }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer id="footer" className="bg-stone-950 text-stone-300 pt-16 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Newsletter Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-red-900 via-rose-900 to-stone-900 p-8 sm:p-12 mb-16 shadow-2xl border border-red-800/50 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-amber-300 inline-block">
              VIP Diner Perks & Secret Recipes
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Subscribe For 20% Off Your First Order
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm">
              Get weekly secret chef specials, birthday treats, and priority flash deals delivered straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:max-w-md flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-stone-400 px-4 py-3.5 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium"
            />
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 flex-shrink-0"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Claim 20% OFF</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800 text-xs">
          
          {/* Col 1: Brand Info (2 cols on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black font-heading text-white tracking-tight">
                Bite<span className="text-red-500">Up</span>
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              BiteUp is New York's premier modern culinary destination blending artisanal smash burgers, wood-fired sourdough pizzas, fresh organic salad bowls, and fast-express delivery.
            </p>

            <div className="space-y-2 text-stone-400 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>452 Broadway, Soho, New York, NY 10013</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>+1 (800) 248-BITE / +1 (212) 555-8900</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>orders@biteupfood.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black font-heading text-white uppercase tracking-wider">
              Quick Menu
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#hero" className="hover:text-red-400 transition-colors">Juicy Burgers</a></li>
              <li><a href="#menu" className="hover:text-red-400 transition-colors">Stone-Baked Pizza</a></li>
              <li><a href="#menu" className="hover:text-red-400 transition-colors">Handmade Pasta</a></li>
              <li><a href="#menu" className="hover:text-red-400 transition-colors">Green Goddess Bowls</a></li>
              <li><a href="#recipes" className="hover:text-red-400 transition-colors">Chef Signature Plates</a></li>
            </ul>
          </div>

          {/* Col 3: Restaurant & Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-black font-heading text-white uppercase tracking-wider">
              Hospitality
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={onOpenReservation} className="hover:text-red-400 transition-colors cursor-pointer">
                  Reserve VIP Table
                </button>
              </li>
              <li><a href="#promo" className="hover:text-red-400 transition-colors">Awarded Business Lunch</a></li>
              <li><a href="#testimonial" className="hover:text-red-400 transition-colors">Our Master Chefs</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Catering & Corporate</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Food Safety Certifications</a></li>
            </ul>
          </div>

          {/* Col 4: Opening Hours & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-black font-heading text-white uppercase tracking-wider">
              Opening Hours
            </h4>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Mon – Friday</p>
                  <p className="text-[11px]">10:00 AM – 11:30 PM</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-white">Sat – Sunday</p>
                <p className="text-[11px]">09:00 AM – 01:00 AM</p>
              </div>
            </div>

            {/* Social Icons (SVG) */}
            <div className="pt-2 flex items-center space-x-3">
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-red-600 flex items-center justify-center text-stone-300 hover:text-white transition-all transform hover:scale-110">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Twitter / X" className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-red-600 flex items-center justify-center text-stone-300 hover:text-white transition-all transform hover:scale-110">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-red-600 flex items-center justify-center text-stone-300 hover:text-white transition-all transform hover:scale-110">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-red-600 flex items-center justify-center text-stone-300 hover:text-white transition-all transform hover:scale-110">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {CURRENT_YEAR} BiteUp Foods Inc. All rights reserved. Handcrafted with passion.</p>
          <div className="flex items-center space-x-4">
            <span className="text-[11px]">Privacy Policy</span>
            <span>•</span>
            <span className="text-[11px]">Terms of Service</span>
            <span>•</span>
            <span className="text-[11px]">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
