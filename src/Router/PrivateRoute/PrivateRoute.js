import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <button type="btn btn-primary" disabled>
          <svg
            className="animate-spin h-5  w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </button>
      </>
    );

    // return <h5 className="text-5xl sweet-loading">Loading...</h5>;
    // return (
    //   <div class="flex items-center justify-center ">
    //     <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
    //   </div>
    // );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
