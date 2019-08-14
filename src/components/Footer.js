import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

class Footer extends Component {
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
          tintColor="#33A3F4"
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
            background: 'url(http://img.qinxus.com/home.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(http://img.qinxus.com/home_fill.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selected={this.state.selectedTab === '/home' || this.state.selectedTab === '/'}
          onPress={this.handleTabHome.bind(this)}
        >
          {this.state.selectedTab === "/home" || this.state.selectedTab === "/" ? this.props.routerParmes.children : null}
        </TabBar.Item>
        <TabBar.Item
          title="热门"
          key="hot"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://img.qinxus.com/hot.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://img.qinxus.com/hot_fill.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selected={this.state.selectedTab === '/hot'}
          onPress={this.handleTabHot.bind(this)}
        >
          {this.state.selectedTab === "/hot" ? this.props.routerParmes.children : null}
        </TabBar.Item>
        <TabBar.Item
          title="我"
          key="my"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://img.qinxus.com/my.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://img.qinxus.com/my_fill.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selected={this.state.selectedTab === '/my'}
          onPress={this.handleTabMy.bind(this)}
        >
          {this.state.selectedTab === "/my" ? this.props.routerParmes.children : null}
        </TabBar.Item>
      </TabBar>
    );
  }
  componentDidMount(){
    const self = this;
    // 初始化设置路由
    self.setState({
      selectedTab: self.props.routerParmes.history.location.pathname
    });
  }
  handleTabHome(){
    // history.push('home');
    this.props.routerParmes.history.push('/home')
  }
  handleTabHot(){
    // history.push('hot');
    this.props.routerParmes.history.push('/hot')
  }
  handleTabMy(){
    // history.push('my');
    this.props.routerParmes.history.push('/my')
  }
}

export default Footer;
