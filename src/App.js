import { RouterProvider } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto		">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
