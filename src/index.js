import React from 'react';
import ReactDOM from 'react-dom';
import './style/common.min.css';
import * as serviceWorker from './serviceWorker';
import RouterRoot from './router/index';

// import Vconsole from 'vconsole';
// new Vconsole();

ReactDOM.render(
  <RouterRoot></RouterRoot>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
