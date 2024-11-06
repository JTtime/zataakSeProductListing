import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextProps {
  categories: string[];
  priceRange: [number, number];
  availability: string[];
  sortBy: string;
  page: number;
  setCategories: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setAvailability: (status: string) => void;
  setSortBy: (sortBy: string) => void;
  setPage: (page: number) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategoriesState] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [availability, setAvailabilityState] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('Most Popular');
  const [page, setPage] = useState<number>(1);

  const setCategories = (category: string) => {
    setCategoriesState((prev) => 
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const setAvailability = (status: string) => {
    setAvailabilityState((prev) => 
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  return (
    <FilterContext.Provider
      value={{
        categories,
        priceRange,
        availability,
        sortBy,
        page,
        setCategories,
        setPriceRange,
        setAvailability,
        setSortBy,
        setPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};
