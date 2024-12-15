import React from 'react';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps): JSX.Element {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div className="bg-black border-2 border-blue-600 p-4">
        {/* Title Banner */}
        <div className="bg-blue-800 text-white text-center p-1 mb-4">
          <div className="animate-blink font-mono text-sm">
            ** NEW ARRIVAL **
          </div>
        </div>

        {/* Product Image */}
        <div className="relative mb-4">
          <div className="bg-gradient-to-b from-gray-900 to-black p-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mix-blend-screen"
            />
          </div>
          {product.isNew && (
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 animate-pulse">
              NEW!
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2 bg-gray-900 p-4">
          <div className="text-center">
            <h3 className="text-xl font-mono text-blue-400">
              {product.name}
            </h3>
            <div className="mt-2">
              <span className="inline-block bg-green-900 text-green-400 px-3 py-1 font-mono">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="bg-black bg-opacity-50 p-2 border border-blue-800">
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-blue-300 font-mono">
                  <span className="text-yellow-500 mr-2">&gt;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="bg-blue-800 text-blue-300 px-4 py-2 font-mono hover:bg-blue-700 border border-blue-600"
            >
              [DETAILS]
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-green-900 text-green-400 px-4 py-2 font-mono hover:bg-green-800 border border-green-700 animate-pulse"
            >
              [ADD TO CART]
            </button>
          </div>

          {/* View Counter */}
          <div className="text-center mt-4 border border-blue-800 p-2">
            <div className="text-blue-400 text-xs font-mono">VISITORS:</div>
            <div className="font-mono text-green-500">00{Math.floor(Math.random() * 1000)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}