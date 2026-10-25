import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Utensils, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TableReservationModal({ isOpen, onClose, onBookingSuccess }) {
  if (!isOpen) return null;

  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-10-26');
  const [time, setTime] = useState('19:30');
  const [seating, setSeating] = useState('indoor');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      onBookingSuccess({ guests, date, time, seating, name });
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity" 
      />

      <div className="relative bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-stone-200 z-10 p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-2 rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black font-heading text-stone-900">Table Reserved!</h3>
            <p className="text-stone-600 text-xs max-w-xs mx-auto">
              We look forward to hosting you for {guests} guests on {date} at {time}. An SMS confirmation has been sent!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">
                VIP Dine-In Experience
              </span>
              <h3 className="text-2xl font-black font-heading text-stone-900 mt-2">
                Reserve A Table at BiteUp
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Enjoy NY's most awarded dining atmosphere with zero waiting queue.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-red-600" /> Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-red-500"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-red-600" /> Time Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-red-500"
                >
                  <option value="12:00">12:00 PM (Lunch)</option>
                  <option value="13:30">01:30 PM (Lunch)</option>
                  <option value="18:00">06:00 PM (Dinner)</option>
                  <option value="19:30">07:30 PM (Prime)</option>
                  <option value="21:00">09:00 PM (Late Savor)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-red-600" /> Reservation Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                Seating Atmosphere
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'indoor', label: 'Cozy Booth' },
                  { id: 'patio', label: 'Garden Patio' },
                  { id: 'chef', label: "Chef's Counter" },
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSeating(opt.id)}
                    className={`py-2 px-2 text-[11px] font-bold rounded-xl border transition-all cursor-pointer ${
                      seating === opt.id
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-stone-200 bg-stone-50 text-stone-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Your Full Name</label>
              <input
                type="text"
                placeholder="e.g. Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Mobile Contact Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) 019-2834"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-medium focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3.5 rounded-2xl shadow-lg shadow-red-500/30 transition-all cursor-pointer active:scale-95 text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
            >
              <Utensils className="w-4 h-4 text-amber-300" />
              <span>Confirm Table Booking</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
