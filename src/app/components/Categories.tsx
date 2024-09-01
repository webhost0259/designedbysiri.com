import Image from 'next/image';
import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Furniture', image: '/images/furniture.png', items: 240 },
    { name: 'Hand Bag', image: '/images/handbag.png', items: 240 },
    { name: 'Shoe', image: '/images/shoe.png', items: 240 },
    { name: 'Headphone', image: '/images/headphone.png', items: 240 },
    { name: 'Laptop', image: '/images/laptop.png', items: 240 },
    { name: 'Book', image: '/images/book.png', items: 240 },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Popular Categories</h2>
      <div className="grid grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center p-4 min-w-96 bg-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-200 ease-in-out"
          >
            <div className="flex-shrink-0 w-16 h-16 relative mr-4">
              <Image
                src={category.image}
                alt={category.name}
                fill={true}
                className="rounded object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.items} Item Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
