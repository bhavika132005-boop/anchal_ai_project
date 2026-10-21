import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';
import { PRODUCTS } from './data/products';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [previousTab, setPreviousTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleNavigate = (tab) => {
    if (currentTab !== 'product-detail') {
      setPreviousTab(currentTab);
    }
    setCurrentTab(tab);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setPreviousTab(currentTab);
    setCurrentTab('product-detail');
  };

  const handleBack = () => {
    setCurrentTab(previousTab || 'home');
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen bg-surface text-on-surface font-body-md text-body-md flex flex-col selection:bg-primary-container selection:text-on-primary-container relative">
          {/* Header */}
          <Header
            currentTab={currentTab}
            onNavigate={handleNavigate}
            canGoBack={currentTab === 'product-detail'}
            onBack={handleBack}
          />

          {/* Main Content Area */}
          <main className="flex-1 w-full pt-16 bg-surface min-h-screen">
            {currentTab === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onSelectProduct={handleSelectProduct}
              />
            )}

            {currentTab === 'catalog' && (
              <CatalogPage
                onSelectProduct={handleSelectProduct}
              />
            )}

            {currentTab === 'product-detail' && (
              <ProductDetailPage
                product={selectedProduct}
                onNavigate={handleNavigate}
              />
            )}

            {currentTab === 'cart' && (
              <CartPage
                onNavigate={handleNavigate}
                onSelectProduct={handleSelectProduct}
              />
            )}

            {currentTab === 'wishlist' && (
              <WishlistPage
                onNavigate={handleNavigate}
                onSelectProduct={handleSelectProduct}
              />
            )}

            {currentTab === 'profile' && (
              <ProfilePage
                onNavigate={handleNavigate}
              />
            )}
          </main>

          {/* Toast Notification */}
          <Toast />

          {/* Bottom Navigation */}
          <BottomNav
            currentTab={currentTab}
            onNavigate={handleNavigate}
          />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}
