import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom"

import Index from "./pages/Index/Index"
import Fenlei from "./pages/Fenlei/Fenlei"
import Detail from "./pages/Detail/Detail"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/fenlei" component={Fenlei}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
