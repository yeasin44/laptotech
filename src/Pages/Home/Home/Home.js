import React from "react";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";
import Delivery from "../Delivery/Delivery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Delivery></Delivery>
    </div>
  );
};

export default Home;
