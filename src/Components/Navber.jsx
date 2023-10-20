import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import "../Index.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // Sign Out User
  const handleSignOutUser = () => {
    signOutUser();
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 items-center bg-blue-50 font-bold p-2">
      {/* Mobile Logo Section */}
      <div className="navbar-start block lg:hidden w-64 ">
        <div className="flex items-center">
          <img className="w-10" src="https://i.ibb.co/D44199J/Logo.png" />
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
                className="navberMenu menu dropdown-content top-10 left-[2px] mt-3 z-[1] p-2 bg-blue-50 rounded-b-lg  w-52 uppercase text-[15px] space-y-5 shadow-md"
              >
                <NavLink to="/addproduct">Add Product</NavLink>
                <NavLink to="/addbrand">Add Brand</NavLink>
                <NavLink to="/addtype">Add Product Type</NavLink>
              </ul>
            </div>
          )}

          {user && (
            <NavLink
              to="/mycart"
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
            className="navberMenu menu dropdown-content top-10 right-6 mt-2 z-[1] p-2 bg-blue-50 rounded-sm  w-32 text-center uppercase space-y-3"
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
              src="https://i.ibb.co/D44199J/Logo.png"
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
              className="w-10 inline rounded-full mr-4"
              src={user.photoURL}
            />
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
      </div>
    </div>
  );
};

export default Navber;
