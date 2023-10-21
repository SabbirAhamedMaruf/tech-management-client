import { Link, useRouteError } from "react-router-dom";
import { TbHome2 } from "react-icons/tb";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-gradient-to-r from-amber-400 to-red-500">
      <div className="w-[90%] m-auto h-[100vh]">
        <div className="w-[90%]  text-center absolute  rounded-3xl mt-32 h-[80vh] py-8">
          <h1 className="font-kalam font-bold text-3xl text-white md:text-4xl lg:text-6xl mt-8">
            Where should i go?
          </h1>
          <img
            className="w-[95%] md:w-[60%] lg:w-[25%] m-auto"
            src="https://i.ibb.co/ykYY2Kn/Error.png"
          />
          <div className="font-[500] text-xl text-white md:text-2xl py-8">
            {error.code === undefined ? (
              <p>An unknown error occured</p>
            ) : (
              <div>
                <h4>{`Error Code : ${error.status}`}</h4>
                <h4>{`Error Message : ${error.data}`}</h4>
              </div>
            )}
          </div>
          <Link>
            <button className="flex justify-center m-auto w-24 lg:w-32 p-3 rounded-xl bg-blue-500 hover:bg-green-300">
              <TbHome2 className="inline text-3xl  text-white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
