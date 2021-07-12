import Planet from "./Planet";
import MoviesTable from "./MovieTable";
import { useState, useEffect } from "react";
import SpeciesTable from "./SpeciesTable";

const About = ({ personData }) => {
  const [personDetails, setPersonDetails] = useState("");
  const imgURL = "https://starwars-visualguide.com/assets/img/characters/";
  const { Person } = personDetails;

  useEffect(() => {
    setPersonDetails(personData);
    localStorage.setItem("personData", personData);
  }, [personData]);
  return (
    <>
      {!Person ? (
        ""
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
          <div className="justify-center lg:flex bg-black rounded-lg border shadow-lg ">
            <div className="w-2/3 h-2/3 lg:w-2/3 lg:p-4">
              <img
                src={`${imgURL + personData.id}.jpg`}
                alt="image"
                className="h-64 lg:h-full w-4/5 p-10"
              />
            </div>
            <div className="w- lg:w-2/3 p-4">
              <div className="inline-grid">
                <div className="flex justify-between px-4 text-gray-100 z-30 mb-4">
                  <div className="flex flex-col items-start m-4">
                    <span className="font-thin">NAME</span>
                    <span className="tracking-widest text-xl">
                      {Person.name}
                    </span>
                    <span className="font-thin">Birth Year</span>
                    <span className="tracking-widest text-xl">
                      {Person.birth_year}
                    </span>
                    <span className="font-thin">Hair Color</span>
                    <span className="tracking-widest text-xl">
                      {Person.hair_color}
                    </span>
                    <span className="font-thin">Skin Color</span>
                    <span className="tracking-widest text-xl">
                      {Person.skin_color}
                    </span>
                  </div>
                  <div className="flex flex-col items-start m-4">
                    <span className="font-thin">Gender</span>
                    <span className="tracking-widest text-xl">
                      {Person.gender}
                    </span>
                    <span className="font-thin">Height</span>
                    <span className="tracking-widest text-xl">
                      {Person.height}
                    </span>
                  </div>
                </div>
              </div>
              <Planet person={Person} />
            </div>
          </div>
          <div className="lg:flex bg-black rounded-lg border shadow-lg">
            <MoviesTable Persons={Person} />
            <SpeciesTable Persons={Person} />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
