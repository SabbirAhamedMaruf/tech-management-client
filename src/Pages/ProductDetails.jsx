import { useContext, useEffect, useState } from "react";
import Navber from "../Components/Navber";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Index.css";

const ProductDetails = () => {
  const { theme } = useContext(AuthContext);
  // Toast Message
  const successInfo = () => {
    toast.success("Product added successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const errorInfo = () => {
    toast.error("Connection interrupted. Please check your Connection!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const { productDetailId } = useParams();
  const { user } = useContext(AuthContext);
  const [currentProductDetail, setCurrentProductDetails] = useState([]);
  const { photo, name, brand, price, rating, warrenty, description } =
    currentProductDetail[0] || {};

  // Fetching product detail from server
  useEffect(() => {
    fetch(
      `https://server-7ih8iop1k-sabbir-ahamed-marufs-projects.vercel.app/brand/:brandname/${productDetailId}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentProductDetails(data));
  }, [productDetailId]);

  // Handling add to cart function for userCartCollection
  const handleAddToCart = () => {
    const userProduct = { email: user.email, product: currentProductDetail };
    fetch(
      `https://server-7ih8iop1k-sabbir-ahamed-marufs-projects.vercel.app/brand/:brandname/${productDetailId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          successInfo();
        } else {
          errorInfo();
        }
      });
  };

  return (
    <div
      style={
        theme ? { backgroundColor: "#000000",color:"white" } : { backgroundColor: "#eff6ff",color:"#6b7280" }
      }
      className="pb-20"
    >
      <div className="shadow-xl">
        <Navber></Navber>
      </div>
      <div
        style={
          theme
            ? { backgroundColor: "#161828" }
            : { backgroundColor: "#eff6ff" }
        }
        className="mt-8 w-[90%] m-auto"
      >
        <div className="rounded-3xl shadow-2xl p-10">
          <div className=" flex flex-col lg:flex-row justify-around items-center">
            <figure className="pt-10">
              <img
                className="bg-blue-50 m-auto shadow-2xl rounded-2xl mb-8 p-4"
                src={photo}
              />
            </figure>
            <div className="font-semibold text-2xl lg:mr-32 space-y-8">
              <p>
                <span className="font-bold mr-12">Name</span>
                <span>{name}</span>
              </p>
              <p>
                <span className="font-bold mr-12">Brand</span>
                <span>{brand}</span>
              </p>
              <p>
                <span className="font-bold mr-[58px]">Price</span>
                <span>{price} Taka</span>
              </p>
              <p>
                <span className="font-bold mr-10">Rating</span>
                <span>{rating}/5</span>
              </p>
              <p>
                <span className="font-bold mr-3">Warrenty</span>
                <span>{warrenty}</span>
              </p>

              <div>
                <Link
                  onClick={() => handleAddToCart()}
                  className="px-8 py-2 bg-gray-500 rounded-3xl duration-300 hover:bg-blue-500 text-white"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] m-auto text-justify mt-4">
            <h1 className="font-bold text-center text-2xl text-gray-500">
              Description
            </h1>
            <p className="mt-4">{description}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;

// TODO work on rating star
