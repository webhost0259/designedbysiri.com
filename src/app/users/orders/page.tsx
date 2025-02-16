"use client";

import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getOrders } from "@/app/services/apis/api";
import { getOrdersData } from "@/app/cart/cartUtils";

export interface OrderItem {
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
    totalAmount: number;
    productName: string;
    productBaseImage: string;
}

export interface Order {
    orderId: string;
    totalAmount: number;
    orderStatus: string;
    paymentStatus: string;
    createdAt: string;
    orderDate: string;  // ISO Date String
    updatedAt: string;  // ISO Date String
    items: OrderItem[];
}

export default function OrdersPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [orders, setOrders] = useState<Order[]>([]); // Ensures orders is always an array
    const router = useRouter();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getOrdersData();
                setLoading(false);
                setOrders(response || []); // Ensure response is an array
            } catch (error) {
                console.error("API Error:", error);
                toast.error("Failed to load orders.");
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading orders...</p>;

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>

            {orders.length === 0 ? (
                <p className="text-gray-500 text-lg font-medium text-center">No Orders Available</p>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <Disclosure key={order.orderId}>
                            {({ open }) => (
                                <div className="border border-gray-300 rounded-lg p-4">
                                    <Disclosure.Button className="flex justify-between w-full text-left">
                                        <div>
                                            <p className="font-medium">Order ID: {order.orderId}</p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-semibold">Total:</span> ${order.totalAmount} | <span className="font-semibold">Status:</span> {order.orderStatus}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-semibold">Payment:</span> {order.paymentStatus.toUpperCase()}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <span className="font-semibold">Order Date:</span> {new Date(order.orderDate).toLocaleDateString()} | 
                                                <span className="font-semibold"> Last Updated:</span> {new Date(order.updatedAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <ChevronUpIcon className={`w-5 h-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
                                    </Disclosure.Button>

                                    <Disclosure.Panel className="mt-3 text-sm text-gray-700">
                                        <p className="text-gray-500 mb-2">Order Items:</p>
                                        <ul className="border border-gray-200 rounded-lg p-2">
                                            {order.items.map((item) => (
                                                <li
                                                    key={item.productId}
                                                    className="flex items-center justify-between py-2 border-b last:border-0 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition"
                                                    onClick={() => router.push(`/products/${item.productId}`)}
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        <img 
                                                            src={item.productBaseImage} 
                                                            alt={item.productName} 
                                                            className="w-12 h-12 object-cover rounded-md" 
                                                        />
                                                        <div>
                                                            <p className="font-medium">{item.productName}</p>
                                                            <p className="text-sm text-gray-600">{item.quantity} x ${item.price}</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-gray-700 font-semibold">${item.totalAmount}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            )}
        </div>
    );
}