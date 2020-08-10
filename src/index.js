import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//引入reset.css
import "./assets/css/reset.css"
//引入rem.js
import "./assets/js/rem"
import { HashRouter } from "react-router-dom"
import 'antd-mobile/dist/antd-mobile.css'

import { Provider } from "react-redux"
import store from "./store"

//给图片加上http
Component.prototype.$img = "http://localhost:3000"

ReactDOM.render(
  <Provider store={store}> 
    <HashRouter >
      <App />
    </HashRouter>
    </Provider>,
  document.getElementById('root')
);
