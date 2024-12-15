import React from 'react';
import { useCart } from '../../context/CartContext';

export function Header(): JSX.Element {
  const { cart, toggleCart } = useCart();
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="bg-black border-b-2 border-blue-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Brand Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="relative w-10 h-10 mr-3">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"
                      fill="#ff0000"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-green-400 font-mono text-xl font-bold">
                [iRETRO]
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="text-blue-400 font-mono text-sm border border-blue-600 px-3 py-1">
                TERMINAL v2.0
              </div>
              <div className="text-green-400 font-mono text-sm border border-green-400 px-3 py-1 animate-pulse">
                ONLINE
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <button
            onClick={toggleCart}
            className="relative group"
          >
            <div className="flex items-center space-x-2 border border-blue-600 px-4 py-2 bg-black hover:bg-blue-900 transition-colors duration-200">
              <span className="text-green-400 font-mono">
                [CART: {cart.length}]
              </span>
              {cart.length > 0 && (
                <div className="absolute -top-1 -right-1 h-3 w-3">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                </div>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* System Status Bar */}
      <div className="bg-blue-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-green-400 font-mono">
              SYSTEM: OPERATIONAL
            </span>
            <span className="text-blue-400 font-mono">
              MEMORY: 640K OK
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 font-mono">{currentTime}</span>
          </div>
        </div>
      </div>
    </header>
  );
}