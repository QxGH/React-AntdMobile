import React, { Component } from 'react';
import List from '../components/List'

class Collect extends Component {
  render() {
    return (
      <div id="like-container" className="container">
        <List getType="collect"></List>
      </div>
    );
  }
}

export default Collect;
