import React from "react";

const MoviesTable = ({ Persons }) => {
    
  return (
    <>
      <div className="pl-2 lg:flex bg-black rounded-lg border shadow-lg">
        <div className="w-full lg:w-2/3 pt-2">
          <div className="inline-grid">
            <div className="w-full lg:pt-2 pb-4">
              <p className="text-4xl text-white font-bold">Movie Details</p>{" "}
            </div>
            {Persons.films.map((movie) => (
              <div key ={movie.title} className="flex justify-between px-4 text-gray-100 z-30 mb-4">
                <div className="flex flex-col items-start m-2">
                  <span className="tracking-widest text-xl">Title</span>
                  <span className="font-thin ">{movie.title}</span>
                </div>
                <div className="flex flex-col items-start m-2">
                  <span className="tracking-widest text-xl">Producer</span>
                  <span className="font-thin">{movie.producer}</span>
                </div>
                <div className="flex flex-col items-start m-2">
                  <span className="tracking-widest text-xl">Release Date:</span>
                  <span className="font-thin">{movie.release_date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesTable;
