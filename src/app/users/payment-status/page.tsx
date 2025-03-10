"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { updatePaymentStatus } from "@/app/services/apis/api";

const PaymentStatus = () => {
  const router = useRouter();
  const [transactionId, setTransactionId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("transactionId");
      console.log("Extracted transactionId:", id);
      setTransactionId(id);
    }
  }, []);

  useEffect(() => {
    if (transactionId === null) return; // Wait until transactionId is set

    if (!transactionId) {
      toast.error("Invalid request. Redirecting to orders page...");
      router.push("/users/orders");
      return;
    }

    const checkPaymentStatus = async () => {
      try {
        await updatePaymentStatus(transactionId, "paid");

        // Simulate API call (Uncomment when needed)
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
        router.push("/cart");
      }
    };

    checkPaymentStatus();
  }, [transactionId, router]);

  return <p>Verifying payment...</p>;
};

export default PaymentStatus;