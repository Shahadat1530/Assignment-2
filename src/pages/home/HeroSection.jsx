import { Link } from "react-router";
import bgHero from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <>
      <div
        className="w-full h-200 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <div className="bg-gray-50/75 rounded-2xl p-4 space-y-2">
          <h3 className="text-3xl font-bold text-black">
            Explore and discover your favorite <br /> movies from around the
            world.
          </h3>
          <p className="text-xl font-normal text-black">
            The search is over! Let{" "}
            <span className="text-3xl font-semibold text-red-700">
              Movie<span className="text-red-400">Next</span>
            </span>{" "}
            <br />
            help you find the perfect movie to watch tonight for free.
          </p>
          <Link to={'/movies'}>
            <button className="py-2 px-4 bg-red-400 rounded-xl">
              Watch Free!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
