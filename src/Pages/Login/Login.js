import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { login, googleSignIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
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
            toast("Successfully Login");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleSignIn = () => {
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
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="email"
              className="input input-bordered"
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
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
          <button onClick={handleGoogleSignIn} className="btn btn-primary">
            Google
          </button>
        </form>
        <p className="text-center">
          New to Mukta's kitchen?{" "}
          <Link className="text-pink-600 font-bold" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
