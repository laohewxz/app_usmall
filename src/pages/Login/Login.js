import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import "./Login.css"
import {requestLogin} from "../../utils/request"
import {successAlert} from "../../utils/Alert"

export default class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:'',
                password:''
            }
        }
    }
    changeUser(e,key){
        this.setState({
           user:{
              ...this.state.user,
              [key]:e.target.value
           }
        })
  }
  login(){
    requestLogin(this.state.user).then(res=>{
        if(res.data.code === 200){
            //存入uid到session
            console.log(res,'ppppppppppp')
            sessionStorage.setItem("uid",res.data.list.uid)
            sessionStorage.setItem("token",res.data.list.token)
            this.props.history.push("/index")
            successAlert(res.data.msg)
        }else{
            successAlert(res.data.msg)
            this.setState({
                user:{
                    phone:'',
                    password:''
                }
             })
        }
      }) 
  }
    render() {
        const {user} = this.state
        return (
            <div className="login">
                <nav>登录</nav>
                <NavLink to="/register" className="reg">注册</NavLink>
                <div className="form">
                    <div className="inp">
                        账号：<input type="text" value={user.phone} onChange={(e)=>this.changeUser(e,'phone')}/>
                    </div>
                    <hr/>
                    <div className="inp">
                        密码：<input type="text" value={user.password} onChange={(e)=>this.changeUser(e,'password')}/>
                    </div>
                    <hr/>
                    <div className="inp pass">
                       <span> 忘记密码</span>
                </div>
                    <div>
                        <button onClick={()=>this.login()}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}
