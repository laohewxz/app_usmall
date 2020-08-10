import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import "./Register.css"

export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="reg">
                <nav>注册</nav>
                <div className="form">
                    <div className="inp">
                        手机号：<input type="text" />
                    </div>
                    <hr/>
                    <div className="inp">
                        昵称：<input type="text" />
                    </div>
                    <hr/>
                    <div className="inp">
                        密码:<input type="text" />
                    </div>
                    <hr/>
                    <div>
                        <button>注册</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
