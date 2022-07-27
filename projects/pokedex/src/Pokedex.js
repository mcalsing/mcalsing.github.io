import React from 'react';
import pokeData from './data'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {pokePosition: 0}
  } 
 
  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      pokePosition: estadoAnterior.pokePosition +1,
    }))
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render () {

    // PokemonElementes eh array de elementos html
    const pokeHTMLElements = pokeData.map((pokemon) => <Pokemon key={pokemon.id} pokeElement={pokemon} />)
    const waterType = pokeData.filter(pokemon => pokemon.type.includes('Water')).map((pokemon) => <Pokemon key={pokemon.id} pokeElement={pokemon} />)
    const iceType = pokeData.filter(pokemon => pokemon.type.includes('Ice')).map((pokemon) => <Pokemon key={pokemon.id} pokeElement={pokemon} />)

    

    return (
      <main>
        <h1>Pokedex</h1>
        <div className='pokedex'>
          {pokeHTMLElements[this.state.pokePosition]}
          {waterType[this.state.pokePosition]}
          {iceType[this.state.pokePosition]}
        </div>
        <button className="btn-next" onClick={this.handleClick}>Proximo</button>
        <button className="btn-next" onClick={this.changeFire}>Fire</button>
        <button className="btn-next" onClick={this.changePsychic}>Psychic</button>
      </main>
    )
  }
}

export default Pokedex;
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