'use client'
import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const options = [
  { id: 1, name: 'sort a-z' },
  { id: 2, name: 'price low-high' },
  { id: 3, name: 'price high-low' },
  { id: 3, name: 'best seller' },
];

interface SortOptionsProps {
    className?: string;
}

const SortOptions = ({className}:SortOptionsProps) => {
    const [selected, setSelected] = useState(options[0]);

    const handleSort = (option: any) => {
        setSelected(option);
        console.log('Selected:', option);
    }

    return (
      <div className={className}>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <ListboxButton className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <ListboxOption
                  key={option.id}
                  className={({ active }) =>
                    `cursor-pointer select-none relative py-2 pl-10 pr-4 z-555 ${
                      active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                    }`
                  }
                  value={option}
                  onClick={() => handleSort(option)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    );
  }

export default SortOptions;