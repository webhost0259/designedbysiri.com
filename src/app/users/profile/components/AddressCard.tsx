import { useState } from "react";
import EditSaveButton from "./EditSaveButton";
import { Address } from "@/app/services/apis/models";

interface AddressCardProps {
  address: Address;
  updateAddress: (id: string, address: Address) => void;
}

const AddressCard = ({ address, updateAddress }: AddressCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [addr, setAddr] = useState(address);

  const handleSave = () => {
    updateAddress(addr.id, addr);
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded-lg bg-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium text-gray-900">Address</h2>
        <EditSaveButton isEditing={isEditing} onEdit={() => setIsEditing(true)} onSave={handleSave} />
      </div>

      {Object.keys(addr)
        .filter((key) => key !== "id") // Exclude 'id' from rendering
        .map((key) => (
          <div key={key}>
            <p className="text-sm text-gray-500">{key.toUpperCase()}</p>
            {isEditing ? (
              <input
                type="text"
                className="border p-1 rounded w-full"
                value={addr[key as keyof Address] as string}
                onChange={(e) => setAddr({ ...addr, [key]: e.target.value })}
              />
            ) : (
              <p className="text-gray-900">{addr[key as keyof Address]}</p>
            )}
          </div>
        ))}
    </div>
  );
};

export default AddressCard;