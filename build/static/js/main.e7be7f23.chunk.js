(window.webpackJsonpmobile=window.webpackJsonpmobile||[]).push([[0],{106:function(e,t,a){e.exports=a(204)},111:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),s=a.n(r);a(111),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(10),o=a(11),l=a(13),m=a(12),u=a(14),h=(a(112),a(41)),p=a.n(h),d=a(21),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={selectedTab:"/home"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,{unselectedTintColor:"#949494",tintColor:"#666666",barTintColor:"white",tabBarPosition:"bottom",prerenderingSiblingsNumber:0},i.a.createElement(p.a.Item,{title:"\u4e3b\u9875",key:"home",icon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(http://img.qinxus.com/icons_home.svg) center center /  21px 21px no-repeat"}}),selectedIcon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(http://img.qinxus.com/icons_home_fill.svg) center center /  21px 21px no-repeat"}}),selected:"/home"===this.state.selectedTab||"/"===this.state.selectedTab,onPress:this.handleTabHome.bind(this)},"/home"===this.state.selectedTab||"/"===this.state.selectedTab?this.props.routerChildren:null),i.a.createElement(p.a.Item,{title:"\u6536\u85cf",key:"like",icon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(http://img.qinxus.com/icons_likes.svg) center center /  21px 21px no-repeat"}}),selectedIcon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(http://img.qinxus.com/icons_likes_fill.svg) center center /  21px 21px no-repeat"}}),selected:"/like"===this.state.selectedTab,onPress:this.handleTabLike.bind(this)},"/like"===this.state.selectedTab?this.props.routerChildren:null),i.a.createElement(p.a.Item,{title:"\u6211",key:"my",icon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(http://img.qinxus.com/icons_my.svg) center center /  21px 21px no-repeat"}}),selectedIcon:i.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(http://img.qinxus.com/icons_my_fill.svg) center center /  21px 21px no-repeat"}}),selected:"/my"===this.state.selectedTab,onPress:this.handleTabMy.bind(this)},"/my"===this.state.selectedTab?this.props.routerChildren:null))}},{key:"componentDidMount",value:function(){this.setState({selectedTab:this.props.location.pathname})}},{key:"componentWillUnmount",value:function(){this.handleTabHome=null,this.handleTabLike=null,this.handleTabMy=null}},{key:"handleTabHome",value:function(){this.props.history.push("/home")}},{key:"handleTabLike",value:function(){this.props.history.push("/like")}},{key:"handleTabMy",value:function(){this.props.history.push("/my")}}]),t}(n.Component),v=Object(d.g)(b),g=(a(64),a(34)),f=a.n(g),E=(a(175),a(100)),y=a.n(E),k=(a(84),a(49)),x=a.n(k),j=a(36),O=a.n(j),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={artice:{},loginname:"",replies:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"view"},i.a.createElement(y.a,{mode:"light",className:"view-nav",icon:i.a.createElement(x.a,{type:"left"}),onLeftClick:function(){return e.goback()},rightContent:[i.a.createElement(x.a,{key:"1",type:"ellipsis"})]},"\u4e3b\u9898\u8be6\u60c5"),i.a.createElement("div",{className:"view-box"},i.a.createElement("h1",null,this.state.artice.title),i.a.createElement("div",{className:"artice-info"},i.a.createElement("span",{className:"info-item"},this.state.loginname),i.a.createElement("span",{className:"info-item"},this.state.artice.create_at)),i.a.createElement("div",{className:"content-box"},i.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.state.artice.content}})),i.a.createElement("div",{className:"replies-box"},i.a.createElement("ul",{className:"list"},this.state.replies.map(function(e,t){return i.a.createElement("li",{className:"item",key:t},i.a.createElement("div",{className:"info"},e.author.loginname),i.a.createElement("div",{className:"message",dangerouslySetInnerHTML:{__html:e.content}}))})))))}},{key:"componentDidMount",value:function(){this.index(),console.log(this.state.replies)}},{key:"index",value:function(){var e=this,t=e.props.location.state.id;O.a.get("https://cnodejs.org/api/v1/topic/"+t).then(function(t){if(t.data.success){var a=t.data.data;e.setState({artice:a,loginname:a.author.loginname,replies:a.replies})}}).catch(function(e){f.a.offline("\u670d\u52a1\u5668\u5f00\u5c0f\u5dee\u4e86\uff01",3)})}},{key:"goback",value:function(){this.props.history.goBack()}}]),t}(n.Component),w=Object(d.g)(N),T=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="/view"===this.props.location.pathname?i.a.createElement(w,null):i.a.createElement(v,{routerChildren:this.props.children});return i.a.createElement("div",{id:"App",className:"App",key:this.props.location.key},e)}}]),t}(n.Component),C=Object(d.g)(T),S=(a(194),a(101)),_=a.n(S),L=(a(196),a(67)),D=a.n(L),I=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(l.a)(this,Object(m.a)(t).call(this,e));var n=new D.a.DataSource({rowHasChanged:function(e,t){return e!==t}});return a.state={dataSource:n.cloneWithRows({}),isLoading:!0,pageCurrent:1,listData:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(D.a,{style:{height:"100%",overflow:"auto"},dataSource:this.state.dataSource,renderFooter:function(){return i.a.createElement("div",{style:{textAlign:"center"}},e.state.isLoading?i.a.createElement(_.a,{className:"justify-content",text:"Loading..."}):"\u2014\u2014\u6211\u4e5f\u662f\u6709\u5e95\u7ebf\u7684\u2014\u2014")},renderRow:function(t){return i.a.createElement("div",{className:"list-item",onClick:function(){return e.listClick(t)}},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"box-header"},i.a.createElement("span",{className:"type"},t.tab?t.tab:"test"),i.a.createElement("span",null," \xb7 "),i.a.createElement("span",{className:"author"},t.author.loginname),i.a.createElement("span",null," \xb7 "),i.a.createElement("span",null,t.create_at)),i.a.createElement("div",{className:"box-body"},t.title),i.a.createElement("div",{className:"box-footer"},i.a.createElement("span",{className:"item-box"},i.a.createElement("i",{className:"icon iconfont"},"\ue73d"),i.a.createElement("span",{className:"number"},t.visit_count)),i.a.createElement("span",{className:"item-box"},i.a.createElement("i",{className:"icon iconfont"},"\ue731"),i.a.createElement("span",{className:"number"},t.reply_count)))))},pageSize:20,scrollRenderAheadDistance:800,scrollEventThrottle:20,onEndReachedThreshold:800,onEndReached:this.index.bind(this)})}},{key:"componentDidMount",value:function(){this.index()}},{key:"index",value:function(){var e=this;e.setState({isLoading:!0});var t="/",a={};"all"===this.props.getType?(t="https://cnodejs.org/api/v1/topics",a={page:e.state.pageCurrent,limit:20}):"collect"===this.props.getType&&(t="https://cnodejs.org/api/v1/topic_collect/QxGh"),O.a.get(t,{params:a}).then(function(t){if(t.data.success){var a=e.state.pageCurrent+1,n=e.state.listData.concat(t.data.data);e.setState({pageCurrent:a,listData:n}),e.setState({dataSource:e.state.dataSource.cloneWithRows(e.state.listData),isLoading:!1})}}).catch(function(e){f.a.offline("\u670d\u52a1\u5668\u5f00\u5c0f\u5dee\u4e86\uff01",3)})}},{key:"listClick",value:function(e){var t=e.id;this.props.history.push({pathname:"/view",state:{id:t}})}}]),t}(n.Component),M=Object(d.g)(I),H=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"home-container",className:"container"},i.a.createElement(M,{getType:"all",routerParmes:this.props}))}}]),t}(n.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"like-container",className:"container"},i.a.createElement(M,{getType:"collect",routerParmes:this.props}))}}]),t}(n.Component),J=a(103),P={number:100,login_name:"QxGH"},R=Object(J.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;if("add_number"===t.type){var a=JSON.parse(JSON.stringify(e));return a.number++,a}if("sub_number"===t.type){var n=JSON.parse(JSON.stringify(e));return n.number--,n}return e}),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleStoreChange=function(){a.setState({store:R.getState()})},R.subscribe(a.handleStoreChange),a.state={avatar:"",store:R.getState()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=null;return this.state.avatar&&(e=i.a.createElement("img",{className:"avatar",src:this.state.avatar,alt:"\u5934\u50cf"})),i.a.createElement("div",{id:"my-container"},i.a.createElement("div",{className:"user-card"},i.a.createElement("div",{className:"card-box"},i.a.createElement("div",{className:"avatar-box"},i.a.createElement("div",{className:"avatar-bg"},e)),i.a.createElement("div",{className:"name-box"},i.a.createElement("span",{className:"name"},this.state.store.login_name)))))}},{key:"componentDidMount",value:function(){this.index()}},{key:"index",value:function(){var e=this,t="https://cnodejs.org/api/v1/user/"+this.state.store.login_name;O.a.get(t).then(function(t){!0===t.data.success?e.setState({avatar:t.data.data.avatar_url}):f.a.offline("\u670d\u52a1\u5668\u5f00\u5c0f\u5dee\u4e86\uff01",3)}).catch(function(e){alert("error!")})}}]),t}(n.Component),A=a(39),B=function(){return i.a.createElement(A.a,null,i.a.createElement(C,null,i.a.createElement(d.d,null,i.a.createElement(d.b,{path:"/",exact:!0,component:H}),i.a.createElement(d.b,{path:"/home",component:H}),i.a.createElement(d.b,{path:"/like",component:q}),i.a.createElement(d.b,{path:"/my",component:W}),i.a.createElement(d.b,{path:"/view",component:w}),i.a.createElement(d.b,{path:"/",render:function(){return i.a.createElement(d.a,{to:"/"})}}))))},G=a(105),Q=new(a.n(G).a);console.log("vConsole version:"+Q.version),s.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[106,1,2]]]);
//# sourceMappingURL=main.e7be7f23.chunk.js.map