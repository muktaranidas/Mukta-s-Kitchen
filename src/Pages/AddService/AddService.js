import React from "react";

const AddService = () => {
  return (
    <div className="w-1/2 my-24 border mx-auto border-b-green-600 p-12">
      <form oclassName="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input
            name="service-name"
            type="text"
            placeholder="service-name"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo-url"
            type="text"
            placeholder="photo-url"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            name="price"
            type="text"
            placeholder="price"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo-url"
            type="text"
            placeholder="photo-url"
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
