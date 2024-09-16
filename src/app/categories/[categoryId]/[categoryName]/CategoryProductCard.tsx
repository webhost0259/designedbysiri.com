import { CategoryTypeProduct } from "@/app/services/apis/models";
import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

interface CategoryProductCardProps {
    product: CategoryTypeProduct
}

const CategoryProductCard = ({product}: CategoryProductCardProps) => {

    const url = `/products/${product.productId}`;
    const imageUrl = product.imagePath ? product.imagePath : '/logo.png'; // Fallback image

    return (
        <div className="w-1/2 max-w-48 flex flex-col  rounded-md p-2">
            <Link href={url}>
                <div className="relative w-full h-[176px] bg-gray-200">
                    <Image 
                        src={imageUrl} 
                        alt={product.productName}
                        className="rounded-lg object-contain w-full h-full"
                        layout="fill" 
                        unoptimized
                    />
                </div>
            </Link>
            <Link href={url}>
                <div className="flex flex-col space-y-2 p-2">
                    <p className="text-sm">
                    {product.productName.length > 50 
                            ? `${product.productName.substring(0, 50)}...` 
                            : product.productName}
                    </p>
                    {/* <p className="text-sm">
                        {product.productDescription}
                    </p> */}
                    <p className="text-lg">
                        Rs. {product.price}
                    </p>
                    <Button 
                        className="bg-green-500 text-white rounded-full p-2"
                    >
                        Add to Cart
                    </Button>
                </div>
            </Link>
        </div>
        
    )
}

export default CategoryProductCard;