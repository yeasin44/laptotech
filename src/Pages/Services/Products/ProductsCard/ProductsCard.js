import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.css";

const ProductsCard = ({ product }) => {
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
    <div className="card w-[600px] m-6 shadow-xl bg-sky-100">
      <figure className="img-figure">
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Resale Price: <span>৳</span>
          {price}
        </p>
        <p>
          Original Price: <span>৳</span>
          {originalPrice}
        </p>
        <p>Used: {yearOfUse}</p>
        <p>Seller: {sellersName}</p>
        <p>Location: {location}</p>
        <p>Posted: {postTime}</p>
        <p>Description: {description}</p>
        <div className="card-actions justify-end">
          <label htmlFor="booking-modal" className="btn btn-primary">
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
