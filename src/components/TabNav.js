import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import {withRouter} from "react-router-dom";

class TabNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '/home'
    };
  }
  render() {
    return (
      <TabBar
          unselectedTintColor="#949494"
          tintColor="#666666"
          barTintColor="white"
          tabBarPosition="bottom"
          prerenderingSiblingsNumber={0}
        >
        <TabBar.Item
          title="主页"
          key="home"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(http://img.qinxus.com/icons_home.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(http://img.qinxus.com/icons_home_fill.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selected={this.state.selectedTab === '/home' || this.state.selectedTab === '/'}
          onPress={this.handleTabHome.bind(this)}
        >
          {(this.state.selectedTab === "/home" || this.state.selectedTab === "/") ? this.props.routerChildren : null}
        </TabBar.Item>
        <TabBar.Item
          title="喜欢"
          key="like"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://img.qinxus.com/icons_likes.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://img.qinxus.com/icons_likes_fill.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selected={this.state.selectedTab === '/like'}
          onPress={this.handleTabLike.bind(this)}
        >
          {this.state.selectedTab === "/like" ? this.props.routerChildren : null}
        </TabBar.Item>
        <TabBar.Item
          title="我"
          key="my"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://img.qinxus.com/icons_my.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://img.qinxus.com/icons_my_fill.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selected={this.state.selectedTab === '/my'}
          onPress={this.handleTabMy.bind(this)}
        >
          {this.state.selectedTab === "/my" ? this.props.routerChildren : null}
        </TabBar.Item>
      </TabBar>
    );
  }
  componentDidMount(){
    const self = this;
    // 初始化设置路由
    self.setState({
      selectedTab: self.props.location.pathname
    });
  }
  componentWillUnmount(){
    this.handleTabHome = null;
    this.handleTabLike = null;
    this.handleTabMy = null;
  }
  handleTabHome(){
    // 跳转 home
    this.props.history.push("/home");
  }
  handleTabLike(){
    // 跳转 like
    this.props.history.push("/like");
  }
  handleTabMy(){
    // 跳转 my
    this.props.history.push("/my");
  }
}

export default withRouter(TabNav);
