import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function WishlistPage({ onNavigate, onSelectProduct }) {
  const { wishlistIds } = useWishlist();

  const wishlistedProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="flex flex-col w-full pb-28 max-w-4xl mx-auto px-margin-mobile pt-space-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
            <h1 className="font-headline-lg-mobile text-2xl font-bold text-on-surface">Saved Vault</h1>
          </div>
          <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">
            Your curated wishlist of limited nocturnal hardware.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-surface-container-high text-xs font-mono font-semibold">
          {wishlistedProducts.length} items
        </span>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="py-20 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline mb-3">
            <span className="material-symbols-outlined text-3xl">favorite_border</span>
          </div>
          <h3 className="font-headline-sm text-base font-semibold text-on-surface">Your Vault is Empty</h3>
          <p className="font-body-sm text-xs text-on-surface-variant max-w-xs mt-1">
            Tap the heart icon on any artifact to store it in your encrypted vault.
          </p>
          <button
            onClick={() => onNavigate('catalog')}
            className="mt-5 px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-xs font-bold"
          >
            Explore Drops
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-gutter-mobile">
          {wishlistedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode="grid"
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      )}
    </div>
  );
}
