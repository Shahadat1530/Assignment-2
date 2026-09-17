import {Search, X } from "lucide-react";
const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="relative flex items-center w-96 my-2">
      <Search className="absolute left-3 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={search}
        placeholder="Search anything..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none text-gray-700 placeholder-gray-400"
      />
      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" color="red" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
