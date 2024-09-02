import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  mobile: string;
  date: string;
  shoulder: string;
  chest: string;
  open: string;
  waist: string;
  padded: string;
  sleeveLength: string;
  sleeveRound: string;
  armHole: string;
  hip: string;
  frontNeck: string;
  backNeck: string;
};

const Blouse: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
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
        <label>Shoulder:</label>
        <input {...register("shoulder", { required: "Shoulder measurement is required" })} placeholder="Enter in inches" className="border p-2 w-full rounded-md" />
        {errors.shoulder && <p className="text-red-600">{errors.shoulder.message}</p>}
      </div>

      <div>
        <label>Chest:</label>
        <input {...register("chest", { required: "Chest measurement is required" })} placeholder="Enter in inches" className="border p-2 w-full rounded-md" />
        {errors.chest && <p className="text-red-600">{errors.chest.message}</p>}
      </div>

      <div>
        <label>Open:</label>
        <div className="flex space-x-4">
          <label>
            <input {...register("open", { required: "Please select an option" })} type="radio" value="Front" className='mr-2'/>
            Front
          </label>
          <label>
            <input {...register("open", { required: "Please select an option" })} type="radio" value="Back" className='mr-2'/>
            Back
          </label>
        </div>
        {errors.open && <p className="text-red-600">{errors.open.message}</p>}
      </div>

      <div>
        <label>Waist:</label>
        <input {...register("waist", { required: "Waist measurement is required" })} placeholder="Enter in inches" className="border p-2 w-full rounded-md" />
        {errors.waist && <p className="text-red-600">{errors.waist.message}</p>}
      </div>

      <div>
        <label>Padded:</label>
        <div className="flex space-x-4">
          <label>
            <input {...register("padded", { required: "Please select an option" })} type="radio" value="Yes" className='mr-2'/>
            Yes
          </label>
          <label>
            <input {...register("padded", { required: "Please select an option" })} type="radio" value="No" className='mr-2'/>
            No
          </label>
        </div>
        {errors.padded && <p className="text-red-600">{errors.padded.message}</p>}
      </div>

      <div>
        <label>Sleeve Length:</label>
        <input {...register("sleeveLength", { required: "Sleeve Length is required" })} placeholder="Enter in inches" className="border p-2 w-full rounded-md" />
        {errors.sleeveLength && <p className="text-red-600">{errors.sleeveLength.message}</p>}
      </div>

      <div>
        <label>Sleeve Round:</label>
        <input {...register("sleeveRound", { required: "Sleeve Round is required" })} placeholder="Enter in inches" className="border p-2 w-full rounded-md" />
        {errors.sleeveRound && <p className="text-red-600">{errors.sleeveRound.message}</p>}
      </div>

      <div>
        <label>Arm Hole:</label>
        <input {...register("armHole", { required: "Arm Hole is required" })} placeholder="Enter in inches" className="border p-2 w-full rounded-md" />
        {errors.armHole && <p className="text-red-600">{errors.armHole.message}</p>}
      </div>

      <div>
        <label>Hip:</label>
        <input {...register("hip", { required: "Hip measurement is required" })} placeholder="Enter in inches" className="border p-2 w-full rounded-md" />
        {errors.hip && <p className="text-red-600">{errors.hip.message}</p>}
      </div>

      <div>
        <label>Front Neck:</label>
        <input {...register("frontNeck", { required: "Front Neck measurement is required" })} placeholder="Enter in inches" className="border p-2 w-full rounded-md" />
        {errors.frontNeck && <p className="text-red-600">{errors.frontNeck.message}</p>}
      </div>

      <div>
        <label>Back Neck:</label>
        <input {...register("backNeck", { required: "Back Neck measurement is required" })} placeholder="Enter in inches" className="border p-2 w-full rounded-md" />
        {errors.backNeck && <p className="text-red-600">{errors.backNeck.message}</p>}
      </div>

      <button type="submit" className="bg-green-600 text-white p-2 mt-4 rounded-md w-64">Submit</button>
    </form>
  );
};

export default Blouse;