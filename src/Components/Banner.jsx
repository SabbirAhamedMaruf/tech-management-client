const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 h-[50vh] md:h-[60vh] lg:h-[87vh]  rounded-b-2xl">
      <div className="flex-1">
        <img
          className="rounded-lg lg:rounded-2xl w-[90%] md:w-[95%] lg:w-[800px] m-auto mt-4 md:mt-0 opacity-90 md:ml-14 lg:ml-24 "
          src="https://i.ibb.co/bK8mr9X/bg1.jpg"
        />
      </div>
      <div className="block md:hidden absolute top-20 rounded-lg w-[90%] h-[329px] bg-black opacity-40"></div>
      <div className="absolute top-32 md:static flex-1 text-center space-y-6 text-lime-200 md:text-white">
        <p className="font-semibold lg:text-xl">Welcome to our coffee shop</p>
        <h1 className="font-bold text-3xl lg:text-7xl m-auto w-[65%] lg:w-[700px]">
          Explore the beauty with a cup of tea
        </h1>
        <button className="px-3 py-2 lg:px-5 lg:py-3 border-2 border-lime-200 md:border-white font-bold rounded-3xl">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
