// arquivo Pokedex.js
import React from 'react';
// import Image from './Image'

// import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    const { image, name, type, averageWeight: { value, measurementUnit } } = this.props.pokeElement;

    return (
      <section className = 'pokemon-card'>
          <p> {name} </p>
        <img className='pokemon-img' src={image} alt={name}/>
        <div>
          {/* <Image source={image}/> */}
          <p> {type} </p>
          <p> Avarage Weight: {value}{measurementUnit} </p>
        </div>
      </section>
    );
  }
  /* Pokedex.propTypes = {
    user: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  } */
}

export default Pokedex; 