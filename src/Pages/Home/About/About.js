import React from "react";
import image from "../../../assets/images/About/img1.jpg";

const About = () => {
  return (
    <div className="hero  my-24">
      <div className="hero-content grid sm:grid-cols-1 lg:grid-cols-2 ">
        <img src={image} className="sm:w-full   rounded-lg shadow-2xl" alt="" />
        <div className="mx-8">
          <h1 className="text-4xl font-bold text-pink-500">Mukta's kitchen!</h1>
          <p className="py-6">
            All customers love to eat Mukta's kitchen pizza and this is Mukta's
            Kitchen specialty . I Think oneday you will try. Cloud kitchens
            enable restauranteurs to expand an existing restaurant or start a
            virtual brand at minimal cost.
          </p>
          <button className="btn btn-primary ">See Details</button>
        </div>
      </div>
    </div>

    // <div className="hero my-20 pb-20">
    //   <div className="hero-content sm:flex-col  lg:flex-row">
    //     <div className="w-1/2">
    //       <p className="lg:text-red-400 font-bold py-4">About Us</p>
    //       <h1 className="text-5xl font-bold">
    //         Hey, This is Mukta's Kitchen....
    //       </h1>
    //       <p className="py-6">
    //         All customers love to eat Mukta's kitchen pizza and this is Mukta's
    //         Kitchen specialty . I Think oneday you will try.
    //       </p>
    //       <p className="py-4">
    //         Cloud kitchens enable restauranteurs to expand an existing
    //         restaurant or start a virtual brand at minimal cost.
    //       </p>
    //     </div>
    //     <div className="">
    //       <img src={image} alt="" className=" h-full rounded-lg shadow-2xl" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
