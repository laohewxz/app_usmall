import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import Home from '../Home/Home'
import Fenlei from "../Fenlei/Fenlei"
import Mine from "../Mine/Mine"
import Car from "../Car/Car"
import "./index.css"

export default class Index extends Component {
    render() {
        return (
            <div className="index">
                {/* 二级路由 */}
                <Switch>
                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/fenlei" component={Fenlei}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Route path="/index/car" component={Car}></Route>
                    <Redirect to="/index/home"></Redirect>
                </Switch>


                <footer>
                <NavLink to="/index/home" activeClassName="select">
                   <span className="bg1"></span>
                   <p> 首页</p>
                    </NavLink>
                    <NavLink to="/index/fenlei" activeClassName="select">
                    <span className="bg2"></span>
                      <p>分类</p>
                        </NavLink>
                    <NavLink to="/index/car" activeClassName="select">
                    <span className="bg3"></span>
                       <p> 购物车</p>
                        </NavLink>
                    <NavLink to="/index/mine" activeClassName="select">
                    <span className="bg4"></span>
                       <p> 我的</p>
                        </NavLink>
                </footer>
            </div>
        )
    }
}
