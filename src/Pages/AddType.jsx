import Navber from "../Components/Navber";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Index.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const AddType = () => {
  const { theme } = useContext(AuthContext);
  // Toast Message
  const successInfo = () => {
    toast.success("Product type added successfully!", {
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

  const handleAddBrand = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value;
    const productType = { name };
    console.log(JSON.stringify(productType));
    fetch(
      "https://server-7ih8iop1k-sabbir-ahamed-marufs-projects.vercel.app/addtype",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productType),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          successInfo();
          form.reset();
        } else {
          errorInfo();
        }
      });
  };
  return (
    <div>
      <div
        style={
          theme
            ? {
                background: "linear-gradient(to right, #111827 ,#4b5563)",
                color: "white",
              }
            : {
                background: "linear-gradient(to right, #4ade80 ,#3b82f6)",
                color: "#4b5563",
              }
        }
        className="h-[95vh] lg:h-[100vh]"
      >
        <Navber></Navber>
        <h1 className="text-center font-bold text-4xl py-8 text-white">
          Add Your Product Type
        </h1>
        <div
          style={
            theme
              ? { backgroundColor: "#161828" }
              : { backgroundColor: "#eff6ff" }
          }
          className="w-[90%] lg:w-[600px] h-[620px] m-auto shadow-2xl rounded-lg"
        >
          <div className="m-auto w-[80%] mb-20">
            <form
              onSubmit={handleAddBrand}
              className="grid grid-cols-1 space-y-8"
            >
              <label className="font-bold text-xl mt-48" htmlFor="email">
                Product Type
              </label>
              <input
                className="py-2 px-4 text-black bg-gray-200 rounded-md font-semibold outline-none"
                type="text"
                name="productName"
                required
                placeholder="Enter your product type"
              />
              <input
                className="px-4 py-2 text-[18px] text-white rounded-3xl bg-gray-500 duration-300 hover:bg-green-400"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddType;
