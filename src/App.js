import './App.css';
import React, {useState, useEffect, useMemo} from 'react';
import getPersonMockData from './services/mockPersonDataService'
import ShowCards from './components/ShowCards';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import About
 from './components/About';

function App() {
  const [person, setPerson] = useState(getPersonMockData());
  const [personData, setPersonData] = useState('');
  const [text, setText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  const handlePerson = ()=>{
    setPerson(person)
  }
  const onClickPersonData = (childData) =>{
    setPersonData(childData)
  }
  useEffect(()=>{
    setPersonData(personData)
  },[personData])
  useMemo(() => {
    if (!text) {
      setFilteredData(person);
      return;
    }
    setFilteredData(() =>
    person?.filter((p) => p.name.toLowerCase().includes(text.toLowerCase()))
    );
  }, [person, text]);
  return (
    <Router>
    <div className="min-h-screen bg-gradient-to-br from-black">
      <div className='p-8'>
        <div className='flex flex-col items-center'>
          <Link to='/'>
            <header className='text-4xl text-yellow-400 font-bold text-center' >
            StarWar Picker
            </header>
          </Link>
          </div>
    </div>
      <Switch>
      <Route path='/about/people/:slug'>
      <About 
      personData= {personData}/>
      </Route>
      <Route path="/">
      <div className="w-full flex justify-center">
          <input
            onChange={($event) => setText($event.target.value)}
            placeholder="Search your star here"
            type="text"
            className="mt-1 p-2 border-blue-500 border-2"
          />
        </div>
      <ShowCards
      personData= {personData}
      onClickPersonData = {onClickPersonData}
      person ={filteredData}
      personClicked = {handlePerson} />
          </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
