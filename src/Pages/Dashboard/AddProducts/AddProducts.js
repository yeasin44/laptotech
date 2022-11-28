import React from "react";

import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
  };
  return (
    <div className="w-[500px] p-6 border-2 rounded-2xl border-slate-900 my-6">
      <h2 className="text-xl text-center font-bold">Add product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Email address is required" })}
            type="email"
            className="input input-bordered w-full"
          />
        </div>
        <label className="label">
          <span className="label-text">Options</span>
        </label>
        <select className="select select-bordered w-full max-w-xs mb-4">
          <option disabled selected>
            User
          </option>
          <option>Seller</option>
          {/* <input /> */}
        </select>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
        </div>

        <input
          className="btn btn-accent w-full mt-4"
          value="Add a product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
