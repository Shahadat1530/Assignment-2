import { Film } from "lucide-react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 py-1 sticky top-0 z-50 font-semibold backdrop-blur-sm">
      {/* logo/branding */}
      <div className="flex gap-1 items-center">
        <Film size={30} color="red" />
        <h4 className="text-3xl font-semibold text-red-700">
          Movie<span className="text-red-400">Next</span>
        </h4>
      </div>

      {/* links */}
      <div className="space-x-2">
        <Link to={"/"} className="py-2 px-4 bg-red-400 rounded-xl">Home</Link>
        <Link to={"/movies"} className="py-2 px-4 bg-red-400 rounded-xl">Movies</Link>
      </div>
    </div>
  );
};

export default NavBar;
