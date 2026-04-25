import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-64 pl-10 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.nowPopularMovies} />
        <MovieList title={"Top rated"} movies={movies?.nowTopRatedMovies} />
        
      </div>
    </div>
  );
};

export default SecondaryContainer;
