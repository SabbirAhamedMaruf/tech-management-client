import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import SingleBrand from "../Components/SingleBrand";
import SingleFeaturedProduct from "../Components/SingleFeaturedProduct";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [homeScrrenBrands, setHomeScreenBrands] = useState([]);
  const [featuedProduct, setFeaturedProduct] = useState([]);

  // Fetching brands from server
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setHomeScreenBrands(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/featured")
      .then((res) => res.json())
      .then((data) => setFeaturedProduct(data));
  }, []);

  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <div>
        {/* Upcoming Sales */}
        <div className="text-center font-bold mt-14 text-4xl m-auto w-[90%]">
          <h1>Propular Brands</h1>
          {/* Generating brands */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-16 mt-8">
            {homeScrrenBrands?.map((i) => (
              <Link to={`/${i.name}`} key={i._id}>
                <SingleBrand data={i}></SingleBrand>
              </Link>
            ))}
          </div>
        </div>

        <div className="m-auto w-[90%]">
          {/* Featured product */}
          <h1 className="text-center font-bold mt-14 text-4xl ">
            Featured Products
          </h1>
          {/* Generating featured Product */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mt-8">
            {featuedProduct?.map((i) => (
              <SingleFeaturedProduct
                key={i._id}
                data={i}
              ></SingleFeaturedProduct>
            ))}
          </div>
          {/* TODO add link clicked linked here */}
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
