import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories";

const Category = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
      <h2>h</h2>
      {products?.map((product) => (
        <Categories product={product}></Categories>
      ))}
    </div>
  );
};

export default Category;
