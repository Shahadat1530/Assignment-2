import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import bgHero from "../../assets/movies_hero.jpg";
import MovieCard from "../../components/MovieCard";
import SearchInput from "../../components/SearchInput";

const Movies = () => {
  const initialMovies = useLoaderData();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(initialMovies);
  // const filteredMovies = movies.filter((movie) =>
  //   movie?.name.toLowerCase().includes(search.toLowerCase()),
  // );

  useEffect(() => {
    if (!search.trim()) {
      setMovies(initialMovies);
      return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.map((item) => item.show);
        setMovies(filteredMovies);
      });
  }, [search, initialMovies]);

  return (
    <div className="mt-5">
      {/* top side */}
      <div
        className="w-full h-96 bg-cover bg-center bg-no-repeat py-4 px-6 flex items-center rounded-3xl"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <div>
          <h2 className="text-3xl font-bold text-red-300">Welcome!</h2>
          <p className="font-semibold">
            Explore our free movies and TV, plus discover what's trending across
            your <br /> favorite streaming services.
          </p>
        </div>
      </div>
      {/* search */}
      <SearchInput search={search} setSearch={setSearch} />
      {/* movies */}
      {movies?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-5 text-center text-3xl font-bold">
          No Movies Found!
        </div>
      )}
    </div>
  );
};

export default Movies;
