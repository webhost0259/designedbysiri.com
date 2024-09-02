'use client'
import { use, useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';

interface MobileMenuProps {
    openMenu: boolean;
    toggleMenu: (close: boolean) => void;
}
export default function MobileMenu({openMenu, toggleMenu} : MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(openMenu);

  useEffect(() => {
    setIsOpen(openMenu);
  }, [openMenu]);

  const onClick = () => {
    toggleMenu(false)
  };

  return (
    <div className="relative">
      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='flex flex-row space-x-6 items-center h-16 bg-[#D2B48C]'>
            <CgProfile className='mx-2' size={36}/>
            <a 
                href="#" 
                className="text-xl transition-all duration-200 hover:text-green-600 hover:font-semibold"
            >
                Hello, User
            </a>
        </div>
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={onClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <nav className="p-4">
          <ul className="space-y-4 pl-8">
            <li>
              <a href="/" className="block text-2xl text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <h6 className="block text-2xl text-gray-700 hover:text-gray-900">
                Categories
              </h6>
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <a href="/categories/1/Sarees" className="block text-xl text-gray-700 hover:text-gray-900">
                    Sarees
                  </a>
                </li>
                <li>
                  <a href="/categories/1/Anarkali" className="block text-xl text-gray-700 hover:text-gray-900">
                    Anarkali
                  </a>
                </li>
                <li>
                  <a href="/categories/1/Anarkali" className="block text-xl text-gray-700 hover:text-gray-900">
                    Shararas
                  </a>
                </li>
               </ul>
            </li>
            <li>
              <a href="#services" className="block text-2xl text-gray-700 hover:text-gray-900">
                Services
              </a>
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <a href="#about" className="block text-xl text-gray-700 hover:text-gray-900">
                    Stitching
                  </a>
                </li>
                <li>
                  <a href="#about" className="block text-xl text-gray-700 hover:text-gray-900">
                    Alteration
                  </a>
                </li>
                <li>
                  <a href="#about" className="block text-xl text-gray-700 hover:text-gray-900">
                    Custom Designs
                  </a>
                </li>
               </ul>
            </li>
            <li>
              <a href="#contact" className="block text-2xl text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}