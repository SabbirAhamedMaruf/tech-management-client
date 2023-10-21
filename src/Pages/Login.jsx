import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Navber from "../Components/Navber";
import { FiGithub } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const Login = () => {
  const { theme } = useContext(AuthContext);
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
      <div
        style={
          theme
            ? {
                background: "linear-gradient(to right, #111827 ,#4b5563)",
                color: "white",
              }
            : {
                background: "linear-gradient(to right, #4ade80 ,#3b82f6)",
                color: "#4b5563",
              }
        }
        className="lg:h-[100vh]"
      >
        <Navber></Navber>
        <h1 className="py-8 text-4xl font-bold text-center text-white">
          Welcome to Login
        </h1>
        <div
          style={
            theme
              ? { backgroundColor: "#161828" }
              : { backgroundColor: "#eff6ff" }
          }
          className="w-[90%] lg:w-[600px] h-[620px] m-auto shadow-2xl rounded-lg"
        >
          <div className="m-auto w-[80%]">
            <form
              onSubmit={handleLoginWithEmail}
              className="grid grid-cols-1 space-y-2 "
            >
              <label className="mt-32 text-xl font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="px-4 py-2 font-semibold text-black bg-gray-200 rounded-md outline-none"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
              <label className="text-xl font-bold" htmlFor="password">
                Password
              </label>
              <input
                className="px-4 py-2 font-semibold text-black bg-gray-200 rounded-md outline-none"
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
