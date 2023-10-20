import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyCartSingleProduct = ({ handleDeleteData,dataId,data }) => {
console.log(dataId);
  return (
    <div className="card w-96 bg-blue-50 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={data.photo} className="bg-white rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.brand}</p>
        <p>{data.type}</p>
        <p>{data.brand}</p>
        <p>{data.rating}</p>
        <div className="card-actions">
          <Link onClick={()=>handleDeleteData(dataId)} className="btn btn-error text-white font-bold">
            Delete Product
          </Link>
        </div>
      </div>
    </div>
  );
};

MyCartSingleProduct.propTypes = {
  data: PropTypes.object,
  dataId: PropTypes.string,
  handleDeleteData: PropTypes.func,
};

export default MyCartSingleProduct;
