import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios'


class View extends Component {
  constructor(props){
    super(props);
    this.state = {
      artice: {},
      loginname: ''
    }
  }
  render() {
    return (
      <div className="view">
        <h1>{this.state.artice.title}</h1>
        <div className="artice-info">
          <span className="info-item">{this.state.loginname}</span>
          <span className="info-item">{this.state.artice.create_at}</span>
        </div>
        <div className="content-box">
          <div className="content" dangerouslySetInnerHTML={{__html: this.state.artice.content}}></div>
        </div>
      </div>
    );
  }
  componentDidMount(){
    this.index();
  }
  index(){
    const self = this;
    let id = self.props.location.state.id;
    axios.get('https://cnodejs.org/api/v1/topic/'+id)
    .then((res)=>{
      if(res.data.success){
        let data = res.data.data;
        console.log(data)
        self.setState({
          artice: data,
          loginname: data.author.loginname
        })
      }
    })
    .catch((error)=>{
      alert("发生错误")
    })
  }
}

export default withRouter(View);
