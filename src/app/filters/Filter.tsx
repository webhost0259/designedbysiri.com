'use client';
import React, { useState } from 'react';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';

const Filter: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };
  const handleApply = () => {
    console.log('Apply filters');
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative z-30 mt-4">
      <button
        onClick={toggleMenu}
        className="w-full flex justify-between items-center px-4 py-2 text-left bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span>Filter</span>
        <span>{isExpanded ? '-' : '+'}</span>
      </button>
      {isExpanded && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 py-2 px-2">
          <ul className="px-4 py-2 space-y-2">
            <ColorFilter />
            <PriceFilter minPrice={0} maxPrice={100000} />
          </ul>
          <button
            onClick={handleApply}
            className="w-full bg-green-600 text-white py-2 px-4 mb-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            Apply
        </button>
        </div>
      )}
    </div>
  );
};

export default Filter;