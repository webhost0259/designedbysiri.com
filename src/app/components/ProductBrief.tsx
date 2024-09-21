import { Button } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductBasicResponse } from '../services/apis/ecomModels';

interface ProductBriefProps {
  product: ProductBasicResponse
}

const length = 12;
const ProductBrief = ({ product } : ProductBriefProps) => {

  return (
    <div className="p-1 m-1 min-w-80 bg-white text-black rounded-lg shadow-lg item">
      {/* Product Images */}
      <Link href={`/products/${product.productId}`}>
        <div className="flex flex-col items-stretch mb-4">
          <div className="relative w-76 h-48">
            <Image 
              src={product.imagePath} 
              alt="Sireesha Reddy Designer Studio Logo, eligance with beauty" 
              fill={true}
              className="object-cover transition-transform duration-700 transform hover:scale-105"
              unoptimized
            />
          </div>
          {/* {product.images.length > 1 && (
                <div className="flex mt-2 space-x-2">
                  {product.images.slice(1).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product image ${index + 1}`}
                    className="w-16 h-16 object-cover rounded"
                  />
                  ))}
                </div>
                )} */}
          </div>
          <div className='flex flex-col h-48 items-stretch p-2 max-w-72 relative'>
            <div className='flex flex-row justify-start space-x-4'>
              <h2 className="text-md font-medium">{product.name}</h2>
            </div>
            <div className='flex justify-start mt-2 '>
              {product.description && <p className="text-gray-600 mb-2.5 text-sm leading-6.5">{product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}</p>}
            </div>
            <h2 className="absolute right-4 bottom-4 flex text-sm font-medium">Rs.{product.price}</h2>
          </div>
        </Link>
              {/* Product Details */}
      {/* <Button className="items-center gap-2 bg-white py-2.5 px-8 mb-4 font-semibold border-2 rounded-full hover:bg-gray-800 hover:text-gray-200 transition duration-700">
        Add to Cart
      </Button> */}
    </div>
  );
};

export default ProductBrief;
