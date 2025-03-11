"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getOrdersData } from "@/app/cart/cartUtils";
import toast from "react-hot-toast";
import { CalendarIcon, CreditCardIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from "@heroicons/react/24/outline";

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
    orderDate: string; // ISO Date String
    updatedAt: string; // ISO Date String
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

    // Group orders by date
    const ordersByDate = orders.reduce((acc: { [key: string]: Order[] }, order) => {
        const date = new Date(order.orderDate).toLocaleDateString();
        if (!acc[date]) acc[date] = [];
        acc[date].push(order);
        return acc;
    }, {});

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
            <h1 className="text-2xl font-semibold mb-6 text-center">Your Orders</h1>

            {Object.keys(ordersByDate).length === 0 ? (
                <p className="text-gray-500 text-lg font-medium text-center">No Orders Available</p>
            ) : (
                <div className="space-y-8">
                    {Object.entries(ordersByDate).map(([date, orders]) => (
                        <div key={date}>
                            {/* Date Separator */}
                            <div className="flex items-center mb-4">
                                <div className="flex-1 border-t border-gray-300"></div>
                                <p className="px-4 text-gray-600 font-semibold text-lg flex items-center">
                                    <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
                                    {date}
                                </p>
                                <div className="flex-1 border-t border-gray-300"></div>
                            </div>

                            {orders.map((order) => (
                                <div key={order.orderId} className="border border-gray-300 rounded-lg p-4 space-y-4 mb-6"> {/* ADDED mb-6 FOR SPACING */}
                                    {order.items.map((item) => (
                                        <div
                                            key={item.productId}
                                            className="flex items-center justify-between border-b last:border-0 py-3 hover:bg-gray-100 p-2 rounded-md transition cursor-pointer"
                                            onClick={() => router.push(`/products/${item.productId}`)}
                                        >
                                            {/* Product Image */}
                                            <img 
                                                src={item.productBaseImage} 
                                                alt={item.productName} 
                                                className="w-16 h-16 object-cover rounded-md" 
                                            />

                                            {/* Product Details */}
                                            <div className="flex-1 ml-4">
                                                <p className="font-medium text-lg">{item.productName}</p>
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-semibold">Order ID:</span> {item.orderId}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-semibold">Quantity:</span> {item.quantity}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    <span className="font-semibold">Price:</span> ${item.price}
                                                </p>
                                            </div>

                                            {/* Status Details */}
                                            <div className="text-sm text-gray-700 flex flex-col items-end">
                                                <span className="font-medium flex items-center">
                                                    <span className="text-gray-500">Order Status:</span> 
                                                    <span className={`ml-1 flex items-center ${order.orderStatus === "Delivered" ? "text-green-600" : order.orderStatus === "Pending" ? "text-yellow-600" : "text-blue-600"}`}>
                                                        {order.orderStatus} {order.orderStatus === "Delivered" ? <CheckCircleIcon className="w-4 h-4 ml-1" /> : order.orderStatus === "Pending" ? <ClockIcon className="w-4 h-4 ml-1" /> : null}
                                                    </span>
                                                </span>
                                                <span className="font-medium flex items-center">
                                                    <span className="text-gray-500">Payment Status:</span> 
                                                    <span className={`ml-1 flex items-center ${order.paymentStatus === "paid" ? "text-green-600" : "text-red-600"}`}>
                                                        {order.paymentStatus.toUpperCase()} {order.paymentStatus === "paid" ? <CreditCardIcon className="w-4 h-4 ml-1" /> : <XCircleIcon className="w-4 h-4 ml-1 text-red-600" />}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}