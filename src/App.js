import React, { Component } from 'react';
import Footer from './components/Footer'
import {withRouter } from "react-router";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      about: 'APP',
      pathName: '/'
    }
  }
  render(){
    return (
      <div id="App" className="App" key={this.props.location.key}>
        <Footer routerParmes={this.props}></Footer>
      </div>
    )
  }
}


export default withRouter(App);
