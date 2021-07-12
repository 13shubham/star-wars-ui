import {Link} from 'react-router-dom'
import getPerson from "../services/personService";

const ShowCards = ({person, onClickPersonData, personClicked}) => {
 
  const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

const personApiData= async(p)=> {
    const {data} = await getPerson(p.id);
    onClickPersonData({...data, id: p.id})
}
  return (
      <div className="grid grid-cols-3 gap-4 mx-auto py-10 px-20">
        {person.map((person) => (
          <Link to = {`/about/people/${person.id}`}
            key={person.id}
            onClick = {()=> personClicked(personApiData(person))}
            //handlePerson = {onChangePerson}
            className="flex justify-between transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none bg-black border-indigo-600 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500 m-2"
          >
             <div className="w-full lg:w-1/3 lg:p-4">
            <img
              className="h-32 lg:h-full object-cover object-center w-32"
              src={`${imgURL + person.id}.jpg`}
              alt=""
            />
            </div>
            <div className="w-full lg:w-2/3 p-4">
                <div className="inline-grid">
                    <p className="work-sans font-semibold text-xl text-white">{person.name}</p>
                </div>
            </div>
          </Link>
        ))}
      </div>
  );
};

export default ShowCards;
