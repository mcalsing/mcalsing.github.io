import React from 'react';
import pokeData from './data'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      pokePosition: 0,
      filter: '',
    }
  } 
 
  handleClick = (event) => {
    this.setState((estadoAnterior, _props) => ({
      pokePosition: estadoAnterior.pokePosition +1,

    }))
  }
  
  filterType = (type) => {
    this.setState({
      filter: type, 
    })
  }

  render () {

    const { pokePosition, filter } = this.state;
    // PokemonElementes eh array de elementos html
    // const pokeHTMLElements = pokeData.map((pokemon) => <Pokemon key={pokemon.id} pokeElement={pokemon} />)
    const filteredType = pokeData.filter(pokemon => pokemon.type.includes(filter))
      .map((pokemon) => <Pokemon key={pokemon.id} pokeElement={pokemon} />)

    return (
      <main className="main-class">
        <h1>Pokedex</h1>
        <button onClick={ () => this.filterType('')}>All</button>
        <button onClick={ () => this.filterType('Water')}>Water</button>
        <button onClick={ () => this.filterType('Ice')}>Ice</button>
        <div className='pokedex'>
          {filteredType[pokePosition]}        
        </div>
        <button className="btn-next" onClick={this.handleClick}>Proximo</button> 
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