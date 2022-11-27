import React from "react";
import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="overflow-hidden relative mx-auto">
        <div className="">
          <img src={banner} alt="" />
          <div className="absolute inset-0  font-bold bg-gray-900 bg-opacity-50">
            <h2 className="text-center flex justify-center top-6 md:top-12 lg:top-28  lg:text-5xl md:text-4xl relative text-white">
              Welcome to Laptotech
            </h2>
            {/* <p className=" text-center flex justify-center top-8 md:top-20 lg:top-44  lg:text-2xl md:text-4xl relative text-base-100">
              Used Laptops for you!
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
