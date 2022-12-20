import { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const url = "https://www.omdbapi.com/?i=tt3896198&apikey=6bb5707b";
  const [result, setResult] = useState({});

  //Once Component is rendered!
  useEffect(() => {
    getMovies();
  }, []);

  // Get Movies Function!
  const getMovies = () => {
    axios({
      method: "GET",
      url: url,
    }).then((res) => {
      setResult(res.data);
      console.log(res.data);
    });
  };

  return (
    <div className="px-5">
      <h1 className="font-dmsan font-normal text-[20px]">{result.Genre}</h1>
      
      <div className="flex flex-row overflow-x-auto my-5 gap-4">
        <div
          className="movie h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-blend-darken  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-xl"
          style={{ backgroundImage: `url(${result.Poster || ""}` }}
        >
          {result.Title}
        </div>
        <div
          className="h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-blend-darken  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-xl"
          style={{ backgroundImage: `url(${result.Poster || ""})` }}
        >
          {result.Title}
        </div>
        <div
          className="h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-blend-darken  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-xl"
          style={{ backgroundImage: `url(${result.Poster || ""})` }}
        >
          {result.Title}
        </div>
      </div>
      {/* <!--
      <div className="font-dmsan font-normal text-[18px]">{result.Genre}</div>
      <div className="flex flex-row overflow-x-auto my-5 gap-4">
        <div
          className="h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-blend-darken  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-xl"
          style={{ backgroundImage: `url(${result.Poster})` }}
        >
          {result.Title}
        </div>
        <div
          className="h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-blend-darken  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-xl"
          style={{ backgroundImage: `url(${result.Poster})` }}
        >
          {result.Title}
        </div>
        <div
          className="h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-blend-darken  bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-xl"
          style={{ backgroundImage: `url(${result.Poster})` }}
        >
          {result.Title}
        </div>
      </div>
      */}
    </div>
  );
};

export default Movies;