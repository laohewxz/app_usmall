import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import "./Register.css"
import {requestReg} from "../../utils/request"

export default class Register extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:'',
                nickname:'',
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
    reg(){
        requestReg(this.state.user).then(res=>{
            if(res.data.code === 200){
                this.props.history.push("/login")
                alert(res.data.msg)
            }else{
                alert(res.data.msg)
            }
        }) 
    }
    render() {
        const {user} = this.state
        return (
            <div>
                <div className="reg">
                <nav>注册</nav>
                <div className="form">
                    <div className="inp">
                        手机号：<input type="text" value={user.phone} onChange={(e)=>this.changeUser(e,'phone')}/>
                    </div>
                    <hr/>
                    <div className="inp">
                        昵称：<input type="text" value={user.nickname} onChange={(e)=>this.changeUser(e,'nickname')}/>
                    </div>
                    <hr/>
                    <div className="inp">
                        密码:<input type="text" value={user.password} onChange={(e)=>this.changeUser(e,'password')}/>
                    </div>
                    <hr/>
                    <div>
                        <button onClick={()=>this.reg()}>注册</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
