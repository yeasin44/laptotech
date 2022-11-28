import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.css";

const ProductsCard = ({ product, setBookProduct }) => {
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${_id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="card w-96 shadow-2xl mx-auto">
      <figure className="img-figure">
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
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
        <div className="card-actions justify-end">
          <label
            onClick={() => setBookProduct(product)}
            htmlFor="booking-modal"
            className="btn btn-primary"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
