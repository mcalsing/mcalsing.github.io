import './App.css';
import Pokedex from './Pokedex';
import React from 'react';
import { Route } from 'react-router-dom'
import PokemonDetails from './PokemonDetails'
import pokeData from './data'

function App() {
  return (
    <div className="App">

      <Route path="/" render={() => <Pokedex />} />

      <Route path="/pokeData/:id" componet={PokemonDetails} />

      {/* <Route path="/" componet={Pokedex} /> */}
      {/* <Pokedex /> */}
    </div>
  );
}

export default App;