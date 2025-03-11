"use client";

import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
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
    orderDate: string;
    updatedAt: string;
    items: OrderItem[];
}

export default function OrdersPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [orders, setOrders] = useState<Order[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getOrdersData();
                setLoading(false);
                setOrders(response || []);
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
        <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
            <h1 className="text-2xl font-semibold mb-4 text-center">Your Orders</h1>

            {orders.length === 0 ? (
                <p className="text-gray-500 text-lg font-medium text-center">No Orders Available</p>
            ) : (
                <div className="space-y-6">
                    {orders.map((order, index) => (
                        <div key={order.orderId} className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
                            <p className="text-gray-600 text-sm mb-2 text-center">
                                <span className="font-semibold">Order Date:</span> {new Date(order.orderDate).toLocaleDateString()}
                            </p>
                            {order.items.map((item) => (
                                <div key={item.productId} className="border border-gray-200 rounded-md p-3 mb-3">
                                    <div className="flex flex-col tablet:flex-row items-center gap-4">
                                        <img 
                                            src={item.productBaseImage} 
                                            alt={item.productName} 
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium text-lg">{item.productName}</p>
                                            <p className="text-sm text-gray-600">Quantity: {item.quantity} x ${item.price}</p>
                                            <p className="text-sm text-gray-600 font-semibold">Total: ${item.totalAmount}</p>
                                            <p className="text-xs text-gray-500">Order ID: {item.orderId}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between laptop:justify-start mt-2 text-sm text-gray-700">
                                        <span className="font-semibold">Order Status:</span>
                                        <span className={`font-medium ${order.orderStatus === "Pending" ? "text-yellow-500" : "text-green-600"}`}>{order.orderStatus}</span>
                                    </div>
                                    <div className="flex justify-between laptop:justify-start text-sm text-gray-700">
                                        <span className="font-semibold">Payment Status:</span>
                                        <span className="font-medium text-green-600">{order.paymentStatus.toUpperCase()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
