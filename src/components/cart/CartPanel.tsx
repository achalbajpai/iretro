import React from 'react';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../types';

export function CartPanel(): JSX.Element {
  const { cart, removeFromCart, toggleCart } = useCart();

  const calculateTotal = (items: Product[]): number => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="w-full max-w-md h-full bg-black border-l-2 border-blue-600">
      {/* Header */}
      <div className="bg-blue-800 p-4 flex justify-between items-center">
        <h2 className="text-white font-mono">SHOPPING CART</h2>
        <button
          onClick={toggleCart}
          className="text-white hover:text-yellow-400 font-mono"
        >
          [X] CLOSE
        </button>
      </div>

      {/* Cart Content */}
      <div className="p-4 h-[calc(100vh-200px)] overflow-auto">
        {cart.length === 0 ? (
          <div className="text-center py-8 border border-blue-600 p-4">
            <p className="text-green-400 font-mono">CART IS EMPTY</p>
            <p className="text-blue-400 font-mono text-sm mt-2">
              STATUS: AWAITING ITEMS
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="border border-blue-600 p-4">
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h3 className="text-green-400 font-mono">{item.name}</h3>
                    <p className="text-blue-400 font-mono text-sm">
                      ID: {item.id}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-mono">
                      ${item.price.toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-400 font-mono text-sm mt-2"
                    >
                      [REMOVE]
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-black border-t border-blue-600">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-blue-400 font-mono">TOTAL AMOUNT:</span>
            <span className="text-green-400 font-mono text-xl">
              ${calculateTotal(cart).toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => alert('Checkout functionality coming soon!')}
            disabled={cart.length === 0}
            className={`w-full p-3 font-mono ${
              cart.length === 0
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-green-900 text-green-400 hover:bg-green-800 animate-pulse'
            } border border-blue-600`}
          >
            {cart.length === 0 ? '[CART EMPTY]' : '[PROCEED TO CHECKOUT]'}
          </button>
        </div>

        {/* System Status */}
        <div className="border-t border-blue-600 p-2">
          <div className="text-xs font-mono flex justify-between">
            <span className="text-blue-400">
              [CART STATUS: {cart.length > 0 ? 'ACTIVE' : 'IDLE'}]
            </span>
            <span className="text-green-400">
              ITEMS: {cart.length} | SYSTEM: OK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}