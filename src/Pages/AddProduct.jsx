import { useEffect, useState } from "react";
import Navber from "../Components/Navber";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Index.css";

const AddProduct = () => {
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

  // Fetching brands from server
  const [brandsData, setBrandsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
      .then((data) => setBrandsData(data));
  }, []);

  // Fetching Product type from server
  const [productTypeData, setProductTypeData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addtype")
      .then((res) => res.json())
      .then((data) => setProductTypeData(data));
  }, []);

  //  State for radio button => rating field
  const [currentRating, setCurrentRating] = useState(null);
  const handleRating = (e) => {
    setCurrentRating(e.target.value);
  };

  //   State for radio button => isFeatured field
  const [isFeatured, setIsFeatued] = useState(null);
  const handleIsFeatured = (e) => {
    setIsFeatued(e.target.value);
  };

  //   State for price field
  const [currentPrice, setCurrentPrice] = useState(0);
  const handleSetPrice = (e) => {
    setCurrentPrice(parseInt(e.target.value));
  };

  //   State for warrenty field
  const [warrentyPeriod, setWarrentyPeriod] = useState(0);
  const handleSetWarrenty = (e) => {
    setWarrentyPeriod(parseInt(e.target.value));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const type = form.type.value;
    const featured = isFeatured;
    const price = currentPrice;
    const rating = currentRating;
    const warrenty = warrentyPeriod;
    const description = form.description.value;

    const productData = {
      photo,
      name,
      type,
      featured,
      price,
      rating,
      warrenty,
      description,
    };

    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
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
      <div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 pb-20">
          <Navber></Navber>
          <h1 className="text-center font-bold text-4xl py-8 text-white">
            Welcome to Product Management
          </h1>

          <div className="w-[90%] p-4 lg:p-14 m-auto shadow-2xl rounded-lg bg-blue-50">
            <div className="m-auto w-[80%] text-gray-600 pb-8">
              <form
                onSubmit={handleAddProduct}
                className="grid lg:grid-cols-2 gap-8 pt-12"
              >
                {/* Left side */}
                <div className="grid lg:grid-cols-2 space-y-5">
                  {/* Photo */}
                  <label className="font-bold text-xl" htmlFor="email">
                    Product Image
                  </label>
                  <input
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                    type="text"
                    name="photo"
                    required
                    placeholder="Enter your photo url"
                  />

                  {/* Name */}
                  <label className="font-bold text-xl" htmlFor="password">
                    Product Name
                  </label>
                  <input
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your product name"
                  />

                  {/* Type */}
                  <label className="font-bold text-xl" htmlFor="password">
                    Product Type
                  </label>
                  <select
                    name="type"
                    required
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                  >
                    {productTypeData.map((i) => (
                      <option key={i._id} value={i.name}>
                        {i.name}
                      </option>
                    ))}
                  </select>

                  {/* Brand */}
                  <label className="font-bold text-xl" htmlFor="password">
                    Brand
                  </label>
                  <select
                    name="type"
                    required
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                  >
                    {brandsData.map((i) => (
                      <option key={i._id} value={i.name}>
                        {i.name}
                      </option>
                    ))}
                  </select>

                  {/* Is Featured */}
                  <div>
                    <label className="font-bold text-xl" htmlFor="password">
                      Is Featured?
                    </label>
                    <br />
                    <br />
                    <div className="space-x-5">
                      <input
                        type="radio"
                        name="featured"
                        value={true}
                        checked={isFeatured === "true"}
                        onChange={handleIsFeatured}
                      />
                      True
                      <input
                        className="ml-6"
                        type="radio"
                        name="featured"
                        value={false}
                        checked={isFeatured === "false"}
                        onChange={handleIsFeatured}
                      />
                      False
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="grid lg:grid-cols-2 space-y-5">
                  {/* Price */}
                  <label className="font-bold text-xl" htmlFor="password">
                    Price
                  </label>
                  <input
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                    type="number"
                    name="Price"
                    required
                    placeholder="Enter your product price"
                    min={0}
                    value={currentPrice}
                    onChange={handleSetPrice}
                  />
                  {/* Rating */}
                  <div>
                    <label className="font-bold text-xl" htmlFor="password">
                      Rating
                    </label>{" "}
                    <br />
                    <br />
                    <div className="space-x-5">
                      <input
                        type="radio"
                        name="rating"
                        value={1}
                        checked={currentRating === "1"}
                        onChange={handleRating}
                      />{" "}
                      1
                      <input
                        type="radio"
                        name="rating"
                        value={2}
                        checked={currentRating === "2"}
                        onChange={handleRating}
                      />{" "}
                      2
                      <input
                        type="radio"
                        name="rating"
                        value={3}
                        checked={currentRating === "3"}
                        onChange={handleRating}
                      />{" "}
                      3
                      <input
                        type="radio"
                        name="rating"
                        value={4}
                        checked={currentRating === "4"}
                        onChange={handleRating}
                      />{" "}
                      4
                      <input
                        type="radio"
                        name="rating"
                        value={5}
                        checked={currentRating === "5"}
                        onChange={handleRating}
                      />{" "}
                      5
                    </div>
                    <br />
                  </div>{" "}
                  <br />
                  {/* Warrenty */}
                  <label className="font-bold text-xl" htmlFor="password">
                    Warrenty
                  </label>
                  <input
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                    type="number"
                    name="warrenty"
                    required
                    placeholder="Enter your product price"
                    min={0}
                    value={warrentyPeriod}
                    onChange={handleSetWarrenty}
                  />
                  {/* Short Descriptions */}
                  <label className="font-bold text-xl" htmlFor="password">
                    Description
                  </label>
                  <textarea
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Enter your product description"
                  ></textarea>
                </div>

                <input
                  className="px-4 py-2 text-[18px] text-white rounded-3xl bg-gray-500"
                  type="submit"
                  value="Add Product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
