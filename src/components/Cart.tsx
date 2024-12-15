import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-4 text-center">
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
          <div className="flex-1 mx-4">
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="w-16 border rounded p-1 mt-1"
            />
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ))}
      <div className="mt-4 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button className="bg-black text-white px-6 py-2 rounded mt-2 hover:bg-gray-800 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}