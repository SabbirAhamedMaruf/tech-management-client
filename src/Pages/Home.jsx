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
        <div className="mt-10 py-10 bg-gradient-to-r from-green-100 to-blue-100  rounded-t-3xl">
          <Marquee speed={150} className="text-3xl uppercase">
            <p className="mr-32 text-green-400">
              Incoming our biggest event on asus laptop product
            </p>
            <p className="mr-32 text-blue-500">
              {"Don't miss out on the biggest savings of the season!"}
            </p>
            <p className="mr-32 text-green-400">
              {"Discover incredible discounts at our sales extravaganza."}
            </p>
            <p className="mr-32 text-blue-500">
              {"One day, one chance, endless savings!"}
            </p>
            <p className="mr-32 text-green-400">
              {"Shop smart, save big, and enjoy our sales event."}
            </p>
            <p className="mr-32 text-blue-500">
              {"Get ready for a shopping spree like no other."}
            </p>
            <p className="mr-32 text-green-400">
              {"The time to upgrade is now! Join our sales event."}
            </p>
          </Marquee>
        </div>
        <div className="text-center font-bold mt-14 text-4xl m-auto w-[90%]">
          <h1>Propular Brands</h1>
          {/* Generating brands */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-16 mt-8">
            {homeScrrenBrands?.map((i) => (
              <Link to={`/brand/${i.name}`} key={i._id}>
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


// TODO Work on slider show and product advertisement and delete product and update product and dark mode