import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

export function LoadingSpinner({ size = 'md', message }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className={`animate-spin ${sizeClasses[size]}`}>
        <img 
          src="https://web.archive.org/web/20090830075223/http://geocities.com/hk/loading.gif"
          alt="Loading..."
          className="w-full h-full"
        />
      </div>
      {message && (
        <p className="mt-2 text-gray-600 text-center">{message}</p>
      )}
    </div>
  );
}