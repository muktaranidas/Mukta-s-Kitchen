import React, { useContext } from "react";
import Favicon from "react-favicon";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Successfully SignUp");
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((Result) => {
        const user = Result.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        // GET JWT TOKEN
        fetch("https://b6a11-service-review-server-side-theta.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-8 m-24 ">
        <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
        <form onSubmit={handleSignUp} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </div>
          <button onClick={handleGoogleSignUp} className="btn btn-primary">
            Google
          </button>
          {/* <Favicon google /> */}
        </form>
        <p className="text-center">
          Already have an account?
          <Link className="text-pink-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
