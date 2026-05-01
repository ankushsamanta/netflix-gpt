import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchbar from "./GPTSearchbar";
import { backgroundIMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="w-full" src={backgroundIMG} alt="background" />
      </div>
      <GPTSearchbar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
