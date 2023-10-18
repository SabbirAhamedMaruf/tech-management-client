import { useContext, useState } from "react";
import Navber from "../Components/Navber";
import { FiGithub } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [viewPassword, setViewPassword] = useState(false);
  const { loginWithEmail, loginWithGithub, loginWithGoogle } =
    useContext(AuthContext);

  // Sign in with email
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError(null);
    loginWithEmail(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Sign in with github
  const handleLoginWithGithub = (e) => {
    e.preventDefault();
    loginWithGithub()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Sign in with google
  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    loginWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <Navber></Navber>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-[95vh] lg:h-[91vh]">
        <h1 className="text-center font-bold text-4xl py-8 text-white">
          Welcome to Login
        </h1>
        <div className="w-[90%] lg:w-[600px] h-[620px] m-auto shadow-2xl rounded-lg bg-blue-50">
          <div className="m-auto w-[80%] text-gray-600">
            <form
              onSubmit={handleLoginWithEmail}
              className="grid grid-cols-1 space-y-2 "
            >
              <label className="font-bold text-xl mt-32" htmlFor="email">
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
                type={viewPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Enter your password"
              />
              <br />
              <input
                className="px-4 py-2 text-[18px] text-white rounded-3xl bg-gray-500 duration-300 hover:bg-blue-500"
                type="submit"
                value="Submit"
              />
            </form>
            {/* view password function */}
            <div className="absolute top-[426px] right-[68px] md:top-[424px] md:right-[115px] lg:top-[47vh] lg:right-[38vw] text-xl md:text-2xl text-gray-500">
              <button onClick={() => setViewPassword(!viewPassword)}>
                {viewPassword ? <PiEyeClosedBold /> : <PiEyeBold />}
              </button>
            </div>

            {/* Others sign in method */}
            <div className="flex justify-around gap-4 mt-4 w-[80%] m-auto">
              <button
                onClick={handleLoginWithGithub}
                className="px-[60px] lg:px-[105px] py-2 rounded-3xl text-white text-2xl bg-gray-500 duration-300 hover:bg-blue-500"
              >
                <FiGithub />
              </button>
              <button
                onClick={handleLoginWithGoogle}
                className="px-[60px] lg:px-[105px] py-2 rounded-3xl text-white text-2xl bg-gray-500 duration-300 hover:bg-blue-500"
              >
                <IoLogoGoogle />
              </button>
            </div>
            <p className="mt-4 text-[17px] font-semibold text-center">
              Not Registered?{" "}
              <Link to="/Register" className="font-bold text-blue-500">
                Click Here
              </Link>
            </p>
            <div className="mt-4 text-[17px] font-bold text-red-600 text-center">
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

