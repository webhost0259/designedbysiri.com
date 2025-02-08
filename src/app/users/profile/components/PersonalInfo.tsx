"use client"
import { useEffect, useState } from "react";
import EditSaveButton from "./EditSaveButton";
import { Customer } from "@/app/services/apis/models";
import { updateCustomer } from "@/app/services/apis/api";

interface PersonalInfoProps {
  customer: Customer;
}

const PersonalInfo = ({customer} : PersonalInfoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    firstName: "firstName here",
    lastName: "lastName here",
    email: "youremail@gmail.com here",
    phone: "phone number here"
  });

  useEffect(() => {

    console.log("Customer", customer);

    if(customer){
      setUser({
        firstName: customer.firstName!,
        lastName: customer.lastName!,
        email: customer.email!,
        phone: customer.phone ? customer.phone.toString() : "phone number here"
      });
    }
    
  },[customer])

  const handleSave = () => {
    console.log("Saving Personal Info:", user);
    updateCustomer({
      ...customer,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone.length > 0 ? parseInt(user.phone) : undefined
    }).then((response) => {
      console.log("Updated Customer:", response);
    })

    setIsEditing(false);
  };

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
        <EditSaveButton isEditing={isEditing} onEdit={() => setIsEditing(true)} onSave={handleSave} />
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
        {Object.keys(user).map((key) => (
          <div key={key}>
            <p className="text-sm text-gray-500">{key.replace(/([A-Z])/g, " $1")}</p>
            {isEditing ? (
              <input type="text" className="border p-1 rounded w-full"
                value={user[key as keyof typeof user]} onChange={(e) => setUser({ ...user, [key]: e.target.value })} />
            ) : (
              <p className="text-gray-900">{user[key as keyof typeof user]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;