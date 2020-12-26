import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return <div>User homepage!</div>;
  }
}

export default requireAuth(Feature);
