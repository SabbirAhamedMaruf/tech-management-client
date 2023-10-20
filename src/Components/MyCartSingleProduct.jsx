import PropTypes from "prop-types";


const MyCartSingleProduct = ({handleDeleteProduct,dataId,data }) => {
   
  return (
    <div className="card w-96 bg-blue-50 shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={data.photo}
          className="bg-white rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.brand}</p>
        <p>{data.type}</p>
        <p>{data.brand}</p>
        <p>{data.rating}</p>
        <div className="card-actions">
          <button onClick={()=>handleDeleteProduct(dataId)} className="btn btn-error text-white font-bold">Delete Product</button>
        </div>
      </div>
    </div>
  );
};

MyCartSingleProduct.propTypes = {
  data: PropTypes.object,
  dataId: PropTypes.string,
  handleDeleteProduct : PropTypes.func
};

export default MyCartSingleProduct;


