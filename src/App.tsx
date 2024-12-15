import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { ProductGrid } from './components/product/ProductGrid';
import { CartPanel } from './components/cart/CartPanel';
import { ProductDetails } from './components/product/ProductDetails';
import { Footer } from './components/layout/Footer';
import { products } from './data/products';
import { useCart } from './context/CartContext';
import type { Product } from './types';

function AppContent(): JSX.Element {
  const { cartOpen } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Mac');

  const filteredProducts = products.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
      <Header />
      <Navigation onCategoryChange={setActiveCategory} activeCategory={activeCategory} />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        {/* Status Display */}
        <div className="border border-blue-600 p-4 mb-8">
          <div className="flex justify-between items-center">
            <div className="text-blue-400">&gt;&gt; BROWSING: {activeCategory.toUpperCase()}</div>
            <div className="text-green-400">FOUND: {filteredProducts.length} PRODUCTS</div>
          </div>
        </div>

        {/* Products Grid */}
        <ProductGrid 
          products={filteredProducts} 
          onProductClick={setSelectedProduct} 
        />

        {/* Product Details Modal */}
        {selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}

        {/* Cart Panel */}
        {cartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-end z-50">
            <CartPanel />
          </div>
        )}
      </main>

      {/* System Status */}
      <div className="bg-blue-900 border-t border-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs">
          <span className="text-green-400 font-mono">
            SYSTEM STATUS: OPERATIONAL | MEMORY: OK | CPU: ACTIVE
          </span>
          <span className="text-blue-400 font-mono">
            iRETRO v2.0 | {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* Footer with starry background */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}