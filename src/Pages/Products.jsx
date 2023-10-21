import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Components/Navber";
import { useContext, useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AuthContext } from "../Context/AuthProvider";

const Products = () => {
  const { brandname } = useParams();
  const { setLoading } = useContext(AuthContext);
  const [currentBrandProducts, setCurrentBrandProducts] = useState([]);
  const adsdata = useLoaderData();
  const brandAds = adsdata.filter((i) => i.brand == brandname);
  const { theme } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://server-7ih8iop1k-sabbir-ahamed-marufs-projects.vercel.app/brand/${brandname}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentBrandProducts(data);
        setLoading(false);
      })
      .catch(setLoading(true));
  }, [setLoading, brandname]);
  return (
    <div
      className="pb-10"
      style={
        theme ? { backgroundColor: "#000000" } : { backgroundColor: "#eff6ff" }
      }
    >
      <div className="shadow-xl">
        <Navber></Navber>
      </div>
      <div className="w-[90%] m-auto">
        {/* Advertisement Carousel */}
        <div className="w-[98%] m-auto mt-8 h-[80%] rounded-3xl">
          <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
            {brandAds.map((i, idx) => (
              <div key={idx}>
                <img className="lg:h-[830px] rounded-3xl" src={i.photo} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="pb-20">
          {currentBrandProducts.length !== 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {currentBrandProducts.map((i) => (
                <SingleProduct key={i._id} data={i}></SingleProduct>
              ))}
            </div>
          ) : (
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center mt-80 font-semibold text-red-500 mb-96">
              Product Unavailable
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
