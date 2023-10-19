import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <div>
        {/* Upcoming Sales */}
        <div>

        </div>
        <div>
          {/* Featured product */}
          <h1 className="text-center font-bold mt-14 text-4xl ">
            Featured Products
          </h1>
        </div>

        {/* <div className="card w-96 bg-gray-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/Nj9LxBg/tea1.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="font-bold text-xl shad">Breakfast Blend</h2>
            <p className="font-semibold">$35</p>
            <div className="card-actions">
              <button className="px-4 py-2 text-white rounded-3xl bg-gray-500">Buy Now</button>
            </div>
          </div>
        </div> */}

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
