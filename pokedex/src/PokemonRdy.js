import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Pokemon extends Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.pokemon;

    return (
      <section className='pokemon-card'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Avarage weight: {value} {measurementUnit}</p>
        </div>
        <img className='pokemon-img' src={image} alt={name} />
      </section>
    );
  }
}

/* Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }),
}; */

export default Pokemon;