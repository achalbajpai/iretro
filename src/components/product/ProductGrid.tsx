import React from 'react';
import type { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border-2 border-blue-600 bg-black p-4 cursor-pointer hover:border-green-400 transition-colors"
          onClick={() => onProductClick(product)}
        >
          {/* Product Header */}
          <div className="border-b border-blue-600 pb-2 mb-4">
            <h3 className="text-green-400 font-mono text-lg">
              [{product.name}]
            </h3>
          </div>

          {/* Product Image */}
          <div className="relative aspect-square mb-4 border border-blue-600 p-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-screen"
            />
            <div className="absolute inset-0 bg-screen-lines pointer-events-none"></div>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-blue-400 font-mono">PRICE:</span>
              <span className="text-green-400 font-mono">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="text-blue-400 font-mono text-xs">
              &gt; {product.description}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-4 text-center">
            <button className="w-full border border-blue-600 px-4 py-2 text-blue-400 hover:bg-blue-900 hover:text-green-400 font-mono text-sm">
              [VIEW DETAILS]
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}