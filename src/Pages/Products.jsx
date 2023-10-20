import { useParams } from "react-router-dom";
import Navber from "../Components/Navber";
import { useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
const Products = () => {
  const { brandname } = useParams();
  const [currentBrandProducts, setCurrentBrandProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/brand/${brandname}`)
      .then((res) => res.json())
      .then((data) => setCurrentBrandProducts(data));
  }, [brandname]);

  return (
    <div>
      <div className="shadow-xl">
        <Navber></Navber>
      </div>
      <div className="w-[90%] m-auto">
        {/* Advertisement Carousel */}
        <div>
        
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {currentBrandProducts.map((i) => (
            <SingleProduct key={i._id} data={i}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
