import React from "react";
import image from "../../../assets/images/About/img1.jpg";

const About = () => {
  return (
    <div className="hero my-20 pb-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <p className="text-red-400 font-bold py-4">About Us</p>
          <h1 className="text-5xl font-bold">
            Hey, This is Mukta's Kitchen....
          </h1>
          <p className="py-6">
            All customers love to eat Mukta's kitchen pizza and this is Mukta's
            Kitchen specialty . I Think oneday you will try.
          </p>
          <p className="py-4">
            Cloud kitchens enable restauranteurs to expand an existing
            restaurant or start a virtual brand at minimal cost.
          </p>
        </div>
        <div className="">
          <img src={image} alt="" className=" h-full rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
