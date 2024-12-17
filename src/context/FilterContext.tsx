import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  isBlackAndWhite: boolean;
  toggleBlackAndWhite: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

  const toggleBlackAndWhite = () => {
    setIsBlackAndWhite(prev => !prev);
  };

  return (
    <FilterContext.Provider value={{ isBlackAndWhite, toggleBlackAndWhite }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
} 