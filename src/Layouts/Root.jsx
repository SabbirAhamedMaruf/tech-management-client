import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-josefinSans text-gray-600">
            <Outlet/>
        </div>
    );
};

export default Root;