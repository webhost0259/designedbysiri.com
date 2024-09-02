'use client';
import React, { useState } from 'react';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange?: (min: number, max: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onPriceChange }) => {
  const [min, setMin] = useState<number | ''>(minPrice);
  const [max, setMax] = useState<number | ''>(maxPrice);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMin(e.target.value !== '' ? Number(e.target.value) : '');
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(e.target.value !== '' ? Number(e.target.value) : '');
  };


  return (
    <div className="bg-white rounded-lg">
      <h2 className="text-md font-medium mb-4">Price</h2>
      <div className="mb-4">
        <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">Minimum Price</label>
        <input
          type="number"
          id="minPrice"
          value={min}
          onChange={handleMinChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">Maximum Price</label>
        <input
          type="number"
          id="maxPrice"
          value={max}
          onChange={handleMaxChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default PriceFilter;