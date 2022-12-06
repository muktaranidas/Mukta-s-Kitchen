import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeeAllServices from "../../../SeeAllServices/SeeAllServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://b6a11-service-review-server-side-theta.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-2xl font-bold text-orange- 600">
          Here Is My Services
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/services">
          {" "}
          <button className="btn btn-primary w-2/12		 mb-8">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
