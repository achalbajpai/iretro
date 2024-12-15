import React from 'react';

export function Footer(): JSX.Element {
  return (
    <footer className="relative bg-[#000000] text-center py-4 font-['Courier_New'] text-xs">
      {/* Stars background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.1'%3E%3Ccircle r='1' cx='100' cy='100'/%3E%3Ccircle r='1' cx='300' cy='200'/%3E%3Ccircle r='1' cx='500' cy='150'/%3E%3Ccircle r='1' cx='700' cy='300'/%3E%3Ccircle r='1' cx='200' cy='400'/%3E%3Ccircle r='1' cx='400' cy='500'/%3E%3Ccircle r='1' cx='600' cy='600'/%3E%3Ccircle r='1' cx='800' cy='700'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'cover'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Yellow box at the top */}
        <div className="mb-4">
          <div className="inline-block border-2 border-[#ffff00] px-4 py-1">
            <span className="text-[#ffff00] tracking-wider">WELCOME TO iRETRO</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center items-center space-x-4 text-[#ffff00] tracking-wider">
          <span>© 1976 iRETRO</span>
          <span className="text-[#ffff00]">|</span>
          <a href="#" className="hover:underline text-[#ffff00]">Privacy Policy</a>
          <span className="text-[#ffff00]">|</span>
          <a href="#" className="hover:underline text-[#ffff00]">Terms of Use</a>
        </div>

        {/* Bottom text with green border */}
        <div className="mt-4">
          <div className="inline-block border-2 border-[#00ff00] px-4 py-1">
            <span className="text-[#00ff00] tracking-wider">
              Apple: Redefining Innovation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 