import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      about: 'APP'
    }
  }
  render(){
    return (
      <div id="App" className="App">
        {this.props.children}
      </div>
    )
  }
}

export default App;
