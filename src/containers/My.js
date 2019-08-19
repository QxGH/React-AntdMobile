import React, { Component } from 'react';
import store from '../store/index';
import axios from 'axios'

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
              {avatar}
            </div>
            <div className="name-box">
              <span className="name">{this.state.store.login_name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //reducer返回newState之后，store传递newState给组件
  handleStoreChange = () => {
    this.setState({
      store: store.getState()
    });
    // console.log('store change')
    // 感知store发生变化之后，从store里获取最新的数据，然后进行设置
  };
  componentDidMount(){
    this.index()
  };
  index(){
    let loginName = this.state.store.login_name;
    let url = 'https://cnodejs.org/api/v1/user/'+loginName
    axios.get(url)
    .then((res)=>{
      console.log(res.data.data)
      if(res.data.success === true){
        this.setState({
          avatar: res.data.data.avatar_url
        })
      } else {
        alert("初始化失败!")
      }
    })
    .catch((error)=>{
      alert("error!")
    })
  }


}

export default My;
