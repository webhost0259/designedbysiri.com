"use client";
import { useEffect, useState } from "react";
import AddressList from "./components/AddressList";
import PersonalInfo from "./components/PersonalInfo";
import { Customer } from "@/app/services/apis/models";
import { getCustomerByToken } from "@/app/services/apis/api";

export default function ProfilePage() {
  const [customer, setCustomer] = useState<Customer | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getCustomerByToken();
        console.log("Customer", response);
        setCustomer(response);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomer();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 tablet:px-8 laptop:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">My Profile</h1>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <svg
              className="animate-spin h-8 w-8 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          </div>
        ) : (
          <>
            <PersonalInfo customer={customer!} />
            <AddressList customer={customer!}/>
          </>
        )}
      </div>
    </div>
  );
}