"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Dialog, Transition } from "@headlessui/react";
import { HeartIcon, ShoppingCartIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { getWishlistData } from "@/app/cart/cartUtils";

export interface WishlistItem {
  wishlistItemId: string; // Unique ID for the wishlist item
  productId: string; // ID of the product
  name: string; // Name of the product
  price: string; // Description of the product
  description: number; // Price of the product
  productImage: string; // Image URL of the product
}

const WishlistPage = () => {
  const [loading, setLoading] = useState(true);
  const [wishlists, setWishlists] = useState<WishlistItem[]>([]); // Ensures wishlist is always an array

  useEffect(() => {
    const fetchWishList = async () => {
      try {
        const response = await getWishlistData();
        setWishlists(response || []); // Ensure response is an array
      } catch (error) {
        console.error("API Error:", error);
        toast.error("Failed to load wishlist.");
      } finally {
        setLoading(false);
      }
    };
    fetchWishList();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600 mt-10">Loading wishlist...</p>;
  }

  if (!wishlists.length) {
    return <p className="text-center text-gray-500 mt-10">Your wishlist is empty.</p>;
  }

  const removeFromWishlist = async (productId: string) => {
    try {
      await fetch(`/api/wishlist/${productId}`, { method: "DELETE" });
      setWishlists((prev) => prev.filter((item) => item.productId !== productId));
      toast.success("Removed from wishlist!");
    } catch (error) {
      toast.error("Failed to remove item.");
    }
  };

  const moveToCart = async (productId: string) => {
    try {
      await fetch(`/api/cart`, {
        method: "POST",
        body: JSON.stringify({ productId }),
        headers: { "Content-Type": "application/json" },
      });
      removeFromWishlist(productId);
      toast.success("Moved to cart!");
    } catch (error) {
      toast.error("Failed to move item to cart.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <HeartIcon className="w-8 h-8 text-red-500" />
        My Wishlist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {wishlists.map((item) => (
          <div
            key={item.productId}
            className="relative bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4"
          >
            <img
              src={item.productImage}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600 text-sm">₹{Number(item.price).toFixed(2)}</p>
              <div className="flex gap-3 mt-2">
                <button
                  className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => moveToCart(item.productId)}
                >
                  <ShoppingCartIcon className="w-5 h-5 mr-1" />
                  Move to Cart
                </button>
                <button
                  className="flex items-center bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                  onClick={() => removeFromWishlist(item.productId)}
                >
                  <TrashIcon className="w-5 h-5 mr-1" />
                  Remove
                </button>
              </div>
            </div>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => removeFromWishlist(item.productId)}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;