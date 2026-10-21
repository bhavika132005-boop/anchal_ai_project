import React, { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage({ onNavigate, onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);

  // Flash drop countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 18, seconds: 22 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCoupon = () => {
    navigator.clipboard?.writeText('LUNEXA15');
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setNewsletterStatus('success');
      setEmail('');
    } else {
      setNewsletterStatus('error');
    }
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="flex flex-col w-full pb-24 max-w-4xl mx-auto">
      {/* Sticky Search Bar */}
      <div className="sticky top-16 z-40 px-gutter-mobile py-space-sm bg-surface/90 backdrop-blur-xl border-b border-surface-container/30">
        <div className="relative flex items-center w-full h-12 bg-surface-container rounded-full px-space-md shadow-lg shadow-surface-container-lowest/50 group focus-within:ring-2 focus-within:ring-secondary/40 transition-all">
          <span className="material-symbols-outlined text-outline text-xl mr-space-xs">search</span>
          <input
            className="w-full bg-transparent text-on-surface placeholder:text-outline font-body-md text-sm focus:outline-none"
            placeholder="Search sneakers, tech, luxury apparel..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex items-center gap-space-xs pl-space-xs">
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="w-7 h-7 rounded-full flex items-center justify-center text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            )}
            <button
              aria-label="Voice Search"
              onClick={() => alert('Lunexa Voice Neural Command activated')}
              className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">mic</span>
            </button>
            <button
              aria-label="Visual Scan"
              onClick={() => alert('Lunexa Optics Scanner ready')}
              className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">document_scanner</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-lg px-gutter-mobile pt-space-xs pb-space-lg">
        {/* Hero Banner Card */}
        <div className="relative overflow-hidden rounded-lg bg-surface-container p-space-lg shadow-xl border border-surface-container-highest/40">
          {/* Glow Gradients */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Hero Visual Backdrop */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_peEJSULJzhsrA-kK4ugGvNmHPRUKoIKjr2PT78c4N_WHaRTEZ3xL_aSpsbsHXz4U3u5f2hLKUITfNaH0SE63QVhhJ9aciP6xTxAElzYmAPngf9WJ1xmsZ-4koCsl1hirdZu85-82GW3t09TlvbZYariVEKsXzYmC51cRMPBfnmg6xpXxdYLrkJHK5IaNz1L5KIrHrELoyR8AQDA6j618nrSOgdn71rc5AEbRC_e9CV2lxM37uEE9cw')`
            }}
          />

          <div className="relative z-10 flex flex-col items-start gap-space-md">
            <div className="flex items-center gap-space-xs flex-wrap">
              <span className="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-[11px] tracking-wider flex items-center gap-1.5 shadow-sm border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                NEW DROPS // SPRING 2025
              </span>
              <span className="px-space-sm py-0.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-[11px] font-bold shadow-sm">
                -35% OFF
              </span>
            </div>

            <div className="flex flex-col gap-1 max-w-[280px]">
              <h2 className="font-headline-lg-mobile text-2xl text-on-surface font-bold tracking-tight">
                Aura Cyber Minimalist Series
              </h2>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Engineered aerospace-grade titanium & neural audio woven into high-ticket nocturnal streetwear.
              </p>
            </div>

            <button
              onClick={() => onNavigate('catalog')}
              className="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-lg text-sm font-bold shadow-[0_0_24px_-4px_rgba(16,185,129,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Explore Collection</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Category Pills Ticker */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-lg text-sm text-on-surface font-semibold">Curated Categories</span>
            <button
              onClick={() => onNavigate('catalog')}
              className="font-label-sm text-xs text-primary hover:underline cursor-pointer"
            >
              Browse all (24)
            </button>
          </div>

          <div className="flex gap-space-xs overflow-x-auto pb-1 no-scrollbar -mx-gutter-mobile px-gutter-mobile">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-label-md text-xs whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-on-primary font-bold shadow-[0_0_16px_rgba(78,222,163,0.35)]'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flash Sale Banner / Countdown */}
        <div className="bg-surface-container-low rounded-2xl p-4 border border-surface-container-high/60 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-xl animate-pulse">
                bolt
              </span>
              <span className="font-headline-sm text-sm font-bold tracking-tight text-on-surface">
                Flash Nocturnal Drop
              </span>
            </div>
            {/* Live Timer */}
            <div className="flex items-center gap-1 font-mono text-xs font-bold text-tertiary bg-tertiary/10 px-2.5 py-1 rounded-full border border-tertiary/20">
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Flash items horizontal scroll */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-2 px-2 pb-1">
            {PRODUCTS.slice(0, 3).map(prod => (
              <div
                key={`flash-${prod.id}`}
                onClick={() => onSelectProduct(prod)}
                className="w-44 flex-shrink-0 bg-surface-container rounded-xl p-2.5 border border-surface-container-highest/40 cursor-pointer hover:border-primary/40 transition-all"
              >
                <div className="w-full h-28 rounded-lg overflow-hidden bg-surface-container-highest/60 mb-2">
                  <img src={prod.images?.[0]} alt={prod.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-label-md text-xs font-semibold text-on-surface truncate">{prod.name}</h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-headline-sm text-xs font-bold text-primary">${prod.price.toFixed(2)}</span>
                  <span className="font-label-sm text-[10px] text-tertiary bg-tertiary/10 px-1.5 py-0.5 rounded">
                    {prod.discount}
                  </span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary h-full w-3/4 rounded-full"></div>
                </div>
                <span className="font-label-sm text-[9px] text-outline mt-1 block">Only {prod.stockCount} left</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Now Grid */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              <h2 className="font-headline-lg-mobile text-lg font-bold text-on-surface">Trending Artifacts</h2>
            </div>
            <span className="font-label-sm text-xs text-outline font-mono">
              {filteredProducts.length} items
            </span>
          </div>

          <div className="grid grid-cols-2 gap-gutter-mobile">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode="grid"
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </div>

        {/* Lunexa Syndicate VIP Coupon Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-low p-5 border border-secondary/20 shadow-xl">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-secondary font-bold">
                VIP Access Key
              </span>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mt-0.5">
                Join Lunexa Syndicate
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant max-w-[240px] mt-1">
                Use code <span className="text-secondary font-mono font-bold">LUNEXA15</span> at checkout for 15% off your first drop.
              </p>
            </div>
            <button
              onClick={handleCopyCoupon}
              className={`px-3 py-1.5 rounded-full font-label-sm text-xs font-bold transition-all shadow-md active:scale-95 ${
                copiedCoupon
                  ? 'bg-secondary text-on-secondary'
                  : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
              }`}
            >
              {copiedCoupon ? 'Copied!' : 'Copy Code'}
            </button>
          </div>

          <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter encrypted email..."
              className="flex-1 bg-surface-container-lowest px-3 py-2 rounded-xl text-xs text-on-surface placeholder:text-outline border border-surface-container-high focus:outline-none focus:border-secondary"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-secondary-container text-on-secondary-container font-label-sm text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Join
            </button>
          </form>

          {newsletterStatus === 'success' && (
            <p className="text-[11px] text-primary mt-2">
              Access granted! Welcome to the Lunexa Syndicate.
            </p>
          )}
          {newsletterStatus === 'error' && (
            <p className="text-[11px] text-error mt-2">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
