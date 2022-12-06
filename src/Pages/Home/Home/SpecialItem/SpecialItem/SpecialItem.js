import React from "react";

const SpecialItem = () => {
  return (
    <div className="hero my-20 pb-20 bg-pink-400">
      <div className="hero-content flex-col lg:flex-col w-full">
        <h1 className="text-black text-5xl font-bold py-6">Special Item</h1>
        <div className="grid grid-cols-2 gap-8">
          <img
            src="https://www.shutterstock.com/image-photo/slice-hot-pizza-large-cheese-260nw-643604302.jpg"
            alt=""
            className=" rounded-lg shadow-2xl "
          />
          <img
            src="https://image.shutterstock.com/image-photo/panipuri-fuchka-fhuchka-gupchup-golgappa-260nw-2076945667.jpg"
            alt=""
            className=" rounded-lg shadow-2xl "
          />
        </div>
        <div className="grid grid-cols-2 gap-80">
          <h3 className="text-3xl font-bold text-center">Pizza</h3>
          <h1 className="text-3xl font-bold text-center">Fuchka</h1>
        </div>
        <div className="w-1/2">
          <p className="py-6">
            All customers love to eat Mukta's kitchen pizza and this is Mukta's
            Kitchen specialty . I Think oneday you will try.
          </p>
          <p className="py-4">
            All customers also love to eat Mukta's kitchen Fuchka and this is
            Mukta's Kitchen specialty . I Think oneday you will try.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialItem;
