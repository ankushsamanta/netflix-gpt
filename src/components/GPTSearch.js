import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchbar from "./GPTSearchbar";
import { backgroundIMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed  -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={backgroundIMG}
          alt="background"
        />
      </div>
      <div className="">
        <GPTSearchbar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
