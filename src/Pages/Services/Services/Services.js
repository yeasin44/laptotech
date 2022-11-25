import React from "react";
import Advertise from "../Advertise/Advertise";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";

const Services = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center my-20">Services</h2>
      <div className="flex justify-center mx-auto">
        <div className="">
          <Categories></Categories>
        </div>
        <div className="">
          <Products></Products>
        </div>
        <div>
          <Advertise></Advertise>
        </div>
      </div>
    </div>
  );
};

export default Services;
