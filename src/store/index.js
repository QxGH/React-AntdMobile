import {createStore} from 'redux';
import reducer from './reducer';
 
 
//1-store是唯一的
//2-只有store才能改变自己的内容（state）
//3-reducer必须是纯函数
const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // /如果安装了redeux devtools扩展这个工具（谷歌商店里下载），则在控制台里使用这个方法（为了调试redux）
);
export default store;