import React from 'react';

interface MarqueeTextProps {
  text: string;
}

export function MarqueeText({ text }: MarqueeTextProps) {
  return (
    <div className="bg-black p-1 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-yellow-400 mx-4">{text}</span>
        <span className="text-yellow-400 mx-4">{text}</span>
      </div>
    </div>
  );
}