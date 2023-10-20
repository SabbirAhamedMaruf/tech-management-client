import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProduct from "../Pages/AddProduct";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import AddBrand from "../Pages/AddBrand";
import AddType from "../Pages/AddType";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import MyCart from "../Pages/MyCart";
import ProductUpdate from "../Pages/ProductUpdate";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addbrand",
        element: (
          <PrivateRoutes>
            <AddBrand></AddBrand>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addtype",
        element: (
          <PrivateRoutes>
            <AddType></AddType>
          </PrivateRoutes>
        ),
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
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/brand/:brandname",
        element: <Products></Products>,
      },
      {
        path: "/brand/:brandname/:productDetailId",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
      },
      {
        path: "/brand/update/:productDetailId",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/update/${params.productDetailId}`
          ),
        element: <ProductUpdate></ProductUpdate>,
      },
    ],
  },
]);

export default routes;
