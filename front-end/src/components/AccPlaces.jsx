import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NewPlace from "./NewPlace";

const AccPlaces = () => {
  const { action } = useParams();

  return (
    <div className="w-full max-w-7xl">
      {action !== "new" ? (
        <Link
          to="/account/places/new"
          className="flex min-w-44 cursor-pointer justify-center gap-2 rounded-full bg-red-600 px-4 py-2 font-semibold text-white transition duration-100 hover:bg-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Adicionar novo lugar
        </Link>
      ) : (
        <NewPlace></NewPlace>
      )}
    </div>
  );
};

export default AccPlaces;
