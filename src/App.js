import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import asyncComponent from "./utils/asyncComponent"
import MyRoute from "./pages/MyRoute/MyRoute"

// import Index from "./pages/Index/Index"
// import Detail from "./pages/Detail/Detail"
// import Login from "./pages/Login/Login"
// import Register from "./pages/Register/Register"
// import ClassGoods from "./pages/ClassGoods/ClassGoods"

//懒加载
const Index = asyncComponent(()=>import("./pages/Index/Index"))
const Detail = asyncComponent(()=>import("./pages/Detail/Detail"))
const Login = asyncComponent(()=>import("./pages/Login/Login"))
const Register = asyncComponent(()=>import("./pages/Register/Register"))
const ClassGoods = asyncComponent(()=>import("./pages/ClassGoods/ClassGoods"))




function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <MyRoute path="/index" component={Index}></MyRoute>
        <MyRoute path="/detail" component={Detail}></MyRoute>
        <MyRoute path="/register" component={Register}></MyRoute>
        <MyRoute path="/classgoods" component={ClassGoods}></MyRoute>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
