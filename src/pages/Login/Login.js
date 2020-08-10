import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import "./Login.css"

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <nav>登录</nav>
                <NavLink to="/register" className="reg">注册</NavLink>
                <div className="form">
                    <div className="inp">
                        账号：<input type="text" />
                    </div>
                    <hr/>
                    <div className="inp">
                        密码：<input type="text" />
                    </div>
                    <hr/>
                    <div className="inp pass">
                       <span> 忘记密码</span>
                </div>
                    <div>
                        <button>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}
