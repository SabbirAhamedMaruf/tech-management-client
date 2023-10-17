import { useState } from "react";
import Navber from "../Components/Navber";

const AddProduct = () => {
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

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const type = form.type.value;
    const featured = isFeatured;
    const price = currentPrice;
    const rating = currentRating;
    const description = form.description.value;

    //> all value is ok
    console.log("photo =", photo);
    console.log("name =", name);
    console.log("type =", type);
    console.log("featured =", featured);
    console.log("price =", price);
    console.log("rating =", rating);
    console.log("description =", description);
  };
  return (
    <div>
      <div className="bg-gradient-to-l from-green-400 to-blue-500">
        <Navber></Navber>
        <div className="bg-gradient-to-l from-green-400 to-blue-500 lg:h-[821px] lg:rounded-b-2xl pb-20">
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
                    Photo
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
                    Name
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
                    Type
                  </label>
                  <select
                    name="type"
                    required
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                  >
                    <option>Select Your Product Category</option>
                    <option value="phone">Phone</option>
                    <option value="earbuds">Earbuds</option>
                    <option value="headphone">Headphone</option>
                    <option value="smartwatch">Smart Watch</option>
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
    </div>
  );
};

export default AddProduct;
