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
    });
  };

  return (
    <div className="px-5">
      <h1 className="font-dmsan font-normal text-[20px]">{result.Genre}</h1>
      
      <div className="flex flex-row overflow-x-auto my-5 gap-4">
        <div
          className="movie tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
        <div
          className="movie tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
        <div
          className="movie tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
        <div
          className="movie hidden lg:flex xl:flex tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
        <div
          className="movie hidden lg:flex xl:flex tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
       

      </div>
      <h1 className="font-dmsan font-normal text-[20px]">{result.Genre}</h1>
      
      <div className="flex flex-row overflow-x-auto my-5 gap-4">
        <div
          className="movie tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
        <div
          className="movie tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
        <div
          className="movie tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
        <div
          className="movie hidden lg:flex xl:flex tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
        <div
          className="movie hidden lg:flex xl:flex tablet:h-[300px] tablet:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[300px] xl:w-[300px] h-[200px] text-center w-[200px] font-extrabold aspect-square flex justify-center items-center bg-black text-white px-2 z-0 rounded-xl" 
        >
          {result.Title}
        </div>
       

      </div>
     
      
    </div>
  );
};

export default Movies;