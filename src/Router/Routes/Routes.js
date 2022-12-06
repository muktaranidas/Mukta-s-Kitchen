import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SeeAllServices from "../../Pages/SeeAllServices/SeeAllServices";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <SeeAllServices></SeeAllServices>,
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
      {
        path: "/servicesAll",
        element: <SeeAllServices></SeeAllServices>,
      },

      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-theta.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
