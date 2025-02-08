import { useState } from "react";
import AddressCard from "./AddressCard";
import AddAddressModal from "./AddAddressModal";
import { Address, Customer } from "@/app/services/apis/models";
import { addAddress, updateAddress } from "@/app/services/apis/api";


interface AddressListProps {
  customer: Customer;
}

const AddressList = ({customer} : AddressListProps) => {
  const [addresses, setAddresses] = useState<Address[]>(customer.addresses || []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewAddress = (newAddress: Omit<Address, "id">) => {
    const addressWithId: Address = { id: crypto.randomUUID(), ...newAddress };

    addAddress(customer.customerId, addressWithId).then((response) => {
      console.log("Added Address:", response);
    });

    setAddresses((prev) => [...prev, addressWithId]);
  };

  const updateCurrentAddress = (id: string, updatedAddress: Address) => {

    updateAddress(customer.customerId, updatedAddress).then((response) => {
      console.log("Updated Address:", response);
    });

    setAddresses((prev) => prev.map((addr) => (addr.id === id ? updatedAddress : addr)));
  };

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
      <h2 className="text-lg font-medium text-gray-900 mb-2">Addresses</h2>
      {addresses.length === 0 ? (
        <div className="text-center p-4">
          <p className="text-gray-500">No addresses found.</p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add Address
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {addresses.map((address) => (
            <AddressCard key={address.id} address={address} updateAddress={updateCurrentAddress} />
          ))}
        </div>
      )}
      {addresses.length > 0 && (
        <div className="text-center p-4">
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add Address
          </button>
        </div>
      )}
      <AddAddressModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={addNewAddress} />
    </div>
  );
};

export default AddressList;