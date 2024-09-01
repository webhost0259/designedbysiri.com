'use client'
import { Product } from "@/app/components/ProductBrief"
import { CARTKEY, SIRICARTUPDATE } from "@/app/services/constants"
import { Button } from "@headlessui/react"
import Image from "next/image"
import { useState } from "react"
import toast from 'react-hot-toast';

interface ProductDetailsProps {
  product: Product
}

const ProductDetails = ({ product } : ProductDetailsProps) => {
  const [loading, setLoading] = useState(false);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    setLoading(true); // Set loading state

    // Get existing cart from local storage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem(CARTKEY) || '[]');

    const existingProduct = cart.find((item: Product) => item.productId === product.productId);
    
    if(existingProduct) {
      cart.forEach((item: Product) => {
        if (item.productId === product.productId) {
          item.quantity += 1;
        }
      });
    }else{
      // Add the product to the cart
      cart.push({
        productId: product.productId,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: 1
      });
    }

    // Save updated cart back to local storage
    localStorage.setItem(CARTKEY, JSON.stringify(cart));

    toast.success('Added to Cart!', {
      duration: 1300,
      position: 'top-center',
      style: {
        background: '#43A047',
        color: '#fff',
      },
      icon: '👏',
    });
    // Optionally, you can also add code here to update the server with the new cart data

    setLoading(false); // Reset loading state
    // Dispatch an event to notify other components
    window.dispatchEvent(new Event(SIRICARTUPDATE));
  };

  return(
      <div className="flex flex-col w-full justify-center items-center px-2 laptop:flex-row  text-black laptop:space-x-16 laptop:ml-16">
        <div className="relative rounded-lg w-full h-96 tablet:w-96 laptop:w-96 laptop:h-[512px] border-2 border-gray-400 laptop:p-4">
          <Image 
            src={product.imageUrl} 
            alt="Sireesha Reddy Designer Studio Logo, eligance with beauty" 
            fill={true}
            className="object-cover transition-transform duration-700 transform hover:scale-105 p-4"
          />
        </div>
        <div className="flex flex-col space-y-4 w-full px-4 laptop:max-w-[512px]">
          <p className="text-lg font-semibold">Product ID: #{product.productId}</p>
          <h6 className="font-medium text-3xl text-gray-700">{product.name}</h6>
          <p className="border-b-2 w-full pb-4">{product.description}</p>
          <p className="text-2xl font-semibold">Rs.{product.price.toFixed(2)}</p>
          <p className="text-lg font-semibold">In Stock: {product.quantity}</p>
          <p className="text-lg font-semibold">SKU: {product.sku}</p>
          <p className="text-lg font-semibold">Status: {product.status ? 'Available' : 'Out of Stock'}</p>
          <div className="flex flex-row space-x-4 w-full">
            <Button 
              className="bg-green-600 text-white font-semibold justify-center items-center rounded-lg min-w-36 h-12 laptop:min-w-64 p-4"
              onClick={handleAddToCart}
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Adding...' : 'Add to Bag'}
            </Button>
            <Button 
              className="bg-gray-200 text-black font-semibold p-4 rounded-lg min-w-36 h-12 laptop:min-w-64 border-b-2 border-gray-500"
            >
              + Wishlist
            </Button>
          </div>
        </div>
      </div>
  )
}

export default ProductDetails