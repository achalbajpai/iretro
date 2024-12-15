import React from 'react';
import { ShoppingCart, Monitor } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { cart } = useCart();
  
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Monitor className="w-6 h-6" />
          <span className="font-bold text-xl tracking-wider">RetroApple</span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="hover:text-gray-300">Store</a>
          <a href="#" className="hover:text-gray-300">Mac</a>
          <a href="#" className="hover:text-gray-300">iPhone</a>
          <div className="relative">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}