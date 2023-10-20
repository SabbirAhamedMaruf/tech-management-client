import { useContext, useEffect, useState } from "react";
import Navber from "../Components/Navber";
import { AuthContext } from "../Context/AuthProvider";
import MyCartSingleProduct from "../Components/MyCartSingleProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Index.css";

const MyCart = () => {
  // Toast Message
  const successInfo = () => {
    toast.success("Product Deleted successfully!", {
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


  const { user } = useContext(AuthContext);
  const [userCart, setUserCart] = useState([]);

  const handleDeleteData =(productId)=>{
    fetch(`http://localhost:5000/mycart/${productId}`,{
        method: "DELETE"
    })
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          successInfo();
          const remainigProduct = userCart.filter((i) => i._id != productId);
          setUserCart(remainigProduct);
        }
        else{
          errorInfo();
        }
    });
  }

  useEffect(() => {
    const currentUser = { email: user.email };
    fetch("http://localhost:5000/mycart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => setUserCart(data));
  }, [user.email]);

  console.log(userCart);
  return (
    <div>
      <div className="shadow-xl">
        <Navber></Navber>
      </div>
      <div className="w-[90%] m-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {userCart.map((i) => (
            <MyCartSingleProduct
              key={i._id}
              handleDeleteData={handleDeleteData}
              dataId={i._id}
              data={i.product[0]}
            ></MyCartSingleProduct>
          ))}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default MyCart;
