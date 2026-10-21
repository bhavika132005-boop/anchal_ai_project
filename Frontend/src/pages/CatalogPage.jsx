import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterModal from '../components/FilterModal';

export default function CatalogPage({ onSelectProduct }) {
  const [searchQuery, setSearchQuery] = useState('Wireless & Audio');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('popularity'); // 'popularity' | 'price-asc' | 'price-desc' | 'rating'
  const [priceLimit, setPriceLimit] = useState(500);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeCapabilities, setActiveCapabilities] = useState(['Active Noise Cancel', 'Spatial Dolby 360']);
  const [onlyInStock, setOnlyInStock] = useState(true);
  const [minRating, setMinRating] = useState(4.5);

  const toggleCapability = (cap) => {
    setActiveCapabilities(prev =>
      prev.includes(cap) ? prev.filter(c => c !== cap) : [...prev, cap]
    );
  };

  const handleResetFilters = () => {
    setPriceLimit(500);
    setSelectedCategory('all');
    setActiveCapabilities([]);
    setOnlyInStock(false);
    setMinRating(0);
    setSearchQuery('');
  };

  // Filter products logic
  const filteredProducts = PRODUCTS.filter(prod => {
    if (prod.price > priceLimit) return false;
    if (onlyInStock && !prod.inStock) return false;
    if (minRating > 0 && prod.rating < minRating) return false;
    if (selectedCategory !== 'all' && prod.category !== selectedCategory) return false;
    if (activeCapabilities.length > 0) {
      const hasAnyCap = activeCapabilities.some(cap => prod.capabilities?.includes(cap));
      if (!hasAnyCap) return false;
    }
    if (searchQuery.trim() && searchQuery !== 'Wireless & Audio') {
      const q = searchQuery.toLowerCase();
      const match = prod.name.toLowerCase().includes(q) || prod.description.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // popularity / default
  });

  const activeFilterCount = (priceLimit < 500 ? 1 : 0) +
    (onlyInStock ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    activeCapabilities.length;

  return (
    <div className="flex flex-col w-full pb-24 max-w-4xl mx-auto">
      {/* Dynamic Category Ambient Flare Header */}
      <div className="relative px-margin-mobile pt-space-sm pb-space-xs">
        <div className="relative flex items-center justify-between mb-space-xs">
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-semibold">
                Audio Vitrine
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-2xl font-bold text-on-surface mt-0.5 tracking-tight">
              Wireless & Audio
            </h1>
          </div>

          <div className="bg-surface-container-high/80 backdrop-blur-md px-space-sm py-1 rounded-full shadow-sm border border-surface-container-highest">
            <span className="font-label-sm text-xs text-on-surface-variant font-semibold">
              {filteredProducts.length} items
            </span>
          </div>
        </div>

        {/* Search & Filter Query Input Field */}
        <div className="relative flex items-center w-full mt-space-xs">
          <div className="absolute left-3.5 flex items-center pointer-events-none text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input
            aria-label="Filter current catalog"
            className="w-full bg-surface-container-low/90 text-on-surface font-body-md text-sm pl-10 pr-10 py-2.5 rounded-full shadow-inner focus:outline-none focus:bg-surface-container-high transition-all placeholder:text-on-surface-variant border border-surface-container-high"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              aria-label="Clear Search"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 w-6 h-6 flex items-center justify-center rounded-full bg-surface-variant text-on-surface-variant hover:text-on-surface active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Filter Chips */}
      <div className="w-full overflow-x-auto py-space-xs px-margin-mobile flex items-center gap-2 no-scrollbar">
        {/* Active Chip: Price */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary shrink-0 shadow-sm border border-primary/20">
          <span className="font-label-sm text-xs font-semibold">Price: &lt; ${priceLimit}</span>
          <button
            aria-label="Reset price filter"
            onClick={() => setPriceLimit(1000)}
            className="flex items-center hover:opacity-75"
          >
            <span className="material-symbols-outlined text-[14px]">close</span>
          </button>
        </div>

        {/* Active Chip: In Stock */}
        {onlyInStock && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary shrink-0 shadow-sm border border-secondary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-xs font-semibold">In Stock</span>
            <button
              aria-label="Remove stock filter"
              onClick={() => setOnlyInStock(false)}
              className="flex items-center hover:opacity-75"
            >
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          </div>
        )}

        {/* Active Chip: Rating */}
        {minRating > 0 && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tertiary/10 text-tertiary shrink-0 shadow-sm border border-tertiary/20">
            <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span className="font-label-sm text-xs font-semibold">{minRating}+</span>
            <button
              aria-label="Remove rating filter"
              onClick={() => setMinRating(0)}
              className="flex items-center hover:opacity-75"
            >
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          </div>
        )}

        {/* Clear All Button */}
        <button
          onClick={handleResetFilters}
          className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface text-xs font-label-sm shrink-0 active:scale-95 transition-all"
        >
          Clear All
        </button>
      </div>

      {/* Filter, View & Sort Control Matrix */}
      <div className="flex items-center justify-between px-margin-mobile py-space-xs mt-1">
        {/* Filter Trigger Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-surface-container-high/90 text-on-surface shadow-sm active:scale-95 transition-all hover:bg-surface-container-highest cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px] text-primary">tune</span>
          <span className="font-label-md text-xs font-semibold">Filter & Refine</span>
          {activeFilterCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        <div className="flex items-center gap-2">
          {/* Sort Select */}
          <div className="relative flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full shadow-inner border border-surface-container-high">
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">swap_vert</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs text-on-surface font-semibold focus:outline-none cursor-pointer pr-1"
            >
              <option value="popularity" className="bg-surface-container text-on-surface">Popularity</option>
              <option value="price-asc" className="bg-surface-container text-on-surface">Price: Low to High</option>
              <option value="price-desc" className="bg-surface-container text-on-surface">Price: High to Low</option>
              <option value="rating" className="bg-surface-container text-on-surface">Highest Rated</option>
            </select>
          </div>

          {/* View Switcher (Grid vs List) */}
          <div className="flex items-center bg-surface-container-low p-1 rounded-full shadow-inner border border-surface-container-high">
            <button
              aria-label="Grid view"
              onClick={() => setViewMode('grid')}
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors ${
                viewMode === 'grid'
                  ? 'bg-surface-container-highest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
            </button>
            <button
              aria-label="List view"
              onClick={() => setViewMode('list')}
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors ${
                viewMode === 'list'
                  ? 'bg-surface-container-highest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">view_agenda</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Catalog Grid / List */}
      <div
        className={`px-margin-mobile pt-space-xs pb-space-lg ${
          viewMode === 'grid'
            ? 'grid grid-cols-2 gap-gutter-mobile'
            : 'flex flex-col gap-3'
        }`}
      >
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            viewMode={viewMode}
            onSelectProduct={onSelectProduct}
          />
        ))}

        {filteredProducts.length === 0 && (
          <div className="col-span-2 py-16 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">search_off</span>
            <p className="font-headline-sm text-sm text-on-surface font-semibold">No artifacts matched your criteria</p>
            <button
              onClick={handleResetFilters}
              className="mt-3 px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Filter Modal Drawer */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        priceLimit={priceLimit}
        setPriceLimit={setPriceLimit}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        capabilities={activeCapabilities}
        toggleCapability={toggleCapability}
        onReset={handleResetFilters}
      />
    </div>
  );
}
