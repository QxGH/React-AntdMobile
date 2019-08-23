import React, { Component } from 'react';
import store from '../store/index';
import axios from 'axios'
import { Toast, List, WingBlank } from 'antd-mobile';
import {withRouter} from "react-router-dom";

class My extends Component {
  constructor(props){
    super(props);
    // this.state = store.getState();  //获取store里的所有关于state的数据
    //监听store里面的变化，只要一变化
    //只要store里面的数据发生改变，则立即执行subscribe函数里的函数
    store.subscribe(this.handleStoreChange);
    this.state = {
      avatar: '',
      store: store.getState()
    }
  }
  render() {
    let avatar = null;
    if(this.state.avatar){
      avatar = <img className="avatar" src={this.state.avatar} alt="头像" />
    }
    return (
      <div id="my-container">
        <div className="user-card">
          <div className="card-box">
            <div className="avatar-box">
              <div className="avatar-bg">
                {avatar}
              </div>
            </div>
            <div className="name-box">
              <span className="name">{this.state.store.login_name}</span>
            </div>
          </div>
        </div>
        <WingBlank>
          <List className="my-list">
            <List.Item arrow="horizontal" onClick={this.goRedux.bind(this)}>Redux</List.Item>
          </List>
        </WingBlank>
      </div>
    );
  }
  //reducer返回newState之后，store传递newState给组件
  handleStoreChange = () => {
    this.setState({
      store: store.getState()
    });
    // 感知store发生变化之后，从store里获取最新的数据，然后进行设置
  };
  componentDidMount(){
    this.index()
  };
  index(){
    let loginName = this.state.store.login_name;
    let url = '/user/'+loginName
    axios.get(url)
    .then((res)=>{
      if(res.data.success === true){
        this.setState({
          avatar: res.data.data.avatar_url
        })
      } else {
        Toast.info('数据获取失败！');
      };
    })
    .catch((error)=>{
      Toast.offline('服务器开小差了！');
    })
  }
  goRedux(){
    this.props.history.push("/view/redux");
  }
}

export default withRouter(My);
