import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.css";

const ProductsCard = ({ product }) => {
  const { _id, img, title, price, description, location, sellersName } =
    product;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${_id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="img-figure">
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${product._id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
