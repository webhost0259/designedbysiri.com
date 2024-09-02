import { useForm } from "react-hook-form";

const Men: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <div className="flex flex-col space-y-4 bg-slate-200 p-4 tablet:flex-row tablet:space-x-4">
        <div>
            Customer Details: 
        </div>
        <div>
          <label>Name:</label>
          <input {...register("name", { required: "Name is required" })} placeholder="Name" className="border p-2 w-full rounded-md" />
          {errors.name && <p className="text-red-600">{String(errors.name.message)}</p>}
        </div>
        <div>
          <label>Mobile:</label>
          <input {...register("mobile", { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit mobile number" } })} placeholder="Enter Mobile No" className="border p-2 w-full rounded-md" />
          {errors.mobile && <p className="text-red-600">{String(errors.mobile.message)}</p>}
        </div>
        <div>
          <label>Delivery Date:</label>
          <input {...register("date", { required: "Date is required" })} type="date" className="border p-2 w-full rounded-md" />
          {errors.date && <p className="text-red-600">{String(errors.date.message)}</p>}
        </div>
      </div>
        <div>
            <label>Shoulder (in inches):</label>
            <input {...register("shoulder", { required: "Shoulder measurement is required" })} placeholder="Enter in Inches" type="number" className="border p-2 w-full rounded-md" />
            {errors.shoulder && <p className="text-red-600">{String(errors.shoulder.message)}</p>}
        </div>
        <div>
          <label>Chest (in inches):</label>
          <input {...register("chest", { required: "Chest measurement is required" })} placeholder="Enter in inches" type="number" className="border p-2 w-full rounded-md" />
          {errors.chest && <p className="text-red-600">{String(errors.chest.message)}</p>}
        </div>
        <div>
          <label>Shirt Size:</label>
          <input {...register("shirtSize", { required: "Shirt size is required" })} placeholder="Enter in inches" type="number" className="border p-2 w-full rounded-md" />
          {errors.shirtSize && <p className="text-red-600">{String(errors.shirtSize.message)}</p>}
        </div>
        <div>
          <label>Height (in inches):</label>
          <input {...register("height", { required: "Height is required" })} placeholder="Enter in inches" type="number" className="border p-2 w-full rounded-md" />
          {errors.height && <p className="text-red-600">{String(errors.height.message)}</p>}
        </div>
        <div>
          <label>Weight (in inches):</label>
          <input {...register("weight", { required: "Weight is required" })} placeholder="Enter in inches" type="number" className="border p-2 w-full rounded-md" />
          {errors.weight && <p className="text-red-600">{String(errors.weight.message)}</p>}
        </div>

      <button type="submit" className="w-64 bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  );
}

export default Men;
