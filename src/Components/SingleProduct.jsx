import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleProduct = ({ data }) => {
  return (
    <div key={data._id} className="m-auto card lg:w-96  bg-blue-50 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={data.photo} className="rounded-xl bg-white" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-xl">{data.name}</h2>
        <h3 className="font-semibold">
          <span className="font-bold">Brand</span> {data.brand}
        </h3>
        <h3 className="font-semibold">
          <span className="font-bold">Type</span> {data.type}
        </h3>
        <h3 className="font-semibold">
          <span className="font-bold">Price</span> {data.price}
        </h3>
        <h3 className="font-semibold">
          <span className="font-bold">Warrenty</span> {data.warrenty}
        </h3>
        <h3 className="font-semibold">
          <span className="font-bold">Rating</span> {data.rating}
        </h3>
        <div className="flex gap-4 text-white uppercase">
          <Link
            to={`./${data._id}`}
            className="px-8 py-2 bg-gray-500 rounded-3xl duration-300 hover:bg-green-400"
          >
            Details
          </Link>
          <Link
            to={`/brand/update/${data._id}`}
            className="px-8 py-2 bg-gray-500 rounded-3xl duration-300 hover:bg-blue-500"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  data: PropTypes.object,
};

export default SingleProduct;

// TODO work on rating star
