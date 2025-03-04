import { useState } from "react";
import EditSaveButton from "./EditSaveButton";
import { Address } from "@/app/services/apis/models";

interface AddressCardProps {
  address: Address;
  updateAddress: (id: string, address: Address) => void;
  markAsDefault: (id: string) => void;
}

const AddressCard = ({ address, updateAddress, markAsDefault }: AddressCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [addr, setAddr] = useState(address);

  const handleSave = () => {
    updateAddress(addr.id, addr);
    setIsEditing(false);
  };

  return (
    <div className={`p-4 border rounded-lg bg-white ${addr.isDefault ? "border-blue-500" : ""}`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium text-gray-900">Address</h2>
        {addr.isDefault && <span className="text-green-600 text-sm font-semibold">(Default)</span>}
        <EditSaveButton isEditing={isEditing} onEdit={() => setIsEditing(true)} onSave={handleSave} />
      </div>

      {Object.keys(addr)
        .filter((key) => key !== "id" && key !== "isDefault") // Exclude 'id' and 'isDefault' from rendering
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
      <div className="mt-2">
        {!addr.isDefault && (
          <button
            className="text-blue-600 hover:underline text-sm"
            onClick={() => markAsDefault(addr.id)}
          >
            Mark as Default
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
