import React, { Component } from 'react';
import List from '../components/List'

class Hot extends Component {
  render() {
    return (
      <div id="like-container" className="container">
        <List getType="collect"></List>
      </div>
    );
  }
}

export default Hot;
