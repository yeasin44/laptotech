import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard/ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>Products: {products.length}</h2>
      <div className="">
        {products?.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
