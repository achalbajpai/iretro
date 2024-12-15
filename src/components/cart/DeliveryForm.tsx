import React, { useState } from 'react';
import { DeliveryDetails } from '../../types';
import { RetroButton } from '../ui/RetroButton';

interface DeliveryFormProps {
  onSubmit: (details: DeliveryDetails) => void;
}

export function DeliveryForm({ onSubmit }: DeliveryFormProps) {
  const [details, setDetails] = useState<DeliveryDetails>({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    deliveryNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} className="retro-card p-4 mt-4">
      <h3 className="text-xl font-bold mb-4 text-center text-blue-900">
        📦 Delivery Details 📦
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-2">Full Name:</label>
          <input
            type="text"
            required
            className="retro-input w-full"
            value={details.fullName}
            onChange={(e) => setDetails({ ...details, fullName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Address:</label>
          <textarea
            required
            className="retro-input w-full h-20"
            value={details.address}
            onChange={(e) => setDetails({ ...details, address: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2">City:</label>
            <input
              type="text"
              required
              className="retro-input w-full"
              value={details.city}
              onChange={(e) => setDetails({ ...details, city: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">ZIP Code:</label>
            <input
              type="text"
              required
              className="retro-input w-full"
              value={details.zipCode}
              onChange={(e) => setDetails({ ...details, zipCode: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Phone Number:</label>
          <input
            type="tel"
            required
            className="retro-input w-full"
            value={details.phone}
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Delivery Notes:</label>
          <textarea
            className="retro-input w-full h-20"
            value={details.deliveryNotes}
            onChange={(e) => setDetails({ ...details, deliveryNotes: e.target.value })}
            placeholder="Special instructions for delivery..."
          />
        </div>
      </div>

      <div className="mt-6 text-center">
        <RetroButton type="submit" variant="primary">
          Confirm Delivery Details
        </RetroButton>
      </div>
    </form>
  );
}