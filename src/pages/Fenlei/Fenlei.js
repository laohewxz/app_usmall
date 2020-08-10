import React, { Component } from 'react'
import { getCate } from "../../utils/request"
import "./Fenlei.css"
import {NavLink} from "react-router-dom"

export default class Fenlei extends Component {
    constructor() {
        super()
        this.state={
            list:[],
            n:0
        }
    }
    componentDidMount() {
        getCate().then(res => {
            this.setState({
                list: res.data.list
            })
            // console.log(this.state.list)
        })
    }
    changeN(index){
         this.setState({
             n:index
         })
    }
    render() {
        const {list,n} = this.state
        return (
            <div className="fenlei">
                <nav>分类</nav>
                <div className="con">
                    <div className="left">
                        <ul>
                            {
                                list.map((item,index)=>{
                                    return <li key={item.id} onClick={()=>this.changeN(index)} className={n===index?'select':null}>
                                        {item.catename}
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="right">
                        {
                            list.length>0?list[n].children.map(item=>{
                                return <div key={item.id} className="box">
                                    <NavLink to ={"/classgoods?id="+item.id}>
                                    <img src={this.$img+item.img} alt=""/>
                                    <p>{item.catename}</p>
                                 </NavLink>
                                </div>
                            }):null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
