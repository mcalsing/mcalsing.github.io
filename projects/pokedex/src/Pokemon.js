import React from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { image, name, type, id, averageWeight: { value, measurementUnit } } = this.props.pokeElement;

    return (
      <section className = 'pokemon-card'>
        <p> {name} </p>
        <img className='pokemon-img' src={image} alt={name}/>
        <div>
          <span> {type} </span>
          <p> Avarage Weight: {value}{measurementUnit} </p>

          <Link to={`/pokemons/${id}`}>Detalhes</Link>

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

export default Pokemon; 