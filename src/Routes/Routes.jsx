import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProduct from "../Pages/AddProduct";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/addproduct",
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>,
      },
    ],
  },
]);

export default routes;
