import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg w-[18vw] hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Image on top */}
      <Link to={`/details/${item.imdbID}`}>
        <img
          src={item.Poster}
          alt={item.Title}
          className="w-full h-80 mt-5 object-cover rounded-lg"
        />
      </Link>

      {/* Text at bottom */}
      <div className="flex items-center justify-center bg-gray-800 px-2 py-1 rounded-lg mt-3">
        <p className="text-white text-center font-medium truncate">
          {item.Title}
        </p>
      </div>

      <Link to={`/details/${item.imdbID}`}>
        <button className="py-2 px-5 bg-orange-600 mt-2 text-white cursor-pointer text-md hover:bg-sky-500 transition-all duration-300 ease-in-out">
          More Details
        </button>
      </Link>
    </div>
  );
}

export default Cards;
