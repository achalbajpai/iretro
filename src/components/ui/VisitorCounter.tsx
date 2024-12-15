import React, { useState, useEffect } from 'react';

export function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate a visitor count by starting with a random number
    const baseCount = Math.floor(Math.random() * 100000) + 50000;
    setCount(baseCount);

    // Increment the counter occasionally
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block border-2 border-yellow-400 bg-black p-2">
      <p className="text-yellow-400 font-mono text-sm">
        Visitors: {count.toString().padStart(8, '0')}
      </p>
    </div>
  );
}