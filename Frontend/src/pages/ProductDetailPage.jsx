import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductDetailPage({ product, onNavigate }) {
  const { addToCart, showToast } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || 'Matte Obsidian');
  const [quantity, setQuantity] = useState(1);
  const [is360Active, setIs360Active] = useState(false);

  if (!product) return null;

  const isFav = isWishlisted(product.id);
  const photos = product.images && product.images.length > 0 ? product.images : [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB1F4_XZxvReulMLxg2zagVOTYdbP2hAIlhVBBD4NoCy4quOnuGq2Df1_-ouZiIimC7LwxR2i5w1vpldrLtj3zBB0UbS7R0h4xchqKmKRJ1YvK19qhC705rSsxK1_V4dBXLBvzPmCY4CpiFAyjmX6bGXH_lA-5s7eDo06vHFvQbS4CIDWnVUJL_jt7NrIpr-a8MYqjBwlpmmIZDcw-OtBwBgO4-2Dz-0TzYU7uW43p-zteWg-xhfxP89w'
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      showToast('Artifact link copied to clipboard');
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor);
    onNavigate('cart');
  };

  const dynamicTotal = (product.price * quantity).toFixed(2);

  return (
    <div className="flex flex-col w-full pb-36 max-w-4xl mx-auto">
      {/* Top Showcase & Visual Gallery */}
      <div className="relative w-full px-gutter-mobile pt-space-xs">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-surface-container-low flex flex-col justify-between p-space-md shadow-xl border border-surface-container-high/60">
          {/* Glow Gradient Underlay */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>

          {/* Top Action Badges */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-highest/80 backdrop-blur-md text-secondary text-label-sm text-xs font-bold uppercase tracking-wider shadow-sm border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              {product.badge || 'Flagship Edition'}
            </span>

            <div className="flex items-center gap-space-xs">
              <button
                aria-label="Share product"
                onClick={handleShare}
                className="w-9 h-9 rounded-full bg-surface-container-highest/80 backdrop-blur-md text-on-surface flex items-center justify-center active:scale-95 transition-transform hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </button>
              <button
                aria-label="Add to wishlist"
                onClick={() => toggleWishlist(product.id)}
                className="w-9 h-9 rounded-full bg-surface-container-highest/80 backdrop-blur-md text-on-surface flex items-center justify-center active:scale-95 transition-transform hover:bg-surface-container"
              >
                <span
                  className={`material-symbols-outlined text-lg ${isFav ? 'text-error' : ''}`}
                  style={isFav ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  favorite
                </span>
              </button>
            </div>
          </div>

          {/* Main Product Image */}
          <div className="absolute inset-0 flex items-center justify-center p-space-lg pointer-events-none">
            <img
              src={photos[activePhotoIndex]}
              alt={product.name}
              className={`w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.85)] transition-all duration-300 ${
                is360Active ? 'rotate-6 scale-105' : ''
              }`}
            />
          </div>

          {/* Bottom Gallery Actions */}
          <div className="relative z-10 flex items-end justify-between w-full">
            <button
              onClick={() => {
                setIs360Active(!is360Active);
                showToast(is360Active ? '360° Studio Vitrine Reset' : '360° Interactive Vitrine Activated');
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-semibold active:scale-95 transition-all shadow-md ${
                is360Active
                  ? 'bg-primary text-on-primary font-bold'
                  : 'bg-surface-container-highest/85 text-on-surface hover:bg-surface-container-high'
              }`}
            >
              <span className="material-symbols-outlined text-base">360</span>
              <span>{is360Active ? 'Interactive Mode' : '360° View'}</span>
            </button>

            <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/80 text-on-surface-variant text-xs font-mono tracking-wide">
              {activePhotoIndex + 1} / {photos.length}
            </span>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex items-center gap-2.5 mt-space-sm overflow-x-auto no-scrollbar py-1">
          {photos.map((url, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhotoIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-xl bg-surface-container-low overflow-hidden p-1 shadow-sm transition-all duration-200 border ${
                activePhotoIndex === idx
                  ? 'border-primary ring-2 ring-primary/40 opacity-100 scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={url} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Title & Highlights */}
      <div className="px-gutter-mobile mt-space-md flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary tracking-wider uppercase">
            {product.tagline || 'Lunexa Soundlabs'}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            {product.shippingInfo || 'Ready to Ship in 24h'}
          </span>
        </div>

        <h1 className="font-headline-lg-mobile text-2xl text-on-surface tracking-tight font-bold">
          {product.name}
        </h1>
        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
          {product.description}
        </p>

        {/* Rating Aggregate */}
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <div className="flex items-center text-tertiary">
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span className="font-label-lg text-sm font-bold text-on-surface ml-1">{product.rating}</span>
          </div>
          <span className="text-on-surface-variant text-xs font-mono">({product.reviewCount} verified reviews)</span>
          <span className="text-on-surface-variant text-xs">•</span>
          <span className="text-primary font-label-sm text-xs bg-surface-container-high px-2 py-0.5 rounded-full font-medium">
            98% Recommended
          </span>
        </div>
      </div>

      {/* Color Variant Selector */}
      {product.colors && product.colors.length > 0 && (
        <div className="px-gutter-mobile mt-space-md">
          <div className="flex justify-between items-center mb-2">
            <span className="font-label-md text-xs font-bold uppercase tracking-wider text-on-surface">
              Chassis Color:
            </span>
            <span className="font-label-md text-xs text-primary font-semibold">{selectedColor}</span>
          </div>
          <div className="flex items-center gap-2.5">
            {product.colors.map(col => (
              <button
                key={col.name}
                onClick={() => setSelectedColor(col.name)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all ${
                  selectedColor === col.name
                    ? 'bg-surface-container-high border-primary text-on-surface shadow-md'
                    : 'bg-surface-container border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-surface-container-highest shadow-inner"
                  style={{ backgroundColor: col.hex }}
                />
                <span className="text-xs font-medium">{col.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Technical Specifications Matrix */}
      {product.specs && (
        <div className="px-gutter-mobile mt-space-lg">
          <h3 className="font-headline-sm text-sm font-bold text-on-surface mb-2.5 uppercase tracking-wider">
            Technical Architecture
          </h3>
          <div className="grid grid-cols-2 gap-2 bg-surface-container-low p-3.5 rounded-2xl border border-surface-container-high">
            {product.specs.map(spec => (
              <div key={spec.label} className="p-2 bg-surface-container/60 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-outline block">{spec.label}</span>
                <span className="text-xs font-semibold text-on-surface mt-0.5 block">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Customer Reviews Spotlight */}
      <div className="px-gutter-mobile mt-space-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-headline-sm text-sm font-bold text-on-surface uppercase tracking-wider">
            Verified Transmission
          </h3>
          <span className="text-xs text-primary font-mono">View All ({product.reviewCount})</span>
        </div>
        <div className="bg-surface-container-low p-3.5 rounded-2xl border border-surface-container-high flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface">Kaelen V. — Sound Engineer</span>
            <div className="flex text-tertiary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            "The low-end acoustic response in the beryllium diaphragm is immaculate. Zero fatigue over 6-hour studio sessions. Truly next level nocturnal audio."
          </p>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-16 inset-x-0 z-40 bg-surface/95 backdrop-blur-2xl border-t border-surface-container-high/80 p-3 shadow-2xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          {/* Price & Quantity */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono text-outline">Total</span>
              <span className="font-headline-sm text-lg font-bold text-primary">${dynamicTotal}</span>
            </div>

            <div className="flex items-center bg-surface-container-high rounded-full p-1 border border-surface-container-highest">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-7 h-7 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-90"
              >
                <span className="material-symbols-outlined text-[16px]">remove</span>
              </button>
              <span className="w-7 text-center font-mono font-bold text-xs">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-90"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              className="px-4 py-2.5 rounded-full bg-surface-container-highest text-on-surface font-label-md text-xs font-bold hover:bg-surface-container border border-outline-variant active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleBuyNow}
              className="px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-xs font-bold shadow-[0_0_18px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Instant Buy</span>
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
