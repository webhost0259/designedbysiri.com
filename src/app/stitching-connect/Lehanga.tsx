import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  mobile: string;
  date: string;
  length: string;
  waist: string;
};

const Lehanga: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <div className="flex flex-col space-y-4 bg-slate-200 p-4 tablet:flex-row tablet:space-x-4">
        <div>
            Customer Details: 
        </div>
        <div>
          <label>Name:</label>
          <input {...register("name", { required: "Name is required" })} placeholder="Name" className="border p-2 w-full rounded-md" />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label>Mobile:</label>
          <input {...register("mobile", { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit mobile number" } })} placeholder="Enter Mobile No" className="border p-2 w-full rounded-md" />
          {errors.mobile && <p className="text-red-600">{errors.mobile.message}</p>}
        </div>
        <div>
          <label>Delivery Date:</label>
          <input {...register("date", { required: "Date is required" })} type="date" className="border p-2 w-full rounded-md" />
          {errors.date && <p className="text-red-600">{errors.date.message}</p>}
        </div>
      </div>

      <div>
        <label>Length:</label>
        <input
          {...register("length", {
            required: "Length is required",
            pattern: {
              value: /^\d+(\.\d{1,2})?$/,
              message: "Enter a valid length in inches",
            },
          })}
          placeholder="Enter in inches"
          className={`border p-2 w-full rounded-md ${errors.length ? 'border-red-500' : ''}`}
        />
        {errors.length && <span className="text-red-500 text-sm">{errors.length.message}</span>}
      </div>

      <div>
        <label>Waist:</label>
        <input
          {...register("waist", {
            required: "Waist is required",
            pattern: {
              value: /^\d+(\.\d{1,2})?$/,
              message: "Enter a valid waist size in inches",
            },
          })}
          placeholder="Enter in inches"
          className={`border p-2 w-full rounded-md ${errors.waist ? 'border-red-500' : ''}`}
        />
        {errors.waist && <span className="text-red-500 text-sm">{errors.waist.message}</span>}
      </div>

      <button type="submit" className="bg-green-600 text-white p-2 mt-4 rounded-md w-64">Submit</button>
    </form>
  );
};

export default Lehanga;