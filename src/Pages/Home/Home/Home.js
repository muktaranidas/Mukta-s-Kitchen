import React from "react";
import SeeAllServices from "../../SeeAllServices/SeeAllServices";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "./Services/Services";
import SpecialItem from "./SpecialItem/SpecialItem/SpecialItem";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      {/* <SeeAllServices></SeeAllServices> */}
      <SpecialItem></SpecialItem>
    </div>
  );
};

export default Home;
