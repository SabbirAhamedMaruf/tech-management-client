import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Components/Navber";
import { useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Products = () => {
  const { brandname } = useParams();
  const [currentBrandProducts, setCurrentBrandProducts] = useState([]);
  const adsdata = useLoaderData();
  const brandAds = adsdata.filter((i) => i.brand == brandname);

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
        <div className="w-[98%] m-auto mt-8 h-[80%] rounded-3xl">
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            {brandAds.map((i, idx) => (
              <div key={idx}>
                <img className="lg:h-[830px] rounded-3xl" src={i.photo} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="mb-20">
          {currentBrandProducts.length !== 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {currentBrandProducts.map((i) => (
                <SingleProduct key={i._id} data={i}></SingleProduct>
              ))}
            </div>
          ) : (
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center mt-80 font-semibold text-red-500">
              Product Unavailable
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
