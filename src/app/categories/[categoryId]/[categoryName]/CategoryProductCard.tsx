import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const CategoryProductCard = () => {
    return (
        <div className="w-1/2 max-w-48 flex flex-col  rounded-md p-2">
            <Link href="/products/1">
                <div className="relative w-full h-[176px] bg-gray-200">
                    <Image 
                        src="/category-icons/anarkali-icon.jpeg" 
                        alt="Surfboard" 
                        className="rounded-lg object-contain w-full h-full"
                        layout="fill" 
                    />
                </div>
            </Link>
            <Link href="/products/1">
                <div className="flex flex-col space-y-2 p-2">
                    <p className="text-xl">Anarkali</p>
                    <p className="text-sm">
                        Salwar kameez for women made up of a long 
                        frock-style top and features a slim fitted bottom 
                    </p>
                    <p className="text-lg">Rs. 1000.00</p>
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