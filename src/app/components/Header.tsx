"use client"
import React, { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import Image from 'next/image';
import SearchBar from './SearchBar';
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';
import { FaChevronDown, FaChevronUp  } from "react-icons/fa6";
import useCart from '../services/hooks/useCart';
import { CARTKEY, SIRICARTUPDATE } from '../services/constants';
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from './MobileMenu';

const logoPath = '/logo.png';
const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleMenu = (close: boolean) => {
    setOpenMenu(close);
  };

  const handleSearch = (query : string) => {
    console.log('Search query:', query);
    // Implement your search logic here
    // You might want to redirect to a search results page or filter data
  };

  const categories = [
    { name: 'Botique', image: '/category-icons/botique-icon.jpg', items: 240 },
    { name: 'Women', image: '/category-icons/women-icon.jpg', items: 240 },
    { name: 'Men', image: '/category-icons/men-icon.jpeg', items: 240 },
    { name: 'Girl', image: '/category-icons/girl-icon.jpeg', items: 240 },
    { name: 'Boy', image: '/category-icons/boy-icon.jpeg', items: 240 },
    { name: 'Sarees', image: '/category-icons/saree-icon.jpeg', items: 240 },
    { name: 'Anarkali', image: '/category-icons/anarkali-icon.jpeg', items: 240 },
    { name: 'Shararas', image: '/category-icons/anarkali-icon.jpeg', items: 240 },
  ];

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem(CARTKEY) || '[]');
      setCartCount(cart.length);
    };

    // Initialize cart count
    updateCartCount();

    // Event listener for local storage changes
    window.addEventListener(SIRICARTUPDATE, updateCartCount);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener(SIRICARTUPDATE, updateCartCount);
    };
  }, []);

  console.log('Header Rendered isOpen :', isOpen);
  return (
    <header className="py-2 bg-white text-gray-700 font-medium border-b-2 shadow-sm shadow-cyan-500/50">
      {/* Code Only for Mobiles ---------------------------------------- */}
      <div className="block laptop:hidden px-2">
        <div className="flex justify-between items-center">
          <div>
            <RxHamburgerMenu size={32} onClick={() => toggleMenu(true)}/>
          </div>
          <div className="flex flex-row items-center space-x-4 logo">
            <Link href="/" className='flex flex-row items-center space-x-4'>
              <Image 
                src={logoPath} 
                alt="Sireesha Reddy Designer Studio Logo, eligance with beauty" 
                width={48} 
                height={48} 
                className='rounded-lg shadow-lg'
              />
              <p className="font-semibold text-xl">Designed by Siri</p>
            </Link>
          </div>
          <div className="flex flex-row account-cart space-x-8">
            {/* <div className='flex flex-row items-center'>
              <CgProfile className='mr-2'/>
              <a href="#" className="transition-all duration-200 hover:text-green-600 hover:font-semibold">Account</a>
            </div> */}
            <div className='flex flex-row items-center'>
              <HiOutlineShoppingCart className='mr-2' size={32}/>
              {/* <a 
                href="/cart" 
                className="text-gray-700 hover:text-green-600 hover:font-semibold"
              >
                Cart {cartCount ? `(${cartCount})` : null}
              </a> */}
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <SearchBar onSearch={handleSearch} placeholder="Search Products"/>
        </div>
        <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu}/>
      </div>
      {/* Code Only for Laptop ---------------------------------------- */}
      <div className="hidden laptop:block container mx-auto py-2 lg:visible md:hidden sm:hidden">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center space-x-4 logo">
            <Link href="/" className='flex flex-row items-center space-x-4'>
              <Image 
                src={logoPath} 
                alt="Sireesha Reddy Designer Studio Logo, eligance with beauty" 
                width={48} 
                height={48} 
                className='rounded-lg shadow-lg'
              />
              <p className="font-semibold text-xl">Designed by Siri</p>
            </Link>
            <nav className="navbar">
              <ul className="flex space-x-8 ml-16 ">
              <Menu 
                as="div" 
                className="relative z-10 cursor-pointer"
              >
                  <MenuButton 
                    className="text-gray-700 hover:text-green-600 hover:font-semibold"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    Category &nbsp;
                    {
                      isOpen ? <FaChevronUp className="inline-block ml-1" /> : <FaChevronDown className="inline-block ml-1" /> 
                    }
                  </MenuButton>
                  <MenuItems 
                    className={`flex flex-wrap absolute min-w-[712px] justify-between left-0 mt-2 origin-top-right
                               bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 p-4`}
                    onClick={() => setIsOpen(false)}
                    >
                    {categories.map((category, index) => {
                      return(
                        <MenuItem
                          key={index}
                          as="div"
                          className="flex items-center p-4 m-2 min-w-80 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-200 ease-in-out"
                        >
                          <div className="flex-shrink-0 w-16 h-16 relative mr-4">
                            <Image
                              src={category.image}
                              alt={category.name}
                              layout="fill"
                              objectFit="contain"
                              className="rounded"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                            <p className="text-sm text-gray-600">{category.items} Item Available</p>
                          </div>
                        </MenuItem>
                      )})}
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
              <a 
                href="/cart" 
                className="text-gray-700 hover:text-green-600 hover:font-semibold"
              >
                Cart {cartCount ? `(${cartCount})` : null}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;