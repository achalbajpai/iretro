import React from 'react';

interface RetroAlertProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

export function RetroAlert({ message, type = 'info' }: RetroAlertProps) {
  const colors = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    info: 'bg-yellow-100 border-yellow-500 text-yellow-700'
  };

  return (
    <div className={`p-4 border-2 ${colors[type]} animate-blink text-center font-bold retro-text`}>
      {message}
    </div>
  );
}