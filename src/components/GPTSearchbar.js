import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
import groq from "../utils/ai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/GPTSlice";

const GPTSearchbar = () => {
  const dispatch = useDispatch(); 
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    const query =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result. Example: Sholay, Don, Gadar, Golmaal, Koi Mil Gaya";

    const groqResults = await groq.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "llama-3.1-8b-instant",
    });

    const movieResult = groqResults.choices?.[0]?.message?.content;
    console.log(movieResult);

    //const GPTMovies = movieResult.choices?.[0]?.message?.content.split(",");

    const GPTMovies = movieResult.split(",").map(movie => movie.trim());
    console.log(GPTMovies);

    //For each movie I need to search TMDB api
    const promiseArray = GPTMovies.map(movie => searchMovieTMDB(movie))
    //[Promise,Promise,Promise,Promise,Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGPTMovieResult({movieNames: GPTMovies, movieResults: tmdbResults}));


  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-3 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchbar;
