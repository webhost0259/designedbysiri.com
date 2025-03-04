import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Address } from "@/app/services/apis/models";

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newAddress: Omit<Address, "id">) => void;
}

const AddAddressModal = ({ isOpen, onClose, onSave }: AddAddressModalProps) => {
  const initialAddress = {
    line1: "",
    line2: "",
    city: "",
    district:"",
    state: "",
    zip: "",
    country: "",
  };

  const [address, setAddress] = useState<Omit<Address, "id">>(initialAddress);

  const handleSave = () => {
    onSave(address);
    setAddress(initialAddress); // Reset fields after saving
    onClose();
  };

  const handleClose = () => {
    setAddress(initialAddress); // Reset fields when closing modal
    onClose();
  };

  return (
    <Transition show={isOpen}>
      <Dialog onClose={handleClose} className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
          <Dialog.Title className="text-xl font-semibold mb-4">Add New Address</Dialog.Title>
          <div className="grid grid-cols-1 gap-3 text-black">
            {Object.keys(address).map((key) => (
              <div key={key}>
                <label className="text-sm text-gray-600 capitalize">{key}</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={address[key as keyof typeof address] as string}
                  onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button onClick={handleClose} className="px-4 py-2 border text-red-600 rounded">
              Cancel
            </button>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddAddressModal;