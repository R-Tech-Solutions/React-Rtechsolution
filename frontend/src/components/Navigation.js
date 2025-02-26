import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bg-primary py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-center sm:space-x-8 mb-10">
          <Link to="/web-development" className="cursor-pointer text-lg font-medium rounded-full py-2 px-4 transition-all duration-300 text-white hover:bg-gray-700">
            Web Development
          </Link>
          <Link to="/app-development" className="cursor-pointer text-lg font-medium rounded-full py-2 px-4 transition-all duration-300 text-white hover:bg-gray-700">
            App Development
          </Link>
          <Link to="/pos-solution" className="cursor-pointer text-lg font-medium rounded-full py-2 px-4 transition-all duration-300 text-white hover:bg-gray-700">
            POS Solution
          </Link>
          <Link to="/network" className="cursor-pointer text-lg font-medium rounded-full py-2 px-4 transition-all duration-300 text-white hover:bg-gray-700">
            Network
          </Link>
          <Link to="/cctv" className="cursor-pointer text-lg font-medium rounded-full py-2 px-4 transition-all duration-300 text-white hover:bg-gray-700">
            CCTV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
