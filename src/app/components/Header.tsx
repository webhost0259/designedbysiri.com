"use client"
import React, { useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import Image from 'next/image';
import SearchBar from './SearchBar';
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';

const logoPath = '/logo.png';
const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query : string) => {
    console.log('Search query:', query);
    // Implement your search logic here
    // You might want to redirect to a search results page or filter data
  };

  return (
    <header className="header py-2 bg-white text-gray-700 font-medium border-b-2 shadow-sm shadow-cyan-500/50">
      <div className="container mx-auto px-16 py-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center space-x-4 logo">
            <Link href="/" className='flex flex-row items-center space-x-4'>
              <Image src={logoPath} alt="Sireesha Reddy Designer Studio Logo, eligance with beauty" width={48} height={48} className='rounded-lg'/>
              <p className="font-semibold text-xl">Designed by Siri</p>
            </Link>
            <nav className="navbar">
              <ul className="flex space-x-8 ml-16 ">
                <Menu as="div" className="relative">
                  <MenuButton  className="text-gray-700 hover:text-green-600 hover:font-semibold">Category</MenuButton>
                  <MenuItems className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200">
                    <div className="py-1">
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm hover:text-green-600 hover:font-semibold">Category 1</a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm hover:text-green-600 hover:font-semibold">Category 2</a>
                      </MenuItem>
                      <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm hover:text-green-600 hover:font-semibold">Category 3</a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
                <li><a href="#" className="hover:text-green-600 hover:font-semibold">Deals</a></li>
                <li><a href="#" className="hover:text-green-600 hover:font-semibold">Whats New</a></li>
                <li><a href="#" className="hover:text-green-600 hover:font-semibold">Delivery</a></li>
              </ul>
            </nav>
          </div>
          <SearchBar onSearch={handleSearch} placeholder="Search Products"/>
          <div className="flex flex-row account-cart space-x-8">
            <div className='flex flex-row items-center'>
              <CgProfile className='mr-2'/>
              <a href="#" className="transition-all duration-200 hover:text-green-600 hover:font-semibold">Account</a>
            </div>
            <div className='flex flex-row items-center'>
              <HiOutlineShoppingCart className='mr-2'/>
              <a href="#" className="text-gray-700 hover:text-green-600 hover:font-semibold">Cart</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;