import React from 'react';

export default function Header({ currentTab, onNavigate, canGoBack, onBack }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.4)] border-b border-surface-container-high/40 pt-safe">
      <div className="h-16 px-gutter-mobile flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-space-sm">
          {canGoBack && (
            <button
              aria-label="Go back"
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
            </button>
          )}

          {/* Lunexa Brand Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer select-none"
            onClick={() => onNavigate('home')}
          >
            <div className="w-9 h-9 rounded-xl bg-surface-container-low border border-[#2a303c] flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" className="w-6 h-6">
                <defs>
                  <linearGradient id="headerGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10b981" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path d="M9 25V11L21 25V11" stroke="url(#headerGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="26" cy="11" r="2.5" fill="#10b981"/>
              </svg>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold bg-gradient-to-r from-on-surface via-primary-fixed to-secondary bg-clip-text text-transparent">
              Lunexa
            </span>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-space-xs">
          <button
            aria-label="Notifications"
            onClick={() => alert('Lunexa System: 2 new drops unlocked in your tier!')}
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary ring-2 ring-surface animate-pulse"></span>
          </button>

          <button
            aria-label="Profile"
            onClick={() => onNavigate('profile')}
            className="p-1 rounded-full hover:ring-2 hover:ring-primary/40 transition-all active:scale-95"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-primary/40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9YcINAHKVuZ7RXLKoSuEsUKTz4uf6Q86KQqxlUQP-F-ELJIaOtScy071CIheXRlbWt5K1Vfhb0GDdrpLq5pP0rAkntrXtBivLCp9nJ5rvU_HRtaCYFemo08d4ypIISk7dvZ-CN7qnfwZTgv_SDqpjBCsQV5VBy2uCK3CoxeeCSvGHS1U5oERNImlk14zUaQUHWG74o7beg2-DXoIM9ndjPOdyChhgG_9CpeUFUCYoPzWg8BHfwi5hvw"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
