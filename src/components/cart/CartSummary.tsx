import React from 'react';
import { useCart } from '../../context/CartContext';

export function CartSummary() {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="retro-card p-4 mb-4">
      <table className="w-full border-2 border-gray-400">
        <tbody>
          <tr className="border-b border-gray-400">
            <td className="p-2">Total Items:</td>
            <td className="p-2 text-right font-bold">{itemCount}</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="p-2">Unique Products:</td>
            <td className="p-2 text-right font-bold">{cart.length}</td>
          </tr>
          <tr>
            <td className="p-2">Estimated Delivery:</td>
            <td className="p-2 text-right font-bold">3-5 Business Days</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 text-center">
        <span className="retro-badge animate-pulse">🚚 Free Delivery over $50!</span>
      </div>
    </div>
  );
}