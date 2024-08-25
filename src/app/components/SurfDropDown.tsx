import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

const SurfDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md">
        Options
      </MenuButton>
      <MenuItems className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
        <MenuItem as="a" href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-500 hover:text-white">
          Account settings
        </MenuItem>
        <MenuItem as="a" href="#" className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-500 hover:text-white">
          Logout
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default SurfDropdown;
