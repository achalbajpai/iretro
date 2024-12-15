import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export function ProductDetails({ product, onClose }: ProductDetailsProps) {
  const { addToCart } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-4xl bg-black border-2 border-blue-600">
        {/* Header */}
        <div className="bg-blue-800 p-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-mono text-white">
              [PRODUCT DETAILS] - {product.name}
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-yellow-400 font-mono"
            >
              [X] CLOSE
            </button>
          </div>
        </div>

        <div className="p-6 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="border border-blue-600 bg-black p-2">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-screen-lines pointer-events-none"></div>
                </div>
              </div>
              <div className="text-center font-mono text-green-400 text-sm">
                SYSTEM STATUS: OPERATIONAL
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-4">
              {/* Price Display */}
              <div className="border border-blue-600 p-4">
                <div className="text-green-400 font-mono">
                  <div className="text-sm">PRICE:</div>
                  <div className="text-2xl animate-pulse">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border border-blue-600 p-4">
                <div className="text-blue-400 font-mono mb-2">
                  &gt;&gt; DESCRIPTION:
                </div>
                <p className="text-green-400 font-mono text-sm">
                  {product.description}
                </p>
              </div>

              {/* Specifications */}
              <div className="border border-blue-600 p-4">
                <div className="text-blue-400 font-mono mb-2">
                  &gt;&gt; SPECIFICATIONS:
                </div>
                <div className="space-y-2 text-sm">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="font-mono">
                      <span className="text-yellow-400">{key}:</span>
                      <span className="text-green-400 ml-2">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={onClose}
                  className="bg-blue-800 text-white px-4 py-2 font-mono hover:bg-blue-700 border border-blue-600"
                >
                  &lt;&lt; BACK
                </button>
                <button
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="bg-green-900 text-green-400 px-4 py-2 font-mono hover:bg-green-800 border border-green-700 animate-pulse"
                >
                  [ADD TO CART]
                </button>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="mt-6 border-t border-blue-600 pt-4">
            <div className="font-mono text-xs">
              <span className="text-blue-400">[SYSTEM]</span>
              <span className="text-green-400 ml-2">
                Memory: 640K OK - High Memory: 64K
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}