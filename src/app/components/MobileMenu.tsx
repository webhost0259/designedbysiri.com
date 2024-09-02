'use client'
import { use, useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";


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
        <div className='flex flex-row space-x-6 items-center h-16 bg-[#f6e2c7]'>
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
              <a href="/" className="flex flex-row items-center text-xl text-gray-700 hover:text-gray-900">
              <FaHome className='text-green-600' /> <span className='ml-2'>Home</span> 
              </a>
            </li>
            <li>
              <h6 className="flex flex-row items-center text-xl text-gray-700 hover:text-gray-900">
                <MdCategory className='text-blue-600 mr-2'/> Categories
              </h6>
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <a href="/categories/1/Sarees" className="flex flex-row items-center text-lg text-gray-700 hover:text-gray-900">
                    Sarees
                  </a>
                </li>
                <li>
                  <a href="/categories/1/Anarkali" className="flex flex-row items-center text-lg text-gray-700 hover:text-gray-900">
                    Anarkali
                  </a>
                </li>
                <li>
                  <a href="/categories/1/Anarkali" className="flex flex-row items-center text-lg text-gray-700 hover:text-gray-900">
                    Shararas
                  </a>
                </li>
               </ul>
            </li>
            <li>
              <a href="#services" className="flex flex-row items-center text-xl text-gray-700 hover:text-gray-900">
                <MdDesignServices className='text-yellow-600 mr-2'/> Services
              </a>
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <a href="/stitching-connect" className="block text-lg text-gray-700 hover:text-gray-900">
                    Stitching Connect
                  </a>
                </li>
                <li>
                  <a href="#about" className="block text-lg text-gray-700 hover:text-gray-900">
                    Alteration
                  </a>
                </li>
                <li>
                  <a href={"/delivery-return-policy"} className="block text-lg text-gray-700 hover:text-gray-900">
                    Delivery/Return
                  </a>
                </li>
               </ul>
            </li>
            <li>
              <a href="#services" className="flex flex-row items-center text-xl text-gray-700 hover:text-gray-900">
              <MdOutlineAccountCircle className='text-gray-600 mr-2'/> Account
              </a>
              <ul className="pl-8 space-y-2 mt-2">
                <li>
                  <a href="/stitching-connect" className="block text-lg text-gray-700 hover:text-gray-900">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#about" className="block text-lg text-gray-700 hover:text-gray-900">
                    Orders
                  </a>
                </li>
                <li>
                  <a href={"/delivery-return-policy"} className="block text-lg text-gray-700 hover:text-gray-900">
                    wishlist
                  </a>
                </li>
               </ul>
            </li>
            <li className='pt-16'>
              <a href="#contact" className="flex flex-row items-center text-xl text-gray-700 hover:text-gray-900">
               <FiPhoneCall className='text-pink-700 mr-2'/> Contact Us
              </a>
            </li>
            <li className='pt-4'>
              <a href="#contact" className="flex flex-row items-center text-xl text-gray-700 hover:text-gray-900">
                <MdOutlineLogout className='text-black mr-2'/> Log Out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}