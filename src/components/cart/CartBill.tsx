import React from 'react';
import { useCart } from '../../context/CartContext';

export function CartBill() {
  const { subtotal, deliveryFee, tax, total } = useCart();

  return (
    <div className="retro-card p-4 mt-4">
      <table className="w-full border-2 border-gray-400">
        <tbody>
          <tr className="border-b border-gray-400">
            <td className="p-2 font-bold">Subtotal:</td>
            <td className="p-2 text-right">${subtotal.toFixed(2)}</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="p-2 font-bold">Delivery Fee:</td>
            <td className="p-2 text-right">${deliveryFee.toFixed(2)}</td>
          </tr>
          <tr className="border-b border-gray-400">
            <td className="p-2 font-bold">Tax (8%):</td>
            <td className="p-2 text-right">${tax.toFixed(2)}</td>
          </tr>
          <tr className="bg-yellow-100">
            <td className="p-2 font-bold text-lg">Total:</td>
            <td className="p-2 text-right font-bold text-lg">${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 p-2 bg-black text-yellow-400 text-center animate-pulse">
        💰 Cash on Delivery Only! 💰
      </div>
    </div>
  );
}