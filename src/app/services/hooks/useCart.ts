// hooks/useCart.ts
import { useState, useEffect } from 'react';
import { CARTKEY } from '../constants';

const useCart = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    // Function to update cart count from local storage
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem(CARTKEY) || '[]');
      setCartCount(cart.length);
    };

    // Initialize cart count
    updateCartCount();

    // Event listener for local storage changes
    window.addEventListener('storage', updateCartCount);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return cartCount;
};

export default useCart;