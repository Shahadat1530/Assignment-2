import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieCard = ({ movie }) => {
  const { name, image, rating, premiered } = movie;
  //   modal open and closing state
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-96 border rounded-xl p-2">
        <img
          src={image?.medium}
          alt={`Image of ${name}`}
          className="w-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold">{name}</h3>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              Premiered: {premiered ? premiered.split("-")[0] : "N/A"}
            </span>
            <span className="flex items-center gap-1 font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              ★ {rating?.average || "N/A"}
            </span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="py-2 px-4 bg-red-400 rounded-xl cursor-pointer"
          >
            See Details
          </button>
        </div>
      </div>
      <MovieModal movie={movie} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default MovieCard;
