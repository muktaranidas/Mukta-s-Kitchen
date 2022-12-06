import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const { _id, title, price, img, description } = useLoaderData();
  const { user } = useContext(AuthContext);

  // console.log(user);

  const handlePlaceReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.name.value}`;
    const email = user?.email || "Undefined";
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      message,
    };

    fetch("https://b6a11-service-review-server-side-theta.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review  Placed Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className=" grid gap-20 md:grid-row-2 flex-col lg:grid-row-2 py-24">
      <div className=" card card-compact mx-auto w-96 bg-base-100 shadow-xl mb-8 w-full	h-auto">
        <h1 className="text-4xl text-pink-400 font-bold py-4 text-center">
          Service Section
        </h1>
        <figure>
          <img className="" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-pink-600 font-semibold">
            Price: ${price}
          </p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-pink-400 font-bold py-4 ">
          Review Section
        </h1>
        <form
          onSubmit={handlePlaceReview}
          className="py-5 border border-success p-6"
        >
          <textarea
            name="message"
            className="textarea textarea-bordered w-full my-6"
            placeholder="Review Please"
            required
          ></textarea>
          <br />

          <button className="btn btn-primary ">Review</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
