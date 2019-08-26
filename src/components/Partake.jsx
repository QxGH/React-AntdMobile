import React, {Component} from 'react';
import { List, Toast, ActivityIndicator } from 'antd-mobile';
import axios from '../http/api';
import {withRouter} from "react-router-dom";

const Item = List.Item;
const Brief = Item.Brief;

class Partake extends Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      getType: '',
      loading: true
    }
  }
  componentDidMount(){
    this.setState({
      getType: this.props.location.state.getType
    });
    this.index();
  }
  render(){
    const loadingCompont = <ActivityIndicator className="justify-content" text="Loading..." />
    return (
      <div className="partake">
        {this.state.loading?loadingCompont:null}
        <List className="partake-list" style={this.state.loading?{display: 'none'}:{display: 'block'}}>
          {
            this.state.list.map((item, index)=>(
              <Item key={item.id} extra={item.last_reply_at} align="top" thumb={item.author.avatar_url} multipleLine onClick={() => this.listClick(item.id)}> 
                {item.title} <Brief>{item.author.loginname}</Brief>
              </Item>
            ))
          }
        </List>
      </div>
    )
  }
  index(){
    const self = this;
    self.setState({
      loading: true
    });
    axios.get('/user/QxGH')
    .then((res)=>{
      if(self.state.getType === 'public'){
        self.setState({
          list: res.data.data.recent_topics
        })
      } else if(self.state.getType === 'replies') {
        self.setState({
          list: res.data.data.recent_replies
        })
      };
      self.setState({
        loading: false
      });
    })
    .catch((error)=>{
      self.setState({
        loading: false
      });
      Toast.offline('服务器开小差了！');
    })
  }
  listClick(id){
    this.props.history.push({pathname:"/view/content",state: {id}});
  }
}

export default withRouter(Partake);