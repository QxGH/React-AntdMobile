import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios'
import { Toast, NavBar, Icon } from 'antd-mobile';


class View extends Component {
  constructor(props){
    super(props);
    this.state = {
      artice: {},
      loginname: '',
      replies: []
    }
  }
  render() {
    return (
      <div className="view">
        <NavBar
          mode="light"
          className="view-nav"
          icon={<Icon type="left" />}
          onLeftClick={() => this.goback()}
          rightContent={[
            <Icon key="1" type="ellipsis" />
          ]}
        >主题详情</NavBar>
        <div className="view-box">
          <h1>{this.state.artice.title}</h1>
          <div className="artice-info">
            <span className="info-item">{this.state.loginname}</span>
            <span className="info-item">{this.state.artice.create_at}</span>
          </div>
          <div className="content-box">
            <div className="content" dangerouslySetInnerHTML={{__html: this.state.artice.content}}></div>
          </div>
          <div className="replies-box">
            <ul className="list">
              {
                this.state.replies.map((item,index)=>(
                  <li className="item" key={index}>
                    <div className="info">{item.author.loginname}</div>
                    <div className="message" dangerouslySetInnerHTML={{__html: item.content}}></div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount(){
    this.index();
    console.log(this.state.replies)
  }
  index(){
    const self = this;
    let id = self.props.location.state.id;
    axios.get('https://cnodejs.org/api/v1/topic/'+id)
    .then((res)=>{
      if(res.data.success){
        let data = res.data.data;
        self.setState({
          artice: data,
          loginname: data.author.loginname,
          replies: data.replies
        })
      };
    })
    .catch((error)=>{
      Toast.offline('服务器开小差了！', 3);
    })
  }
  goback(){
    this.props.history.goBack();
  }
}

export default withRouter(View);