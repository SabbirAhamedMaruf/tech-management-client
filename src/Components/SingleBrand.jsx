import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const SingleBrand = ({ data }) => {
  const { theme } = useContext(AuthContext);
  return (
    <div
      key={data._id}
      style={
        theme
          ? { backgroundColor: "#161828", color: "white" }
          : { backgroundColor: "#eff6ff", color: "#4b5563" }
      }
      className="m-auto card w-72 lg:w-52 shadow-2xl border-4 border-transparent duration-200 hover:border-blue-500"
    >
      <figure className="px-10 pt-10">
        <img src={data.logo} className="rounded-xl bg-white" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-xl">{data.name}</h2>
      </div>
    </div>
  );
};

SingleBrand.propTypes = {
  data: PropTypes.object,
};

export default SingleBrand;
