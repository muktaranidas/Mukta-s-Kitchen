import React, { useEffect, useState } from "react";

const ReviewsRow = ({ review, handleDelete, handleStatusUpdate }) => {
  const { customer, message, service, email, price, serviceName, _id, status } =
    review;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-theta.vercel.app/services/${service}`
    )
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  return (
    <tr>
      <td>
        <div className="flex items-center ">
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm opacity-50">{serviceName}</div>
            <div className="text-sm opacity-50">${price}</div>
          </div>
        </div>
      </td>

      <td>{message}</td>
      <td>{email}</td>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
          X
        </button>
      </th>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-primary btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default ReviewsRow;
