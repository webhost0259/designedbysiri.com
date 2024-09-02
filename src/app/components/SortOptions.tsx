'use client';
import React, { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const options = [
  { id: 1, name: 'sort a-z' },
  { id: 2, name: 'price low-high' },
  { id: 3, name: 'price high-low' },
  { id: 4, name: 'best seller' },
];

interface SortOptionsProps {
  className?: string;
}

const SortOptions = ({ className }: SortOptionsProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: typeof options[0]) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={className}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <span className="block truncate">{selected.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </button>
        {isOpen && (
          <div className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => handleSelect(option)}
                className={`cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                  selected.id === option.id ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`}
              >
                <span
                  className={`block truncate ${
                    selected.id === option.id ? 'font-medium' : 'font-normal'
                  }`}
                >
                  {option.name}
                </span>
                {selected.id === option.id && (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortOptions;