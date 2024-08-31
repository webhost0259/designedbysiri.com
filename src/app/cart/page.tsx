'use client'
import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { HiOutlineXCircle } from "react-icons/hi";
import { SIRICARTUPDATE } from '../services/constants';

const CARTKEY = 'siri-cart';

interface CartItem {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem(CARTKEY) || '[]');
    setCart(savedCart);
  }, []);

  const handleRemoveItem = (productId: number) => {
    const updatedCart = cart.filter(item => item.productId !== productId);
    localStorage.setItem(CARTKEY, JSON.stringify(updatedCart));
    window.dispatchEvent(new Event(SIRICARTUPDATE));
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    // Implement checkout logic
    setIsCheckoutOpen(true);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-row  space-x-4 justify-between">
          <div className='flex flex-col w-full space-y-4'>
            {cart.map(item => (
              <div key={item.productId} className="flex w-full items-center space-x-4 p-4 border border-gray-300 rounded-lg">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-lg">Price: Rs.{item.price.toFixed(2)}</p>
                  <p className="text-lg">Quantity: {item.quantity}</p>
                </div>
                <button 
                  className="text-red-500 hover:text-red-700 flex-shrink-0"
                  onClick={() => handleRemoveItem(item.productId)}
                >
                  <HiOutlineXCircle className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col min-w-80 space-y-4 justify-end border-2 rounded-md border-gray-300 py-4 px-2">
            {
              cart.map(item => (
                  <div className='flex flex-row justify-between space-x-4 max-w-80'>
                    <h6 className="text-sm">{item.name}</h6>
                    <h6 className="text-sm">({item.price} * {item.quantity}) = Rs.{(item.price * item.quantity).toFixed(2)}</h6>
                  </div>
              ))
            }
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      <Dialog open={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <Dialog.Title className="text-2xl font-bold mb-4">Checkout</Dialog.Title>
            <p className="text-lg mb-4">Thank you for your purchase! We are processing your order and will send you a confirmation email soon.</p>
            <button 
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => setIsCheckoutOpen(false)}
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
      <div className='flex flex-col space-y-6 justify-end items-end mt-8'>
        <div className='flex flex-row justify-between space-x-4 max-w-80'>
          <h6 className="text-md">Subtotal:</h6>
          <h6 className="text-md">Rs.{getTotal().toFixed(2)}</h6>
        </div>
        <button 
          className="bg-green-600 text-white max-w-80 font-semibold px-6 py-2 rounded-lg hover:bg-green-700"
          onClick={() => {
            window.location.href = '/checkout';
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;