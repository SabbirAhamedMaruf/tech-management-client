import Navber from "../Components/Navber";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="bg-gradient-to-l from-green-400 to-blue-500 h-[95vh] lg:h-[87vh]">
        <h1 className="text-center font-bold text-4xl py-8 text-white">
          Welcome to Register
        </h1>
        <div className="w-[90%] lg:w-[600px] h-[620px] m-auto shadow-2xl rounded-lg bg-blue-50">
          <div className="m-auto w-[80%] text-gray-600 mb-20">
            <form className="grid grid-cols-1 space-y-2 ">
              <label className="font-bold text-xl mt-20" htmlFor="email">
                Name
              </label>
              <input
                className="py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
              <label className="font-bold text-xl" htmlFor="email">
                Photo
              </label>
              <input
                className="py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                type="text"
                name="photo"
                required
                placeholder="Enter your photo url"
              />
              <label className="font-bold text-xl" htmlFor="email">
                Email
              </label>
              <input
                className="py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
              <label className="font-bold text-xl" htmlFor="password">
                Password
              </label>
              <input
                className="py-2 px-4 bg-gray-200 rounded-md font-semibold outline-none"
                type="password"
                name="password"
                required
                placeholder="Enter your password"
              />
              <br />
              <input
                className="px-4 py-2 text-[18px] text-white rounded-3xl bg-gray-500"
                type="submit"
                value="Submit"
              />
            </form>
            <p className="mt-4 text-[17px] font-semibold text-center">
              Already Registered?{" "}
              <Link to="/Login" className="font-bold text-blue-600">Click Here</Link>
            </p>
            <div className="mt-4 text-[17px] font-bold text-center">
              <p>Error message goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
