import React from 'react';

export default function FilterModal({
  isOpen,
  onClose,
  priceLimit,
  setPriceLimit,
  selectedCategory,
  setSelectedCategory,
  capabilities,
  toggleCapability,
  onReset
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-surface-container-lowest/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Sheet */}
      <div className="relative w-full max-w-lg bg-surface-container rounded-t-[2.5rem] p-6 shadow-2xl border-t border-surface-container-highest max-h-[85vh] overflow-y-auto no-scrollbar z-10 animate-in slide-in-from-bottom duration-300">
        {/* Drag Handle Indicator */}
        <div className="w-12 h-1.5 bg-surface-container-highest rounded-full mx-auto mb-5" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
          <div>
            <h2 className="font-headline-sm text-lg font-bold text-on-surface">Filter & Refine</h2>
            <p className="font-body-sm text-xs text-on-surface-variant">Customize your audio vitrine specs</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Price Slider */}
        <div className="py-5 border-b border-surface-container-high">
          <div className="flex justify-between items-center mb-2">
            <span className="font-label-md text-sm text-on-surface font-semibold">Max Price</span>
            <span className="font-headline-sm text-primary text-base font-bold">${priceLimit}</span>
          </div>
          <input
            type="range"
            min="50"
            max="1000"
            step="10"
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-[11px] text-outline mt-1 font-mono">
            <span>$50</span>
            <span>$500</span>
            <span>$1,000</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="py-4 border-b border-surface-container-high">
          <span className="font-label-md text-sm text-on-surface font-semibold block mb-2.5">
            Category
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Audio' },
              { id: 'audio', label: 'Acoustics' },
              { id: 'wearables', label: 'Wearables' },
              { id: 'cyber-apparel', label: 'Apparel' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full font-label-sm text-xs transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-on-primary font-bold shadow-md shadow-primary/20'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="py-4">
          <span className="font-label-md text-sm text-on-surface font-semibold block mb-2.5">
            Key Capabilities
          </span>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Active Noise Cancel',
              'Spatial Dolby 360',
              'Multipoint Pairing',
              'Lossless LDAC'
            ].map(feature => {
              const checked = capabilities.includes(feature);
              return (
                <label
                  key={feature}
                  onClick={() => toggleCapability(feature)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border transition-all cursor-pointer ${
                    checked
                      ? 'bg-primary/10 border-primary/40 text-primary'
                      : 'bg-surface-container-low border-transparent text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      checked ? 'text-primary' : 'text-outline'
                    }`}
                  >
                    {checked ? 'check_box' : 'check_box_outline_blank'}
                  </span>
                  <span className="font-body-sm text-xs select-none">{feature}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 flex items-center gap-3">
          <button
            onClick={onReset}
            className="w-1/3 py-3 rounded-full bg-surface-container-high text-on-surface font-label-md text-xs font-semibold text-center hover:bg-surface-container-highest transition-all"
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="w-2/3 py-3 rounded-full bg-primary text-on-primary font-label-md text-sm font-bold shadow-lg shadow-primary/30 active:scale-95 transition-all"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
