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

        // Simulated API call (Uncomment when needed)
        // const response = await axios.get(`/api/payment/status?transactionId=${transactionId}`);
        // const status = response.data.status;

        // if (status === "PAID") {
        //   toast.success("Payment successful!");
        // } else {
        //   updatePaymentStatus(transactionId, "notPaid");
        //   toast.error("Payment failed. Redirecting to cart...");
        //   router.push("/users/cart");
        // }
      } catch (error) {
        console.error("Error verifying payment:", error);
        toast.error("Something went wrong! Redirecting to cart...");
        router.push("/users/cart");
      }
    };

    checkPaymentStatus();
  }, [transactionId, router]);

  return <p>Verifying payment...</p>;
};

const PaymentStatusWrapper = () => (
  <Suspense fallback={<p>Loading payment details...</p>}>
    <PaymentStatusPage />
  </Suspense>
);

export default PaymentStatusWrapper;