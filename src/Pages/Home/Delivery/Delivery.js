import React from "react";
import { FaAngleRight, FaFeatherAlt } from "react-icons/fa";
import delivery from "../../../assets/images/delivery.png";
import money from "../../../assets/images/money.png";

const Delivery = () => {
  return (
    <div className="lg:p-12 p-6">
      <div className="card   mx-auto bg-sky-100 shadow-2xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  lg:h-60  md:h-60 h-[500px]  my-12">
        <div className="card-actions justify-start items-center ml-4 lg:ml-40">
          <img className="w-40" src={delivery} alt="" />
        </div>
        <div className="card-body lg:absolute md:absolute left-40 lg:left-96 top-4">
          <h2 className="card-title ">
            <span className="text-sm lg:text-lg">
              Get items delivered to you with
            </span>{" "}
            <span className="border text-sm flex justify-center items-center mt-1 bg-red-200 rounded px-2">
              {" "}
              <FaFeatherAlt className="mr-1"></FaFeatherAlt>{" "}
              <span className="text-blue">The Road Runner</span>
            </span>
          </h2>
          <p className="text-sm">
            Choose from over 4,500 items that can be delivered to your doorstep.{" "}
            <br />
            Order online and enjoy our Buyer Protection program, which means
            that <br /> we’ll replace the item for FREE if it’s not as described
            in the ad!
          </p>
          <button className="btn btn-primary btn-xs w-32 h-8 rounded-2xl">
            Shop Now{" "}
            <FaAngleRight className="rounded-full ml-1 bg-white text-primary"></FaAngleRight>
          </button>
        </div>
      </div>
      <div className="card  mx-auto bg-sky-100 shadow-2xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:h-60  md:h-60 h-[500px]  my-12 relative">
        <div className="card-actions justify-start items-center ml-4 lg:ml-40">
          <img className="w-40" src={money} alt="" />
        </div>
        <div className="card-body lg:absolute md:absolute left-40 lg:left-96 top-4">
          <h2 className="card-title ">Start making money! </h2>
          <p className="text-sm">
            Do you have something to sell? Post your first ad and start making
            money!
          </p>
          <button className="btn btn-orange btn-xs w-48 h-8 rounded-2xl">
            <FaAngleRight className="rounded-full mr-1 bg-white text-primary"></FaAngleRight>
            Post your ad for free!{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
