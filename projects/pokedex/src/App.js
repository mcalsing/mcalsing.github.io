import React from 'react';
import Pokedex from './Pokedex';
import pokeData from './data'
import './App.css';

class App extends React.Component {
  render () {

    const pokemonElements = pokeData.map((pokemon) => <Pokedex key={pokemon.id} pokeElement={pokemon} />)

    return (
      <main>
        <h1>Pokedex</h1>
        <div className='pokedex'>
          {pokemonElements}
        </div>
      </main>
    )
  }
}

export default App;
// <Pokedex pokemon={pokemons.name} type={pokemons.type} weight={pokemons.averageWeight}/>
// <Pokedex pokemon={pokemons} />
// <Pokedex namePoke={pokeData[0].name} typePoke={pokeData[0].type} imagePoke={pokeData[0].image} />


/* pokeData.map(pokemon => (
  <div className='pokedex'>
    <Pokedex namePoke={pokemon.name} 
             typePoke={pokemon.type} 
             imagePoke={pokemon.image}
             weightPoke={pokemon.averageWeight}
    />
  </div> */