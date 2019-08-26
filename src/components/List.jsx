import React, { Component } from 'react';
import axios from '../http/api'
import { ListView, Toast, ActivityIndicator } from 'antd-mobile';
import {withRouter} from "react-router-dom";


class List extends Component{
  constructor(props){
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

    this.state = {
      dataSource: dataSource.cloneWithRows({}),
      isLoading: true,
      pageCurrent: 1,
      listData: [],
      getFlag: true,  // 防止index 多次调用
      collectFlag: true   // 收藏主题没有分页，只需要加载一次
    }
  }
  render(){
    const row = (dataRow) => {
      return (
        <div className="list-item" onClick={() => this.listClick(dataRow)}>
          <div className="box">
            <div className="box-header">
              <span className="type">{dataRow.tab?dataRow.tab:'test'}</span>
              <span> · </span>
              <span className="author">{dataRow.author.loginname}</span>
              <span> · </span>
              <span>{dataRow.create_at}</span>
            </div>
            <div className="box-body">
              {dataRow.title}
            </div>
            <div className="box-footer">
              <span className="item-box">
                <i className="icon iconfont">&#xe73d;</i>
                <span className="number">{dataRow.visit_count}</span>
              </span>
              <span className="item-box">
                <i className="icon iconfont">&#xe731;</i>
                <span className="number">{dataRow.reply_count}</span>
              </span>
            </div>
          </div>
        </div>
      )
    }
    return (
      <ListView
        style={{
          height: '100%',
          overflow: 'auto'
        }}
        dataSource={this.state.dataSource} // 渲染的数据源
        renderFooter={() => (<div style={{textAlign: 'center'}}>
          {this.state.isLoading ? <ActivityIndicator className="justify-content" text="Loading..."/>: '——我也是有底线的——'}
        </div>)}
        renderRow={row} // 单条数据
        pageSize={20} // 每次渲染的行数
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReachedThreshold={10}
        onEndReached={this.index.bind(this)} // 上拉加载事件
      />
    )
  }
  componentDidMount(){
    this.index();
  }
  index(){
    const self = this;
    if(!self.state.getFlag || !self.state.collectFlag){
      return;
    };
    self.setState({
      isLoading: true,
      getFlag: false
    });
    let getUrl = '/';
    let params = {}
    if(this.props.getType === 'all'){ // 全部主题
      getUrl = "/topics";
      params = {
        page: self.state.pageCurrent, 
        limit: 20
      };
    } else if(this.props.getType === 'collect') { // 收藏主题
      getUrl = "/topic_collect/QxGh"
    };
    axios.get(getUrl, {params})
    .then((res)=>{
      if(res.data.success){
        let newPageCurrent = self.state.pageCurrent + 1;
        let newListData = self.state.listData.concat(res.data.data);
        self.setState({
          pageCurrent: newPageCurrent,
          listData: newListData
        });
        self.setState({
          dataSource: self.state.dataSource.cloneWithRows(self.state.listData)
        });
        if(this.props.getType === 'collect') {
          self.setState({
            collectFlag: false
          });
        };
      } else {
        Toast.info('数据获取失败！');
      };
      self.setState({
        isLoading: false,
        getFlag: true
      });
    })
    .catch((error)=>{
      Toast.offline('服务器开小差了！');
    })
  }
  listClick(row){
    let id = row.id;
    this.props.history.push({pathname:"/view/content",state: {id}});
  }
}

export default withRouter(List);