import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ServiceCard from "../Home/Home/Services/ServiceCard";
import SeeAllServicesCard from "./SeeAllServicesCard";

const SeeAllServices = () => {
  const [services, setServices] = useState([]);
  const handleSeeAllService = () => {};

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-theta.vercel.app/servicesAll"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-16">
      {services.map((service) => (
        <SeeAllServicesCard
          key={service._id}
          service={service}
        ></SeeAllServicesCard>
      ))}
    </div>
  );
};

export default SeeAllServices;
