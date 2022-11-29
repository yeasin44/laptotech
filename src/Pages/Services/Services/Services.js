import React from "react";
import Advertise from "../Advertise/Advertise";
import Categories from "../Categories/Categories";
import CategoryWiseProduct from "../Categories/CategoryWiseProduct/CategoryWiseProduct";
import ProductCardDetails from "../Products/ProductCardDetails/ProductCardDetails";
import Products from "../Products/Products";
import ProductsCard from "../Products/ProductsCard/ProductsCard";

const Services = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-6 mt-12">
        All Categories
      </h2>
      <div className="">
        <div className="">
          <Categories></Categories>
        </div>
        <div className="">
          {/* <ProductCardDetails></ProductCardDetails> */}
          <Products></Products>
        </div>
        <div className="">
          <div>
            <Advertise></Advertise>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
