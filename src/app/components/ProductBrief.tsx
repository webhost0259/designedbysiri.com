import { Button } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface Product{
  productId: string,
  orgId: number,
  storeId: string,
  sku: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
  status: boolean,
  createdAt: string,
  updatedAt: string,
  imageUrl: string // Array of image URLs
}
interface ProductBriefProps {
  product: Product
}

const length = 12;
const ProductBrief = ({ product } : ProductBriefProps) => {

  return (
    <div className="p-1 m-1 min-w-80 bg-white text-black rounded-lg shadow-lg item">
      {/* Product Images */}
      <Link href={`/products/${product.productId}`}>
        <div className="flex flex-col mb-4">
          <div className="relative w-80 h-48">
            <Image 
              src={product.imageUrl} 
              alt="Sireesha Reddy Designer Studio Logo, eligance with beauty" 
              layout="fill"
              objectFit="cover"  // Adjusts how the image fits the container
              className="transition-transform duration-700 transform hover:scale-105"
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
              <div className='flex flex-col p-2 max-w-72'>
                <div className='flex flex-row justify-between space-x-4'>
                  <h2 className="text-xl font-medium">{product.name}</h2>
                </div>
                <div className='flex justify-start mt-2 '>
                  {product.description && <p className="text-gray-600 mb-2.5 text-sm leading-6.5">{product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}</p>}
                </div>
                <h2 className="flex text-xl font-medium justify-start">Rs.{product.price.toFixed(2)}</h2>
              </div>
              </Link>
              {/* Product Details */}
      <Button className="items-center gap-2 bg-white py-2.5 px-8 mb-4 font-semibold border-2 rounded-full hover:bg-gray-800 hover:text-gray-200 transition duration-700">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductBrief;
