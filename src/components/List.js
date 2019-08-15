import React, { Component } from 'react';
import axios from 'axios'
import { ListView } from 'antd-mobile';

const row = (dataRow) => {
  return (
    <div className="list-item">
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
      listData: []
    }
  }
  render(){
    return (
      <ListView
        style={{
          height: '100%',
          overflow: 'auto'
        }}
        dataSource={this.state.dataSource} // 渲染的数据源
        renderFooter={() => (<div style={{textAlign: 'center'}}>
          {this.state.isLoading ? '骚等' : '我也是有底线的'}
        </div>)}
        renderRow={row} // 单条数据
        pageSize={10} // 每次渲染的行数
        scrollRenderAheadDistance={500} // 当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行
        scrollEventThrottle={20} // 控制在滚动过程中，scroll事件被调用的频率
        onEndReachedThreshold={50} // 调用onEndReached之前的临界值，单位是像素
        onEndReached={this.index.bind(this)} // 上拉加载事件
      />
    )
  }
  componentDidMount(){
    this.index();
  }
  index(){
    const self = this;
    let getUrl = '/';
    let params = {}
    if(this.props.getType === 'all'){
      getUrl = "https://cnodejs.org/api/v1/topics";
      params = {
        page: self.state.pageCurrent, 
        limit: 10
      };
    } else if(this.props.getType === 'collect') {
      getUrl = "https://cnodejs.org/api/v1/topic_collect/QxGh"
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
          dataSource: self.state.dataSource.cloneWithRows(self.state.listData),
          isLoading: false
        })
      }
    })
    .catch((error)=>{
      alert("请求数据异常!")
    })
  }
}

export default List;