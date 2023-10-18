const Banner = () => {
  return (
    <div
      className="hero min-h-[40vh] md:min-h-[60vh] lg:min-h-[85vh] rounded-b-2xl lg:rounded-b-3xl"
      style={{
        backgroundImage: "url(https://i.ibb.co/n12svxY/bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-gradient-to-r from-green-800 to-blue-800 opacity-40   rounded-b-2xl lg:rounded-b-3xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <p className="mb-5 lg:text-2xl u font-semibold bg-gradient-to-r from-lime-300 to-cyan-300 text-transparent bg-clip-text uppercase">
            Welcome to Tech Heaven
          </p>
          <h1 className="mb-5 text-3xl lg:text-7xl up font-bold bg-gradient-to-r from-lime-300 to-cyan-300 text-transparent bg-clip-text">
            {"It's not that we use technology, We Live Technology"}
          </h1>
          <button className="px-2 py-1 lg:px-4 lg:py-2 border-2 border-lime-300 text-lime-300 font-semibold uppercase rounded-md hover:border-blue-300 hover:text-blue-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
