import { Product } from "@/app/components/ProductBrief"
import { Button } from "@headlessui/react"
import Image from "next/image"

interface ProductDetailsProps {
  product: Product
}

const ProductDetails = ({ product } : ProductDetailsProps) => {
  return(
    <div className="flex flex-col text-black">
      <div className="flex flex-row space-x-32 mx-32">
        <div className="relative rounded-lg w-96 h-[512px] border-2 border-gray-400 p-4">
          <Image 
            src={product.imageUrl} 
            alt="Sireesha Reddy Designer Studio Logo, eligance with beauty" 
            layout="fill"
            objectFit="cover"  // Adjusts how the image fits the container
            className="transition-transform duration-700 transform hover:scale-105 p-4"
          />
        </div>
        <div className="flex flex-col space-y-4 max-w-[512px]">
          <p className="text-lg font-semibold">Product ID: #{product.productId}</p>
          <h6 className="font-medium text-3xl text-gray-700">{product.name}</h6>
          <p className="border-b-2 w-full pb-4">{product.description}</p>
          <p className="text-2xl font-semibold">Rs.{product.price.toFixed(2)}</p>
          <p className="text-lg font-semibold">In Stock: {product.quantity}</p>
          <p className="text-lg font-semibold">SKU: {product.sku}</p>
          <p className="text-lg font-semibold">Status: {product.status ? 'Available' : 'Out of Stock'}</p>
          <div className="flex flex-row space-x-4 w-full">
            <Button className="bg-green-600 text-white font-semibold rounded-lg min-w-64 p-4">Add to Bag</Button>
            <Button className="bg-gray-200 text-black font-semibold p-4 rounded-lg min-w-64 border-b-2 border-gray-500">+ Wishlist</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails