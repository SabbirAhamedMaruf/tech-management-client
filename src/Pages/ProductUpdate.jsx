import { useEffect, useState } from "react";
import Navber from "../Components/Navber";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Index.css";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {
  // Toast Message
  const successInfo = () => {
    toast.success("Product updated successfully!", {
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
    toast.error("Connection interrupted. Please check your connection!", {
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

  const { productDetailId } = useParams();
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/update/${productDetailId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentProduct(data);
      });
  }, [productDetailId]);

  console.log("Inside State", currentProduct);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const type = form.type.value;
    const brand = form.brand.value;
    const featured = form.featured.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const warrenty = form.warrenty.value;
    const description = form.description.value;

    const productData = {
      photo,
      name,
      type,
      brand,
      featured,
      price,
      rating,
      warrenty,
      description,
    };

    fetch(`http://localhost:5000/addproduct/${productDetailId}`, {
      method: "PUT",
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
                onSubmit={handleUpdateProduct}
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
                    defaultValue={currentProduct[0]?.photo}
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
                    defaultValue={currentProduct[0]?.name}
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
                    name="brand"
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
                  <label className="font-bold text-xl" htmlFor="password">
                    Is Featured?
                  </label>
                  <select
                    name="featured"
                    required
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                  >
                    <option value="false">False</option>
                    <option value="true">True</option>
                  </select>
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
                    name="price"
                    required
                    placeholder="Enter your product price"
                    min={0}
                    defaultValue={currentProduct[0]?.price}
                  />

                  {/* Rating */}
                  <label className="font-bold text-xl" htmlFor="password">
                    Rating
                  </label>
                  <select
                    name="rating"
                    required
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  {/* Warrenty */}
                  <label className="font-bold text-xl" htmlFor="password">
                    Warrenty
                  </label>
                  <input
                    className="col-span-2 py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                    type="number"
                    name="warrenty"
                    required
                    placeholder="Enter your product warrenty in years"
                    min={0}
                    defaultValue={currentProduct[0]?.warrenty}
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
                    defaultValue={currentProduct[0]?.description}
                  ></textarea>
                </div>

                <input
                  className="px-4 py-2 text-[18px] text-white rounded-3xl bg-gray-500"
                  type="submit"
                  value="Update Product"
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

export default ProductUpdate;
