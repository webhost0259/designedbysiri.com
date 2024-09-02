import { useForm } from "react-hook-form";

const Dress: React.FC = () => {
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
          {errors.name && <p className="text-red-600">{errors.name.message?.toString()}</p>}
        </div>
        <div>
          <label>Mobile:</label>
          <input {...register("mobile", { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit mobile number" } })} placeholder="Enter Mobile No" className="border p-2 w-full rounded-md" />
          {errors.mobile && <p className="text-red-600">{errors.mobile.message?.toString()}</p>}
        </div>
        <div>
          <label>Delivery Date:</label>
          <input {...register("date", { required: "Date is required" })} type="date" className="border p-2 w-full rounded-md" />
          {errors.date && <p className="text-red-600">{errors.date.message?.toString()}</p>}
        </div>
      </div>
        <div>
          <label>Chest (in inches):</label>
          <input {...register("chest", { required: "Chest measurement is required" })} placeholder="chest" type="number" className="border p-2 w-full rounded-md" />
          {errors.chest && <p className="text-red-600">{errors.chest.message?.toString()}</p>}
        </div>
        <div>
          <label>Waist (in inches):</label>
          <input {...register("waist", { required: "Waist measurement is required" })} placeholder="Waist" type="number" className="border p-2 w-full rounded-md" />
          {errors.waist && <p className="text-red-600">{errors.waist.message?.toString()}</p>}
        </div>
        <div>
          <label>Cuts (in inches):</label>
          <input {...register("cuts", { required: "Cuts measurement is required" })} placeholder="cuts" type="number" className="border p-2 w-full rounded-md" />
          {errors.cuts && <p className="text-red-600">{errors.cuts.message?.toString()}</p>}
        </div>
        <div>
          <label>Pant:</label>
          <select {...register("pant", { required: "Pant type is required" })} className="border p-2 w-full rounded-md">
            <option value="normal">Normal</option>
            <option value="chudi">Chudi</option>
          </select>
          {errors.pant && <p className="text-red-600">{errors.pant.message?.toString()}</p>}
        </div>
        <div>
          <label>Length (in inches):</label>
          <input {...register("length", { required: "Length is required" })} placeholder="length" type="number" className="border p-2 w-full rounded-md" />
          {errors.length && <p className="text-red-600">{errors.length.message?.toString()}</p>}
        </div>
        <div>
          <label>Sleeve Length (in inches):</label>
          <input {...register("sleeveLength", { required: "Sleeve length is required" })} placeholder="sleeveLength" type="number" className="border p-2 w-full rounded-md" />
          {errors.sleeveLength && <p className="text-red-600">{errors.sleeveLength.message?.toString()}</p>}
        </div>
        <div>
          <label>Floor Length (in inches):</label>
          <input {...register("floorLength", { required: "Floor length is required" })} placeholder="floorLength" type="number" className="border p-2 w-full rounded-md" />
          {errors.floorLength && <p className="text-red-600">{errors.floorLength.message?.toString()}</p>}
        </div>
        <div>
          <label>Hip (in inches):</label>
          <input {...register("hip", { required: "Hip measurement is required" })} placeholder="hip" type="number" className="border p-2 w-full rounded-md" />
          {errors.hip && <p className="text-red-600">{errors.hip.message?.toString()}</p>}
        </div>
        <div>
          <label>Front Neck (in inches):</label>
          <input {...register("frontNeck", { required: "Front neck measurement is required" })} placeholder="frontNeck" type="number" className="border p-2 w-full rounded-md" />
          {errors.frontNeck && <p className="text-red-600">{errors.frontNeck.message?.toString()}</p>}
        </div>
        <div>
          <label>Back Neck (in inches):</label>
          <input {...register("backNeck", { required: "Back neck measurement is required" })} placeholder="backNeck" type="number" className="border p-2 w-full rounded-md" />
          {errors.backNeck && <p className="text-red-600">{errors.backNeck.message?.toString()}</p>}
        </div>
      <button type="submit" className="w-64 bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  );
}

export default Dress;
