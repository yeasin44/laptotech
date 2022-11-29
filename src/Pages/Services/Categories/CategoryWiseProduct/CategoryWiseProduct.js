import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const CategoryWiseProduct = ({ product, setBookProduct }) => {
  const {
    _id,
    img,
    title,
    price,
    description,
    location,
    sellersName,
    originalPrice,
    yearOfUse,
    postTime,
  } = product;
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-6 gap-4">
      <div className="card w-96 shadow-2xl mx-auto">
        <figure className="img-figure">
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title mb-6">{title}</h2>
            <p className="text-sm">
              <span className="font-bold">Resale Price:</span> <span>৳</span>
              {price}
            </p>
            <p className="text-sm">
              <span className="font-bold">Original Price:</span> <span>৳</span>
              {originalPrice}
            </p>
            <p className="text-sm">
              <span className="font-bold">Used:</span> {yearOfUse}
            </p>
            <p className="text-sm">
              <span className="font-bold">Seller:</span> {sellersName}
            </p>
            <p className="text-sm">
              <span className="font-bold">Location:</span> {location}
            </p>
            <p className="text-sm">
              <span className="font-bold">Posted:</span> {postTime}
            </p>
            <p className="text-sm">
              <span className="font-bold">Description:</span> {description}
            </p>
          </div>
        </div>
        <div className="card-actions justify-end  p-6">
          <label
            onClick={() => setBookProduct(product)}
            htmlFor="booking-modal"
            className="btn btn-primary w-full"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProduct;
