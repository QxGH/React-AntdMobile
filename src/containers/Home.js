import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div id="home-container">
        {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
        <h1>Home</h1>
        <Link to={{ pathname: '/hot'}} className="home-link">
          点击跳转到路由参数 hot 使用
        </Link>
      </div>
    );
  }
}

export default Home;
