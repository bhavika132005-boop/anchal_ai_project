import React from 'react';

export default function ProfilePage({ onNavigate }) {
  return (
    <div className="flex flex-col w-full pb-28 max-w-4xl mx-auto px-margin-mobile pt-space-sm space-y-4">
      {/* Profile Header Card */}
      <div className="bg-surface-container-low rounded-2xl p-5 border border-surface-container-high/60 relative overflow-hidden shadow-xl">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="relative">
            <img
              alt="Profile"
              className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary/40 shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9YcINAHKVuZ7RXLKoSuEsUKTz4uf6Q86KQqxlUQP-F-ELJIaOtScy071CIheXRlbWt5K1Vfhb0GDdrpLq5pP0rAkntrXtBivLCp9nJ5rvU_HRtaCYFemo08d4ypIISk7dvZ-CN7qnfwZTgv_SDqpjBCsQV5VBy2uCK3CoxeeCSvGHS1U5oERNImlk14zUaQUHWG74o7beg2-DXoIM9ndjPOdyChhgG_9CpeUFUCYoPzWg8BHfwi5hvw"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary ring-2 ring-surface flex items-center justify-center">
              <span className="material-symbols-outlined text-[10px] text-on-primary">check</span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-headline-sm text-lg font-bold text-on-surface">Alex Mercer</h2>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold border border-primary/20">
                PRO PASS
              </span>
            </div>
            <p className="font-body-sm text-xs text-outline font-mono">ID: LX-9042-OBSIDIAN</p>
            <div className="flex items-center gap-1.5 mt-1 text-secondary text-xs font-semibold">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span>Lunexa Syndicate Tier IV</span>
            </div>
          </div>
        </div>

        {/* Member Perks Strip */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-surface-container-high/80 text-center">
          <div className="bg-surface-container/40 p-2 rounded-xl">
            <span className="text-sm font-bold text-primary font-mono">1,450</span>
            <span className="text-[10px] text-outline block">Aura Credits</span>
          </div>
          <div className="bg-surface-container/40 p-2 rounded-xl">
            <span className="text-sm font-bold text-secondary font-mono">Free</span>
            <span className="text-[10px] text-outline block">Global Express</span>
          </div>
          <div className="bg-surface-container/40 p-2 rounded-xl">
            <span className="text-sm font-bold text-tertiary font-mono">Early</span>
            <span className="text-[10px] text-outline block">Drop Access</span>
          </div>
        </div>
      </div>

      {/* Recent Dispatches Section */}
      <div className="bg-surface-container-low rounded-2xl p-4 border border-surface-container-high/60 space-y-3 shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-sm font-bold text-on-surface">Active Dispatches</h3>
          <span className="text-xs text-primary font-mono">Tracking (1)</span>
        </div>

        <div className="p-3 bg-surface-container/60 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-xl">flight_takeoff</span>
            </div>
            <div>
              <p className="font-label-md text-xs font-semibold text-on-surface">Lunexa Apex Wireless</p>
              <p className="font-body-sm text-[10px] text-outline">In Transit • Arriving Tomorrow</p>
            </div>
          </div>
          <span className="font-label-sm text-[10px] px-2 py-1 rounded-full bg-primary-container/20 text-primary font-bold">
            Priority
          </span>
        </div>
      </div>

      {/* Account Settings Menu */}
      <div className="bg-surface-container-low rounded-2xl border border-surface-container-high/60 divide-y divide-surface-container-high shadow-md overflow-hidden">
        {[
          { label: 'Payment Protocols & Biometrics', icon: 'credit_card', badge: 'Apple Pay Linked' },
          { label: 'Shipping Addresses', icon: 'location_on', badge: 'Primary: Neo Tokyo' },
          { label: 'Hardware Firmware Sync', icon: 'sync', badge: 'v2.4.1' },
          { label: 'Syndicate Encryption Keys', icon: 'key', badge: 'Active' },
          { label: 'Preferences & Dark Theme', icon: 'palette', badge: 'Luminous Onyx' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between p-3.5 hover:bg-surface-container transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                {item.icon}
              </span>
              <span className="font-label-md text-xs text-on-surface font-medium">{item.label}</span>
            </div>
            <div className="flex items-center gap-1.5 text-outline text-xs">
              <span className="text-[11px] font-mono">{item.badge}</span>
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
