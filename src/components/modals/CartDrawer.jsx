import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Sprout, ShieldCheck } from 'lucide-react';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateCartQuantity, removeFromCart, showToast } = useApp();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setIsCheckingOut(false);
    setIsOrderPlaced(true);
    showToast('Order Placed Successfully! Your plants are being prepared with love 🌿');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#C5E9C1]">
          
          {/* Cart Header */}
          <div className="px-6 py-5 bg-[#F2F9F1] border-b border-[#C5E9C1] flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#1D461A]">
              <ShoppingBag className="w-5 h-5 text-[#2D8425]" />
              <h2 className="font-serif text-lg font-bold">Your Green Basket</h2>
              <span className="bg-[#2D8425] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-[#E3F4E1] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {isOrderPlaced ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#E3F4E1] text-[#2D8425] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D461A]">Order Confirmed!</h3>
                <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                  Thank you for nurturing nature. We have dispatched your sapling order & adoption registry details to your email.
                </p>
                <button
                  onClick={() => {
                    setIsOrderPlaced(false);
                    setIsCartOpen(false);
                  }}
                  className="bg-[#2D8425] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md"
                >
                  Continue Exploring Vanvriksha
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#F2F9F1] text-[#2D8425] rounded-full flex items-center justify-center mx-auto">
                  <Sprout className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1D461A]">Your Green Basket is Empty</h3>
                <p className="text-xs text-gray-500">Explore our eco-nursery or native tree saplings to plant today.</p>
              </div>
            ) : isCheckingOut ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <h3 className="text-sm font-bold text-[#1D461A] uppercase tracking-wider">Checkout & Delivery Info</h3>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                  <input required type="text" placeholder="Rohan Mehta" className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-xl px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Shipping / Delivery Address</label>
                  <textarea required rows={2} placeholder="House no, Street, Green Enclave, City, PIN" className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-xl px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-xl px-3 py-2 text-sm" />
                </div>
                <div className="pt-2">
                  <button type="submit" className="w-full bg-[#2D8425] hover:bg-[#1D461A] text-white font-bold py-3 rounded-xl text-sm shadow-md">
                    Confirm Order (₹{total.toLocaleString('en-IN')})
                  </button>
                  <button type="button" onClick={() => setIsCheckingOut(false)} className="w-full text-xs text-gray-500 mt-2 py-1">
                    ← Back to Basket
                  </button>
                </div>
              </form>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-[#F4F8F3] rounded-2xl border border-[#C5E9C1]/60">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#1D461A] truncate">{item.name}</h4>
                    <p className="text-[11px] text-[#2D8425] font-semibold">₹{item.price.toLocaleString('en-IN')}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        onClick={() => updateCartQuantity(item.id, -1)}
                        className="p-1 bg-white border border-[#C5E9C1] rounded-lg hover:bg-[#E3F4E1]"
                      >
                        <Minus className="w-3 h-3 text-[#1D461A]" />
                      </button>
                      <span className="text-xs font-bold px-1.5 text-[#1D461A]">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, 1)}
                        className="p-1 bg-white border border-[#C5E9C1] rounded-lg hover:bg-[#E3F4E1]"
                      >
                        <Plus className="w-3 h-3 text-[#1D461A]" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {!isOrderPlaced && cart.length > 0 && !isCheckingOut && (
            <div className="p-6 bg-[#F2F9F1] border-t border-[#C5E9C1] space-y-3">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1D461A]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Eco-Packaging & Shipping</span>
                  <span className="font-semibold text-[#1D461A]">
                    {shipping === 0 ? <span className="text-[#2D8425]">FREE</span> : `₹${shipping}`}
                  </span>
                </div>
                {subtotal <= 999 && (
                  <p className="text-[10px] text-[#2D8425] font-medium pt-1">
                    💡 Add ₹{(1000 - subtotal).toLocaleString('en-IN')} more for FREE shipping!
                  </p>
                )}
                <div className="flex justify-between text-sm font-bold text-[#1D461A] pt-2 border-t border-[#C5E9C1]">
                  <span>Total Amount</span>
                  <span className="text-[#2D8425]">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#2D8425] to-[#3EA434] hover:from-[#1D461A] hover:to-[#2D8425] text-white font-bold py-3 rounded-xl text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
