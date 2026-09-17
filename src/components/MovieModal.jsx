import { X } from "lucide-react";

const MovieModal = ({ movie, isOpen, onClose }) => {
  if (!isOpen) return null;

  const { name, image, rating, premiered, summary, genres } = movie;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" color="red" />
        </button>

        <div className="w-full h-72 mb-4 rounded-xl overflow-hidden bg-gray-100 shadow-inner">
          <img
            src={image?.medium}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

        <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-gray-600">
          <span className="font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
            ★ {rating?.average || "N/A"}
          </span>
          <span>Premiered: {premiered ? premiered.split("-")[0] : "N/A"}</span>
          {genres && genres.length > 0 && (
            <>
              <span className="bg-gray-100 px-2.5 py-1 rounded-full text-gray-700">
                {genres.join(", ")}
              </span>
            </>
          )}
        </div>

        <div className="text-gray-600 text-sm leading-relaxed border-t pt-4">
          {summary ? (
            <div dangerouslySetInnerHTML={{ __html: summary }} />
          ) : (
            <p>No description available.</p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-red-400 rounded-xl cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
