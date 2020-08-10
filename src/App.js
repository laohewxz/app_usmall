import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom"

import Index from "./pages/Index/Index"
import Fenlei from "./pages/Fenlei/Fenlei"
import Detail from "./pages/Detail/Detail"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import ClassGoods from "./pages/ClassGoods/ClassGoods"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/fenlei" component={Fenlei}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/classgoods" component={ClassGoods}></Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
