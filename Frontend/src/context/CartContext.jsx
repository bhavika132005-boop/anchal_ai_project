import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_CART } from '../data/products';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('lunexa_cart');
    return saved ? JSON.parse(saved) : INITIAL_CART;
  });

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    localStorage.setItem('lunexa_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2800);
  };

  const addToCart = (product, quantity = 1, selectedColor = null) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          color: selectedColor || (product.colors?.[0]?.name ?? 'Matte Obsidian'),
          price: product.price,
          quantity,
          image: product.images?.[0] || '',
          badge: product.badge || 'New'
        }
      ];
    });
    showToast(`Added ${quantity}x ${product.name} to Cart`);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from Cart');
  };

  const applyPromo = (code) => {
    if (code.trim().toUpperCase() === 'LUNEXA15' || code.trim().length > 0) {
      setPromoCode(code.trim().toUpperCase());
      setPromoApplied(true);
      showToast('15% VIP Promo Code applied!');
      return true;
    }
    return false;
  };

  const removePromo = () => {
    setPromoApplied(false);
    setPromoCode('');
    showToast('Promo code removed');
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = promoApplied ? subtotal * 0.15 : 0;
  const taxableBase = Math.max(0, subtotal - discountAmount);
  const taxAmount = taxableBase > 0 ? taxableBase * 0.08 : 0;
  const shippingAmount = 0; // Free Priority Dispatch
  const totalAmount = taxableBase + taxAmount + shippingAmount;
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        promoCode,
        promoApplied,
        applyPromo,
        removePromo,
        subtotal,
        discountAmount,
        taxAmount,
        shippingAmount,
        totalAmount,
        totalCount,
        toast,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
