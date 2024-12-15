import React from 'react';

const categories = [
  'Mac',
  'MacBook',
  'iPhone',
  'iPad',
  'Watch',
  'Vision'
] as const;

interface NavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Navigation({ activeCategory, onCategoryChange }: NavigationProps): JSX.Element {
  return (
    <nav className="bg-black border-y border-blue-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-x border-blue-600">
          {/* Navigation Menu */}
          <div className="p-4 bg-black">
            <div className="text-blue-400 font-mono mb-4">&gt;&gt; SELECT PRODUCT LINE:</div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`
                    px-4 py-3 font-mono text-sm border
                    ${activeCategory === category
                      ? 'bg-blue-800 text-white border-blue-600 animate-pulse'
                      : 'bg-black text-blue-400 border-blue-800 hover:border-blue-600 hover:text-green-400'
                    }
                  `}
                >
                  [{category.toUpperCase()}]
                </button>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="border-t border-blue-600 p-2 flex justify-between items-center text-xs font-mono">
            <span className="text-green-400">
              ACTIVE CATEGORY: [{activeCategory.toUpperCase() || 'NONE'}]
            </span>
            <span className="text-blue-400">
              PRODUCTS READY FOR INSPECTION
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}