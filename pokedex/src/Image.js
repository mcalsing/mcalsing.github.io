import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source}/>;
  }
}

export default Image;