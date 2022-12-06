import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewsRow from "./ReviewsRow";

const Reviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  //   console.log(user);
  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-theta.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm("You want to delete this review?");
    if (proceed) {
      fetch(
        `https://b6a11-service-review-server-side-theta.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully");
            const remaining = reviews.filter((revw) => revw._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(
      `https://b6a11-service-review-server-side-theta.vercel.app/reviews/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status: "Approved" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((revw) => revw._id !== id);
          const approving = reviews.find((revw) => revw._id === id);
          alert("Are You Sure? You Updated?");
          approving.status = "Approved";
          const newReviews = [approving, ...remaining];
          setReviews(newReviews);
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <h2 className="text-5xl">Now You Have {reviews.length} Orders </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Service Id/Name</th>
            <th>Message</th>
            <th>UserEmail</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <ReviewsRow
              key={review._id}
              review={review}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
            ></ReviewsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
