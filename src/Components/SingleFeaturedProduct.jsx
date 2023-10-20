import PropTypes from "prop-types";

const SingleFeaturedProduct = ({data}) => {
  return (
    <div
      key={data._id}
      className="m-auto card w-72 h-96 bg-blue-50 shadow-2xl border-4 border-transparent duration-200 hover:border-blue-500"
    >
      <figure className="px-10 pt-10">
        <img src={data.photo} className="rounded-xl bg-white p-2" />
      </figure>
      <div className="card-body items-center text-center">
        <h3 className="font-semibold">{data.brand}</h3>
        <h2 className="font-bold text-xl">{data.name}</h2>
      </div>
    </div>
  );
};

SingleFeaturedProduct.propTypes = {
    data: PropTypes.object,
  };

export default SingleFeaturedProduct;
