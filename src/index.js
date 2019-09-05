import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 移动端的样式
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

// import App from './App';
// import * as serviceWorker from './serviceWorker';
import router from "./route/Router";
ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
