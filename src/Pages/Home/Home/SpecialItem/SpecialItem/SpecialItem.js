import React from "react";
import fuchka from "../../../../../assets/images/Special/febrian-zakaria-SiQgni-cqFg-unsplash.jpg";
import friedChicken from "../../../../../assets/images/Special/rc-cf-FMh5o5m5N9E-unsplash.jpg";

const SpecialItem = () => {
  return (
    <div className="hero my-40 pb-20">
      <div className="hero-content flex-col lg:flex-row mt-4">
        <div className="lg:w-1/2 sm:w-full   relative">
          <img src={fuchka} alt="" className="w-4/5   rounded-lg shadow-2xl" />
          <img
            src={friedChicken}
            alt=""
            className="  absolute  w-4/3 h-3/4 right-1 top-1/2  	 border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2  ml-24 ">
          <p className="text-red-400 text-3xl font-bold py-4 mt-16 ">
            Our Chef
          </p>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-orange-600 border-none">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialItem;
