import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import store from '../store/index';


class Redux extends Component {
  constructor(props){
    super(props);
    // this.state = store.getState();  //获取store里的所有关于state的数据
    //监听store里面的变化，只要一变化
    //只要store里面的数据发生改变，则立即执行subscribe函数里的函数
    store.subscribe(this.handleStoreChange);
    this.state = {
      store: store.getState()
    };
  }
  render() {
    return (
      <div className="redux">
        <h1>redux</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.sub}>sub</button>
        <button onClick={this.set}>set</button>
        <div>{this.state.store.number}</div>
      </div>
    );
  }
  //reducer返回newState之后，store传递newState给组件
  handleStoreChange = () => {
    this.setState({
      store: store.getState()
    });
    // 感知store发生变化之后，从store里获取最新的数据，然后进行设置
  }
  add(){
    store.dispatch({
      type: 'add_number'
    })
  }
  sub(){
    store.dispatch({
      type: 'sub_number'
    })
  }
  set(){
    store.dispatch({
      type: 'set_number',
      number: 300
    })
  }
}

export default withRouter(Redux);
