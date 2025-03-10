"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import axios from "axios";
import toast from "react-hot-toast";
import { updatePaymentStatus } from "@/app/services/apis/api";

const PaymentStatus = () => {
  const router = useRouter();
  const transactionId =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("transactionId")
      : null;

  useEffect(() => {
    if (!transactionId) {
      // Redirect to orders page if transactionId is missing
      toast.error("Invalid request. Redirecting to orders page...");
      router.push("/users/orders");
      return;
    }

    const checkPaymentStatus = async () => {
      try {
        if (typeof transactionId === "string") {
          await updatePaymentStatus(transactionId, "paid");
        }

        // Simulate API call (Uncomment when needed)
        // const response = await axios.get(`/api/payment/status?transactionId=${transactionId}`);
        // const status = response.data.status;

        // if (status === "PAID") {
        //   toast.success("Payment successful!");
        // } else {
        //   updatePaymentStatus(transactionId, "notPaid");
        //   toast.error("Payment failed. Redirecting to cart...");
        //   router.push("/cart");
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

export default PaymentStatus;