import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartPage({ onNavigate, onSelectProduct }) {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    promoCode,
    promoApplied,
    applyPromo,
    removePromo,
    subtotal,
    discountAmount,
    taxAmount,
    shippingAmount,
    totalAmount,
    showToast
  } = useCart();

  const [inputPromo, setInputPromo] = useState('');
  const [activeStep, setActiveStep] = useState(1); // 1: Cart, 2: Shipping, 3: Pay
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoApplied) {
      removePromo();
      setInputPromo('');
    } else {
      const ok = applyPromo(inputPromo || 'LUNEXA15');
      if (ok) setInputPromo('');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      showToast('Order confirmed! Access receipt dispatched.');
      setActiveStep(3);
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-gutter-mobile text-center max-w-md mx-auto">
        <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-outline mb-4">
          <span className="material-symbols-outlined text-4xl">shopping_cart</span>
        </div>
        <h2 className="font-headline-sm text-xl font-bold text-on-surface">Your Bag is Empty</h2>
        <p className="font-body-sm text-xs text-on-surface-variant mt-1 max-w-xs">
          Explore the nocturnal collection of cyber minimalist tech & acoustic gear.
        </p>
        <button
          onClick={() => onNavigate('catalog')}
          className="mt-6 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-xs font-bold shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
        >
          Explore Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-36 max-w-4xl mx-auto space-y-space-md">
      {/* Progress Stepper Tracker */}
      <div className="px-margin-mobile pt-space-sm">
        <div className="bg-surface-container-low rounded-2xl p-space-sm shadow-md flex items-center justify-between relative overflow-hidden border border-surface-container-high/60">
          <div className="absolute -top-12 -left-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

          {/* Step 1 */}
          <div
            onClick={() => setActiveStep(1)}
            className={`flex items-center gap-space-xs z-10 cursor-pointer ${
              activeStep === 1 ? 'opacity-100' : 'opacity-70'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-label-md text-xs font-bold ${
              activeStep === 1 ? 'bg-primary-container text-on-primary-container shadow-[0_0_12px_rgba(16,185,129,0.4)]' : 'bg-surface-container text-on-surface-variant'
            }`}>
              1
            </div>
            <span className={`font-label-md text-xs ${activeStep === 1 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
              Cart
            </span>
          </div>

          {/* Connector 1-2 */}
          <div className="flex-1 mx-2 h-0.5 bg-surface-container-highest rounded-full overflow-hidden">
            <div className={`h-full bg-primary-container transition-all duration-300 ${activeStep >= 2 ? 'w-full' : 'w-1/2'}`}></div>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => setActiveStep(2)}
            className={`flex items-center gap-space-xs z-10 cursor-pointer ${
              activeStep === 2 ? 'opacity-100' : 'opacity-60'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-label-md text-xs font-bold ${
              activeStep === 2 ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container text-on-surface-variant'
            }`}>
              2
            </div>
            <span className={`font-label-md text-xs ${activeStep === 2 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
              Shipping
            </span>
          </div>

          {/* Connector 2-3 */}
          <div className="flex-1 mx-2 h-0.5 bg-surface-container-highest rounded-full overflow-hidden">
            <div className={`h-full bg-primary-container transition-all duration-300 ${activeStep >= 3 ? 'w-full' : 'w-0'}`}></div>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => setActiveStep(3)}
            className={`flex items-center gap-space-xs z-10 cursor-pointer ${
              activeStep === 3 ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-label-md text-xs font-bold ${
              activeStep === 3 ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container text-on-surface-variant'
            }`}>
              3
            </div>
            <span className={`font-label-md text-xs ${activeStep === 3 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
              Pay
            </span>
          </div>
        </div>
      </div>

      {/* Priority Delivery Perks Banner */}
      <div className="px-margin-mobile">
        <div className="bg-surface-container rounded-2xl p-space-md flex items-center justify-between shadow-sm border border-surface-container-highest/60 relative overflow-hidden">
          <div className="flex items-center gap-space-sm z-10">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shadow-[0_0_16px_rgba(76,215,246,0.2)]">
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="font-label-lg text-sm text-on-surface font-semibold">Priority Dispatch</p>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant">Estimated delivery: 2-3 business days</p>
            </div>
          </div>
          <span className="font-label-sm text-xs uppercase px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-bold border border-primary/20">
            Free
          </span>
        </div>
      </div>

      {/* Cart Items List */}
      <div className="px-margin-mobile flex flex-col space-y-space-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-lg-mobile text-lg font-bold text-on-surface tracking-tight">Your Selection</h2>
          <span className="font-label-md text-xs text-on-surface-variant">
            {cartItems.length} luxury item{cartItems.length === 1 ? '' : 's'}
          </span>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-surface-container-low rounded-2xl p-space-md flex flex-col gap-space-sm shadow-md border border-surface-container-high/60 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex gap-space-md">
              {/* Thumbnail */}
              <div className="w-20 h-20 rounded-xl bg-surface-container-highest overflow-hidden flex-shrink-0 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                {item.badge && (
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-surface/80 backdrop-blur-md text-[9px] font-label-sm text-primary uppercase font-bold">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Info & Quantity */}
              <div className="flex flex-col flex-1 justify-between min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="font-label-lg text-sm text-on-surface font-semibold truncate">
                      {item.name}
                    </h3>
                    <button
                      aria-label="Remove item"
                      onClick={() => removeItem(item.id)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant">Color: {item.color}</p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  {/* Quantity Counter */}
                  <div className="flex items-center bg-surface-container rounded-full p-0.5 border border-surface-container-highest">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-90"
                    >
                      <span className="material-symbols-outlined text-xs">remove</span>
                    </button>
                    <span className="w-6 text-center font-mono text-xs font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-90"
                    >
                      <span className="material-symbols-outlined text-xs">add</span>
                    </button>
                  </div>

                  {/* Price */}
                  <span className="font-headline-sm text-base font-bold text-on-surface">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promo Code Form */}
      <div className="px-margin-mobile">
        <form onSubmit={handleApplyPromo} className="flex gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-lg">
              loyalty
            </span>
            <input
              type="text"
              placeholder="Promo key (e.g. LUNEXA15)..."
              value={inputPromo}
              onChange={(e) => setInputPromo(e.target.value)}
              className="w-full bg-surface-container-low pl-9 pr-3 py-2.5 rounded-xl text-xs text-on-surface placeholder:text-outline border border-surface-container-high focus:outline-none focus:border-secondary uppercase font-mono"
            />
          </div>
          <button
            type="submit"
            className={`px-5 py-2.5 rounded-xl font-label-md text-xs font-bold transition-all shadow-md active:scale-95 ${
              promoApplied
                ? 'bg-secondary-container text-on-secondary-container shadow-[0_0_16px_rgba(3,181,211,0.25)]'
                : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
            }`}
          >
            {promoApplied ? 'Applied (-15%)' : 'Apply'}
          </button>
        </form>

        {promoApplied && (
          <div className="flex items-center justify-between text-xs text-secondary mt-2 px-1">
            <span>VIP Code LUNEXA15 Active</span>
            <button onClick={removePromo} className="underline text-error hover:opacity-80">
              Remove
            </button>
          </div>
        )}
      </div>

      {/* Order Summary Card */}
      <div className="px-margin-mobile">
        <div className="bg-surface-container-low rounded-2xl p-4 border border-surface-container-high/60 space-y-2.5 shadow-md">
          <h3 className="font-label-lg text-xs uppercase tracking-wider font-bold text-outline">
            Summary Breakdown
          </h3>

          <div className="flex justify-between text-xs text-on-surface-variant">
            <span>Subtotal</span>
            <span className="font-mono text-on-surface">${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-xs text-on-surface-variant">
            <span>Priority Dispatch</span>
            <span className="font-mono text-primary font-bold">FREE</span>
          </div>

          {promoApplied && (
            <div className="flex justify-between text-xs text-secondary">
              <span>Syndicate VIP Promo (15%)</span>
              <span className="font-mono font-bold">-${discountAmount.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between text-xs text-on-surface-variant">
            <span>Cyber Tax (8%)</span>
            <span className="font-mono text-on-surface">${taxAmount.toFixed(2)}</span>
          </div>

          <div className="pt-2 border-t border-surface-container-high flex justify-between items-baseline">
            <span className="font-headline-sm text-sm font-bold text-on-surface">Total Order</span>
            <span className="font-headline-sm text-xl font-bold text-primary">${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Fixed Sticky Checkout CTAs */}
      <div className="fixed bottom-16 inset-x-0 z-40 bg-surface/95 backdrop-blur-2xl border-t border-surface-container-high/80 p-3 shadow-2xl">
        <div className="max-w-4xl mx-auto flex flex-col gap-2">
          {/* Biometric Apple Pay / Fast Pay */}
          <button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="w-full py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span>
              {isCheckingOut ? 'Securing Transaction...' : `1-Tap Biometric Checkout • $${totalAmount.toFixed(2)}`}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
