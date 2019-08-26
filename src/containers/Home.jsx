import React, { Component } from 'react';
import List from '../components/List'

class Home extends Component {
  render() {
    return (
      <div id="home-container" className="container">
        <List getType="all"></List>
      </div>
    );
  }
}

export default Home;
