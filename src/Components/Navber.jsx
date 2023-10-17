import { NavLink } from "react-router-dom";
import "../Index.css";

const Navber = () => {
  return (
    <div className="flex justify-between md:justify-end lg:justify-between items-center bg-blue-50 font-bold p-2">
      {/* Mobile Logo Section */}
      <div className="navbar-start block lg:hidden w-64 ">
        <div className="flex items-center">
          <img className="w-10" src="https://i.ibb.co/D44199J/Logo.png" />
          <h1 className="text-2xl pt-2">Tech Heaven</h1>
        </div>
      </div>

      {/* Desktop left menus section */}
      <div className="hidden md:block md:pl-5 lg:pl-0">
        <ul className="navberMenuleft menu menu-horizontal">
          <NavLink to="/" className="px-1 lg:px-5 uppercase text-[15px] lg:text-[16px]">
            Home
          </NavLink>
          <NavLink to="/shop" className="px-1 lg:px-5 uppercase text-[15px] lg:text-[16px]">
            Shop
          </NavLink>
          <NavLink to="/article" className="px-1 lg:px-5 uppercase text-[15px] lg:text-[16px]">
            Article
          </NavLink>
        </ul>
      </div>

      {/* Mobile menu button section */}
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="navberMenu menu  dropdown-content right-6 mt-2 z-[1] p-2 bg-blue-50 rounded-sm shadow-2xl w-32 text-center uppercase"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Pages">Pages</NavLink>
            <NavLink to="/Article">Article</NavLink>
            <NavLink to="/addproduct">Add Product</NavLink>
            <NavLink to="/mycart">My Cart</NavLink>
            <NavLink to="/Login">Login</NavLink>
          </ul>
        </div>

        {/* Desktop logo section */}
        <div className="hidden lg:block ">
          <div className="flex flex-col items-center">
            <img
              className="lg:w-8 pb-2"
              src="https://i.ibb.co/D44199J/Logo.png"
            />
            <h1 className="text-2xl">Tech Heaven</h1>
          </div>
        </div>
      </div>

      {/* Desktop Right menus section */}
      <div className="hidden md:block navberMenuright">
        <NavLink
          to="/addproduct"
          className="px-1 lg:px-5 uppercase text-[15px] lg:text-[16px]"
        >
          Add Product
        </NavLink>
        <NavLink to="/mycart" className="px-1 lg:px-5 uppercase text-[15px] lg:text-[16px]">
          My Cart
        </NavLink>
        <NavLink to="/Login" className="px-1 lg:px-5 uppercase text-[15px] lg:text-[16px]">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navber;
