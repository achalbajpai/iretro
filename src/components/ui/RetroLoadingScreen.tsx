import React from 'react';

export function RetroLoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="w-64 h-64 relative mb-8">
        <img
          src="https://retailwire.com/wp-content/uploads/image-116-1024x398.png"
          alt="Retro Apple Logo"
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 bg-green-400 animate-pulse"></div>
        <div className="h-2 w-2 bg-green-400 animate-pulse delay-100"></div>
        <div className="h-2 w-2 bg-green-400 animate-pulse delay-200"></div>
      </div>
      <div className="text-green-400 mt-4 font-mono">LOADING...</div>
    </div>
  );
} 