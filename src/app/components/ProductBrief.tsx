import { Button } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductBasicResponse } from '../services/apis/ecomModels';

interface ProductBriefProps {
  productId: string,
  imagePath: string,
  name: string,
  description: string,
  price: number
}

const length = 12;
const ProductBrief = ({ productId, imagePath, name, description, price } : ProductBriefProps) => {

  return (
    <div className="p-1 m-1 min-w-48 bg-white text-black rounded-lg shadow-lg item">
      {/* Product Images */}
      <Link href={`/products/${productId}`}>
        <div className="flex flex-col items-stretch mb-4">
          <div className="relative w-76 h-48 tablet:h-64">
            <Image 
              src={imagePath} 
              alt="Sireesha Reddy Designer Studio Logo, eligance with beauty" 
              fill={true}
              className="object-cover transition-transform duration-700 transform hover:scale-105"
              unoptimized
            />
          </div>
          </div>
          <div className='flex flex-col h-48 items-stretch p-2 max-w-72 relative'>
            <div className='flex justify-start'>
              <h2 className="tablet:hidden text-md font-medium">{name.length > 30 ? name.slice(0, 30) + '...' : name}</h2>
              <h2 className="hidden tablet:block text-md font-medium">{name}</h2>
            </div>
            <div className='flex justify-start mt-2 '>
              {description && <p className="text-gray-600 mb-2.5 text-sm leading-6.5">{description.length > 50 ? description.slice(0, 50) + '...' : description}</p>}
            </div>
            <h2 className="absolute right-4 bottom-4 flex text-sm font-medium">Rs.{price}</h2>
          </div>
        </Link>
    </div>
  );
};

export default ProductBrief;
