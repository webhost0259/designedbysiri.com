'use client'
import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

const colors = [
  { name: 'Blue', count: 20341, color: 'bg-blue-500' },
  { name: 'White', count: 14545, color: 'bg-white border' },
  { name: 'Green', count: 10068, color: 'bg-green-500' },
  { name: 'Navy Blue', count: 10048, color: 'bg-blue-900' },
  { name: 'Black', count: 9911, color: 'bg-black' },
  { name: 'Grey', count: 6451, color: 'bg-gray-500' },
  { name: 'Pink', count: 4422, color: 'bg-pink-300' },
];

export default function ColorFilter() {
  const [expanded, setExpanded] = useState(false);
  const visibleColors = expanded ? colors : colors.slice(0, 7);

  return (
    <div className="w-64">
      <ul className="flex flex-wrap tablet:flex-col space-y-2">
        {visibleColors.map((color) => (
            <li key={color.name} className="flex items-center p-2 laptop:p-0">
              <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span
                  className={`ml-2 block w-5 h-5 rounded-full ${color.color}`}
              ></span>
              <label className="ml-3 text-gray-900 flex-grow cursor-pointer">
                  {color.name}
                  {/* <span className="text-gray-400 ml-1">({color.count})</span> */}
              </label>
            </li>
        ))}
        </ul>
        {colors.length > 7 && (
        <button
            onClick={() => setExpanded(!expanded)}
            className="text-red-500 mt-2"
        >
            {expanded ? '- Show less' : `+ ${colors.length - 7} more`}
        </button>
        )}
    </div>
  );
}