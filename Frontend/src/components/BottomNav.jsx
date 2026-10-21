import React from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function BottomNav({ currentTab, onNavigate }) {
  const { totalCount } = useCart();
  const { wishlistCount } = useWishlist();

  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'catalog', label: 'Catalog', icon: 'grid_view' },
    { id: 'wishlist', label: 'Wishlist', icon: 'favorite', badge: wishlistCount },
    { id: 'cart', label: 'Cart', icon: 'shopping_bag', badge: totalCount },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-2xl border-t border-surface-container-high/40 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]">
      <div className="flex justify-around items-center h-16 px-space-xs max-w-4xl mx-auto">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[44px] transition-all relative ${
                isActive ? 'text-primary scale-105' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[24px]"
                  style={item.id === 'wishlist' && isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>

                {item.badge > 0 && (
                  <span
                    className={`absolute -top-1.5 -right-2.5 px-1.5 py-0.2 rounded-full font-label-sm text-[9px] font-bold shadow-md transition-transform animate-in fade-in ${
                      item.id === 'cart'
                        ? 'bg-secondary text-on-secondary shadow-[0_0_12px_rgba(76,215,246,0.6)]'
                        : 'bg-primary-container text-on-primary-container shadow-[0_0_12px_rgba(16,185,129,0.6)]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`font-label-sm text-[11px] tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
