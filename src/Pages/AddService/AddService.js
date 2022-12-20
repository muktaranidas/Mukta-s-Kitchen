import React from "react";

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.name.value;
    const img = form.photo.value;
    const price = form.price.value;
    const description = form.description.value;

    console.log(title, img, price, description);

    const addService = {
      title,
      img,
      price,
      description,
    };

    fetch(
      "https://b6a11-service-review-server-side-theta.vercel.app/servicesAll",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(addService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Service  Placed Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-1/2 my-12  mx-auto  p-12">
      <form onSubmit={handleAddService} className="card-body  bg-red-300">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="service-name"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="photo-url"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            name="price"
            type="number"
            placeholder="price"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            name="description"
            type="text"
            placeholder="description"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-primary w-1/3 "
            type="submit"
            value="Add Service"
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
