import React, { Component } from 'react';
import TabNav from './components/TabNav'
import View from './containers/View'
import {withRouter } from "react-router";

class App extends Component {
  render(){
    const pathname = this.props.location.pathname;
    const main = (pathname === '/view') ? <View></View> : <TabNav routerChildren={this.props.children}></TabNav>
    return (
      <div id="App" className="App" key={this.props.location.key}>
        {main}
      </div>
    )
  }
}


export default withRouter(App);
