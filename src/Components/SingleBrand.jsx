import PropTypes from "prop-types";

const SingleBrand = ({ data }) => {
  return (
    <div
      key={data._id}
      className="m-auto card w-72 lg:w-52 bg-blue-50 shadow-2xl border-4 border-transparent duration-200 hover:border-blue-500"
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
