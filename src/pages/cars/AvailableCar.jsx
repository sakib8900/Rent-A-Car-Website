import React from "react";
import { Link } from "react-router-dom";

const AvailableCar = ({ car, view }) => {
  const { car_image, model, brand, daily_price, location, post_date, _id } = car;

  return (
    <div
      className={`bg-gray-200 p-3 rounded shadow flex ${
        view === "list" ? "items-center space-x-5" : "flex-col"
      } min-h-[250px]`}
    >
      {/* Car Image */}
      <img
        src={car_image}
        alt={model}
        className={`rounded object-cover ${
          view === "list" ? "w-32 h-20" : "w-full h-40"
        }`}
      />

      {/* Car Details */}
      <div className="flex flex-col justify-between flex-1 text-left">
        <h2 className="text-lg font-bold">{model}</h2>
        <p className="text-sm text-gray-600">Brand: {brand}</p>
        <p className="text-sm text-gray-600">Price: ${daily_price}/day</p>
        <p className="text-sm text-gray-600">Location: {location}</p>
        <p className="text-sm text-gray-400">Added: {post_date}</p>
        <Link to={`/cars/${_id}`} className="mt-auto">
          <button className="mt-2 px-4 py-2 backdrop-blur-md text-red-500 text-lg font-semibold rounded-lg 
                                             shadow-lg hover:bg-red-500 hover:text-black border-2 border-red-500 
                                             transition-all duration-300 hover:shadow-red-500/50 
                                             active:scale-95 w-full">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AvailableCar;
