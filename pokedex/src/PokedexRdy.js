import pokemons from './data'
import Pokemon from './Pokemon';
import React, { Component } from 'react';

class Pokedex extends Component {
  render() {

    const pokemonHTMLElements = pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)

    return <div>
      <h1>Pokedex</h1>
        <div className="pokedex">
          {pokemonHTMLElements}
        </div>
      </div>;
  };
}

export default Pokedex