import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product, viewMode = 'grid', onSelectProduct }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const [justAdded, setJustAdded] = useState(false);

  const isFav = isWishlisted(product.id);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleFav = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  if (viewMode === 'list') {
    return (
      <article
        onClick={() => onSelectProduct(product)}
        className="flex gap-space-md bg-surface-container-low rounded-DEFAULT p-space-sm shadow-md hover:bg-surface-container transition-all cursor-pointer group border border-transparent hover:border-surface-container-highest"
      >
        <div className="relative w-28 h-28 rounded-lg bg-surface-container-highest/60 overflow-hidden flex-shrink-0 flex items-center justify-center">
          {product.discount && (
            <div className="absolute top-2 left-2 z-10">
              <span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-[10px] font-bold tracking-wide backdrop-blur-md">
                {product.discount}
              </span>
            </div>
          )}
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 py-1">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-primary font-semibold">
                {product.subCategory || product.category}
              </span>
              <button
                aria-label="Add to wishlist"
                onClick={handleFav}
                className="w-7 h-7 rounded-full bg-surface-container-lowest/70 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-error active:scale-90 transition-all"
              >
                <span
                  className={`material-symbols-outlined text-[16px] ${isFav ? 'text-error' : ''}`}
                  style={isFav ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  favorite
                </span>
              </button>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface font-semibold group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant line-clamp-1 mt-0.5">
              {product.tagline || product.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline gap-2">
              <span className="font-headline-sm text-lg font-bold text-on-surface">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="font-body-sm text-xs text-outline line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <button
              onClick={handleQuickAdd}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-label-sm text-xs font-bold transition-all shadow-sm active:scale-95 ${
                justAdded
                  ? 'bg-primary text-on-primary'
                  : 'bg-primary-container text-on-primary-container hover:bg-primary-container/80'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">
                {justAdded ? 'check' : 'add_shopping_cart'}
              </span>
              <span>{justAdded ? 'Added' : 'Add'}</span>
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelectProduct(product)}
      className="flex flex-col bg-surface-container-low rounded-DEFAULT p-space-sm shadow-md relative overflow-hidden group cursor-pointer border border-transparent hover:border-surface-container-highest transition-all duration-300"
    >
      <div className="relative w-full aspect-square rounded-DEFAULT bg-surface-container-highest/60 overflow-hidden flex items-center justify-center">
        {product.discount && (
          <div className="absolute top-2 left-2 z-10">
            <span className="px-2 py-0.5 rounded-full bg-tertiary-container/40 text-tertiary font-label-sm text-[10px] font-bold tracking-wide backdrop-blur-md">
              {product.discount}
            </span>
          </div>
        )}

        <button
          aria-label="Add to wishlist"
          onClick={handleFav}
          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-container-lowest/70 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-error active:scale-90 transition-all"
        >
          <span
            className={`material-symbols-outlined text-[16px] ${isFav ? 'text-error' : ''}`}
            style={isFav ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            favorite
          </span>
        </button>

        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-2.5">
        <div>
          <div className="flex items-center justify-between text-outline text-[11px] mb-0.5">
            <span className="uppercase font-semibold tracking-wider text-primary/80 truncate">
              {product.subCategory || product.category}
            </span>
            <div className="flex items-center gap-0.5 text-tertiary font-bold shrink-0">
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span>{product.rating}</span>
            </div>
          </div>

          <h3 className="font-headline-sm text-sm text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="font-body-sm text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">
            {product.tagline}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3 pt-2 border-t border-surface-container">
          <div className="flex flex-col">
            <span className="font-headline-sm text-sm font-bold text-on-surface">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-body-sm text-[10px] text-outline line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md active:scale-90 ${
              justAdded
                ? 'bg-primary text-on-primary'
                : 'bg-primary-container text-on-primary-container hover:scale-105'
            }`}
            title="Quick add to cart"
          >
            <span className="material-symbols-outlined text-[18px]">
              {justAdded ? 'check' : 'add'}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
