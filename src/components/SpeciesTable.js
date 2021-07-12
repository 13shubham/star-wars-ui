import React from "react";

const SpeciesTable = ({ Persons }) => {
  return (
    <>
      <div className="pl-2 lg:flex bg-black rounded-lg border shadow-lg">
        <div className="w-full lg:w-2/3 pt-2">
          <div className="inline-grid">
            <div className="w-full lg:pt-2 pb-4">
              <p className="text-4xl text-white font-bold">Species Details</p>{" "}
            </div>
            {Persons.species.length < 1 ? (
              <div className="w-full lg:w-1/3 lg:pt-2">
                <p className="text-2xl text-white font-ligh-bold">
                  Not Available
                </p>{" "}
              </div>
            ) : (
              Persons.species.map((s) => (
                <div key ={s.name}  className="flex justify-between px-4 text-gray-100 z-30 mb-4">
                  <div className="flex flex-col items-start m-2">
                    <span className="tracking-widest text-xl">Title</span>
                    <span className="font-thin ">{s.name}</span>
                  </div>
                  <div className="flex flex-col items-start m-2">
                    <span className="tracking-widest text-xl">Producer</span>
                    <span className="font-thin">{s.average_lifespan}</span>
                  </div>
                  <div className="flex flex-col items-start m-2">
                    <span className="tracking-widest text-xl">
                      Release Date:
                    </span>
                    <span className="font-thin">{s.classification}</span>
                  </div>
                  <div className="flex flex-col items-start m-2">
                    <span className="tracking-widest text-xl">
                      Release Date:
                    </span>
                    <span className="font-thin">{s.language}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeciesTable;
