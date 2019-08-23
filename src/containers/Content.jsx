import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios'
import { Toast, ActivityIndicator } from 'antd-mobile';


class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      artice: {},
      loginname: '',
      replies: [],
      loading: true
    }
  }
  render() {
    const loadingCompont = <ActivityIndicator className="justify-content" text="Loading..." />
    const repliesCompont = 
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
    return (
      <div className="content">
        {this.state.loading?loadingCompont:null}
        <h1>{this.state.artice.title}</h1>
        <div className="artice-info">
          <span className="info-item">{this.state.loginname}</span>
          <span className="info-item">{this.state.artice.create_at}</span>
        </div>
        <div className="content-box">
          <div className="content" dangerouslySetInnerHTML={{__html: this.state.artice.content}}></div>
        </div>
        {!this.state.loading?repliesCompont:null}
      </div>
    );
  }
  componentDidMount(){
    this.index();
  }
  index(){
    const self = this;
    self.setState({
      loading: true
    })
    let id = self.props.location.state.id;
    axios.get('/topic/'+id)
    .then((res)=>{
      if(res.data.success){
        let data = res.data.data;
        self.setState({
          artice: data,
          loginname: data.author.loginname,
          replies: data.replies
        })
      } else {
        Toast.info('数据获取失败！');
      };
      self.setState({
        loading: false
      });
    })
    .catch((error)=>{
      Toast.offline('服务器开小差了！');
    })
  }
}

export default withRouter(Content);
