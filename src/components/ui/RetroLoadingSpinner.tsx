import React from 'react';

export function RetroLoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-rotate">
        <img 
          src="https://web.archive.org/web/20090830075223/http://geocities.com/hk/loading.gif"
          alt="Loading..."
          className="w-16 h-16"
        />
      </div>
    </div>
  );
}