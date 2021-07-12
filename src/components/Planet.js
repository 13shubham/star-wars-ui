import React from 'react';

const Planet = ({person:Person}) => {
    
    return ( 
    <>
        <div className="w-full lg:w-1/3 lg:pt-2">
                <p className="text-4xl text-white font-bold text-center">Planet Details</p> </div>
            <div className="w-full lg:w-2/3 pt-2">
                <div className="inline-grid">
                <div className="flex justify-between px-4 text-gray-100 z-30 mb-4">
                <div className="flex flex-col items-start m-2">
                  <span className="font-thin">Planet</span>
                  <span className="tracking-widest text-xl">{Person.homeworld.title}</span>
                </div>
                <div className="flex flex-col items-start m-2">
                  <span className="font-thin">Terrain</span>
                  <span className="tracking-widest text-xl">{Person.homeworld.terrain}</span>
                </div>
                <div className="flex flex-col items-start m-2">
                  <span className="font-thin">Population</span>
                  <span className="tracking-widest text-xl">{Person.homeworld.population}</span>
                </div>
              </div>
            </div>
            </div>
    </>)
}
 
export default Planet;