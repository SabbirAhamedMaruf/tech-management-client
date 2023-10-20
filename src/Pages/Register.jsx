import { useContext, useState } from "react";
import Navber from "../Components/Navber";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const Register = () => {
  const [error, setError] = useState(null);
  const [viewPassword, setViewPassword] = useState(false);
  const { registerWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  // Register with email
  const handleEmailRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    // Resetting error state
    setError(null);
    // Password validation system
    if (password.length < 6) {
      setError("Password should contain 6 character!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should contain at least one uppercase letter!");
      return;
    } else if (!/[$#&|@%*]/.test(password)) {
      setError("Password should contain at least one special letter [$#&|@%*]");
      return;
    } else {
      // executing email register operation
      registerWithEmail(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: `${name}`,
            photoURL: `${photo}`,
          });
          form.reset();
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-[95vh] lg:h-[100vh]">
        <Navber></Navber>
        <h1 className="text-center font-bold text-4xl py-8 text-white">
          Welcome to Register
        </h1>
        <div className="w-[90%] lg:w-[600px] h-[620px] m-auto shadow-2xl rounded-lg bg-blue-50">
          <div className="m-auto w-[80%] text-gray-600 mb-20">
            <form
              onSubmit={handleEmailRegister}
              className="grid grid-cols-1 space-y-2 "
            >
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
                type={viewPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Enter your password"
              />
              <br />
              <input
                className="px-4 py-2 text-[18px] text-white rounded-3xl bg-gray-500 duration-300 hover:bg-green-400"
                type="submit"
                value="Submit"
              />
            </form>
            {/* view password function */}
            <div className="absolute top-[546px] right-[68px] md:top-[543px] md:right-[115px] lg:top-[564px] lg:right-[730px] text-xl md:text-2xl text-gray-500">
              <button onClick={() => setViewPassword(!viewPassword)}>
                {viewPassword ? <PiEyeClosedBold /> : <PiEyeBold />}
              </button>
            </div>

            <p className="mt-4 text-[17px] font-semibold text-center">
              Already Registered?{" "}
              <Link to="/Login" className="font-bold text-green-500">
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

export default Register;
