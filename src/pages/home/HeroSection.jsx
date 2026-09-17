import bgHero from "../../assets/hero.jpg";

const HeroSection = () => {
  return (
    <>
      <div
        className="w-full h-200 bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <div className="bg-gray-50/75 rounded-2xl p-4">
          <h3 className="text-3xl font-bold text-black">
            Explore and discover your favorite movies from around the world.
          </h3>
          <p className="text-xl font-light text-black">The search is over! Let <span className="text-3xl font-semibold text-red-700">
          Movie<span className="text-red-400">Next</span></span> help you find the perfect movie to watch tonight for free.</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
