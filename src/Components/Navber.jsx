import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import "../Index.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { FaRegSun } from "react-icons/fa";
import { PiMoonBold } from "react-icons/pi";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { theme, setTheme } = useContext(AuthContext);
  // Sign Out User
  const handleSignOutUser = () => {
    signOutUser();
  };

  return (
    <div
      style={
        theme
          ? { backgroundColor: "#161828", color: "white" }
          : { backgroundColor: "#eff6ff", color: "#4b5563" }
      }
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 items-center font-bold p-2">
        {/* Mobile Logo Section */}
        <div className="navbar-start block lg:hidden w-64 ">
          <div className="flex items-center">
            <img
              className="w-10"
              src={
                theme
                  ? "https://i.ibb.co/sybN30K/Footer-Logo.png"
                  : "https://i.ibb.co/D44199J/Logo.png"
              }
            />{" "}
            <h1 className="text-2xl pt-2">Tech Heaven</h1>
          </div>
        </div>

        {/* Desktop left menus section */}
        <div className="hidden lg:block md:pl-5 lg:pl-0">
          <ul className="navberMenuleft menu menu-horizontal">
            <NavLink
              to="/"
              className="px-1 lg:px-5 uppercase text-[15px] lg:text-[16px]"
            >
              Home
            </NavLink>

            {user && (
              <div className="dropdown uppercase text-[15px] lg:text-[16px] flex justify-end">
                <label tabIndex={0}>dashboard</label>
                <ul
                  tabIndex={0}
                  style={
                    theme
                      ? { backgroundColor: "#161828" }
                      : { backgroundColor: "#eff6ff" }
                  }
                  className="navberMenu menu dropdown-content top-10 left-[2px] mt-3 z-[1] p-2 rounded-b-lg  w-52 uppercase text-[15px] space-y-5 shadow-md"
                >
                  <NavLink to="/addproduct">Add Product</NavLink>
                  <NavLink to="/addbrand">Add Brand</NavLink>
                  <NavLink to="/addtype">Add Product Type</NavLink>
                </ul>
              </div>
            )}

            {user && (
              <NavLink
                to={`/mycart`}
                className="px-1 lg:px-5 uppercase text-[15px] lg:text-[16px]"
              >
                My Cart
              </NavLink>
            )}
          </ul>
        </div>

        {/* Mobile menu button section */}
        <div>
          <div className="dropdown flex justify-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <RiMenu3Line className="text-xl" />
            </label>

            <ul
              tabIndex={0}
              style={
                theme
                  ? { backgroundColor: "#161828" }
                  : { backgroundColor: "#eff6ff" }
              }
              className="navberMenu menu dropdown-content top-10 right-4 mt-2 z-[1] p-2rounded-sm w-32 text-center uppercase space-y-3 rounded-b-xl px-2"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/addproduct">Add Product</NavLink>
              <NavLink to="/addbrand">Add Brand</NavLink>
              <NavLink to="/addtype">Add Product Type</NavLink>
              <NavLink to="/mycart">My Cart</NavLink>
              <NavLink to="/Login">Login</NavLink>
            </ul>
          </div>

          {/* Desktop logo section */}
          <div className="hidden lg:block justify-center">
            <div className="flex flex-col items-center">
              <img
                className="lg:w-8 pb-1"
                src={
                  theme
                    ? "https://i.ibb.co/sybN30K/Footer-Logo.png"
                    : "https://i.ibb.co/D44199J/Logo.png"
                }
              />
              <h1 className="text-2xl">Tech Heaven</h1>
            </div>
          </div>
        </div>

        {/* Desktop Right menus section */}
        <div className="hidden lg:block navberMenuright text-right">
          <div className="flex items-center justify-end gap-4 uppercase">
            {user && (
              <p className="hover:text-blue-500">
                {user.displayName ? user.displayName : "user"}
              </p>
            )}
            {user && (
              <button
                className="px-1 lg:px-4 uppercase text-[15px] lg:text-[16px] hover:text-blue-500"
                onClick={handleSignOutUser}
              >
                LOGOUT
              </button>
            )}
            {user && (
              <img
                className="w-10 inline rounded-full mr-2"
                src={user.photoURL}
              />
            )}
            {user && (
              <button onClick={() => setTheme(!theme)}>
                {theme ? (
                  <FaRegSun className="inline text-2xl mr-4" />
                ) : (
                  <PiMoonBold className="inline text-2xl mr-4" />
                )}
              </button>
            )}
          </div>
          {user ? (
            <p></p>
          ) : (
            <NavLink
              className="px-1 lg:px-5 uppercase text-[15px] lg:text-[16px]"
              to="/Login"
            >
              LOGIN
            </NavLink>
          )}

          {!user && (
            <button onClick={() => setTheme(!theme)}>
              {theme ? (
                <FaRegSun className="inline text-2xl mr-4 mb-2" />
              ) : (
                <PiMoonBold className="inline text-2xl mr-4 mb-2" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
