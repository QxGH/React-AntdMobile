import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { NavBar, Icon } from 'antd-mobile';


class View extends Component {
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
        >View</NavBar>
        <div className="view-box">
          {this.props.routerChildren}
        </div>
      </div>
    );
  }
  goback(){
    this.props.history.goBack();
  }
}

export default withRouter(View);
