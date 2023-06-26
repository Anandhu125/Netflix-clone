import React from 'react'
import NavBar from './components/NavBar/NavBar'
import "./App.css"
import {originals,Action, Horror,ComedyMovies,trending,RomanceMovies} from './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/Rowpost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals}title='Netfilx Orginals'/>
      <RowPost url={trending}title='Trending' isSmall/>
      <RowPost url={Action}title='Action' isSmall/>
      <RowPost url={Horror}title='Horror' isSmall/>
      <RowPost url={ComedyMovies}title='Comedy Movies' isSmall/>
      <RowPost url={RomanceMovies}title='Romance' isSmall/>
      
    </div>
  );
}

export default App;
