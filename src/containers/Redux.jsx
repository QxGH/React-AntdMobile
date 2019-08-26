import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import store from '../store/index';
import { Progress, Button, WhiteSpace } from 'antd-mobile';

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
        <WhiteSpace />
        <div className="progress-box">
          <div className="progress"><Progress percent={this.state.store.number} position="normal" /></div>
          <div aria-hidden="true">{this.state.store.number}%</div>
        </div>
        <WhiteSpace />
        <Button type="primary" disabled={this.state.store.number >= 100} onClick={this.add}>Add</Button>
        <WhiteSpace />
        <Button type="warning" disabled={this.state.store.number <= 0} onClick={this.sub}>Sub</Button>
        <WhiteSpace />
        <Button onClick={this.set}>Set-60</Button>
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
      number: 60
    })
  }
}

export default withRouter(Redux);
