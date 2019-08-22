import React, { Component } from 'react';
import Footer from './components/Footer'
import View from './containers/View'
import {withRouter } from "react-router";


class App extends Component {
  render(){
    const pathname = this.props.location.pathname;
    const main = (pathname === '/view') ? <View></View> : <Footer routerParmes={this.props}></Footer>
    return (
      <div id="App" className="App" key={this.props.location.key}>
        {main}
      </div>
    )
  }
}


export default withRouter(App);
