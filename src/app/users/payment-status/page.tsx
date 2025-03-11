"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import toast from "react-hot-toast";
import { updatePaymentStatus } from "@/app/services/apis/api";

const PaymentStatusPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const transactionId = searchParams.get("transactionId");

  useEffect(() => {
    if (!transactionId) {
      toast.error("Invalid request. Redirecting to orders page...");
      router.push("/users/orders");
      return;
    }

    const checkPaymentStatus = async () => {
      try {
        await updatePaymentStatus(transactionId, "paid");
        toast.success("Payment successful!");
        router.push("/users/orders");
      } catch (error) {
        console.error("Error verifying payment:", error);
        toast.error("Something went wrong! Redirecting to cart...");
        router.push("/users/cart");
      }
    };

    checkPaymentStatus();
  }, [transactionId, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-medium">Verifying payment...</p>
    </div>
  );
};

const PaymentStatusWrapper = () => (
  <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Loading payment details...</p>
      </div>
    }
  >
    <PaymentStatusPage />
  </Suspense>
);

export default PaymentStatusWrapper;