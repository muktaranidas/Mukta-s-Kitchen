import React from "react";
import { Link } from "react-router-dom";
import "./SeeAllServiceCard.css";

const SeeAllServicesCard = ({ service }) => {
  const { _id, title, price, img, description } = service;
  return (
    <div>
      <div className=" card card-compact w-96 bg-base-100 shadow-xl mb-8 w-full	h-auto">
        <figure>
          <img className="seeAllServicesCard" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-pink-600 font-semibold">
            Price: ${price}
          </p>
          <p>
            {description?.length > 100 ? (
              <>{description.slice(0, 100) + "..."}</>
            ) : (
              description
            )}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAllServicesCard;
