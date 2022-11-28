import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const imgHostKey = process.env.REACT_APP_imageBB_key;

  const handleAddProducts = (data) => {
    // console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          //   doctor er information server a send korar jonno

          const myProducts = {
            productName: data.title,
            price: data.price,
            condition: data.condition,
            location: data.location,
            phone: data.phone,
            category: data.category,
            description: data.description,
            yearOfUse: data.use,
            image: imgData.data.url,
          };
          fetch(`https://assignment-12-server-yeasin44.vercel.app/myProducts`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(myProducts),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              toast.success(`${data.title} has been added`);
              navigate("/dashboard/myProducts");
            });
        }
      });
  };
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold py-4 ml-6">Add a product</h2>
      <div className="w-[600px] p-6 border-2 rounded-2xl border-slate-900 ">
        <form onSubmit={handleSubmit(handleAddProducts)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product name</span>
            </label>
            <input
              {...register("title", { required: "Product name is required" })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.title && (
              <p className="text-red-600 mt-2">{errors.title?.message}</p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: "Price is required" })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.price && (
              <p className="text-red-600 mt-2">{errors.price?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Condition</span>
            </label>
            <input
              {...register("condition", { required: "Price is required" })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.condition && (
              <p className="text-red-600 mt-2">{errors.condition?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              {...register("location", {
                required: "Location is required",
              })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.location && (
              <p className="text-red-600 mt-2">{errors.location?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              {...register("phone", { required: "Phone is required" })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.phone && (
              <p className="text-red-600 mt-2">{errors.phone?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              {...register("category", {
                required: "Category is required",
              })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.category && (
              <p className="text-red-600 mt-2">{errors.category?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              {...register("description", {
                required: "Description is required",
              })}
              type="text"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Year of use</span>
            </label>
            <input
              {...register("use", {
                required: "Year of use is required",
              })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.use && (
              <p className="text-red-600 mt-2">{errors.use?.message}</p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("image", { required: "Photo  is required" })}
              type="file"
              className="input input-bordered w-full"
            />
            {errors.image && (
              <p className="text-red-600 mt-2">{errors.image?.message}</p>
            )}
          </div>

          <input
            className="btn btn-primary w-full mt-4"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
