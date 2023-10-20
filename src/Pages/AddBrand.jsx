import Navber from "../Components/Navber";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Index.css";

const AddBrand = () => {
  // Toast Message
  const successInfo = () => {
    toast.success("Brand added successfully!", {
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
    const name = form.brandname.value;
    const logo = form.brandlogo.value;
    const currentBrand = { name, logo };

    fetch("http://localhost:5000/addbrand", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentBrand),
    })
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
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-[100vh]">
        <Navber></Navber>
        <h1 className="text-center font-bold text-4xl py-8 text-white">
          Add Your Brand
        </h1>
        <div className="w-[90%] lg:w-[600px] h-[620px] m-auto shadow-2xl rounded-lg bg-blue-50">
          <div className="m-auto w-[80%] text-gray-600 mb-20">
            
            <form
              onSubmit={handleAddBrand}
              className="grid grid-cols-1 space-y-8"
            >
              <label className="font-bold text-xl mt-32" htmlFor="email">
                Brand Name
              </label>
              <input
                className="py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                type="text"
                name="brandname"
                required
                placeholder="Enter your name"
              />
              <label className="font-bold text-xl" htmlFor="email">
                Brand Logo
              </label>
              <input
                className="py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                type="text"
                name="brandlogo"
                required
                placeholder="Enter your photo url"
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

export default AddBrand;


//TODO add height using padding and fix responsive