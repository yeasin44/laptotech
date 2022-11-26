import React from "react";
import Advertise from "../Advertise/Advertise";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";

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
        <div className="f">
          {/* <div className="">
            <Products></Products>
          </div> */}
          <div>
            <Advertise></Advertise>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
