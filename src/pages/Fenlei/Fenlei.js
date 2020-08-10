import React, { Component } from 'react'
import { getCate } from "../../utils/request"
import "./Fenlei.css"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import { listfenlei, requestFenleiAction } from '../../store'

class Fenlei extends Component {
    constructor() {
        super()
        this.state={
            n:0
        }
    }
    componentDidMount() {
        this.props.requestFenlei()
    }
    changeN(index){
         this.setState({
             n:index
         })
    }
    render() {
        const {n} = this.state
        const {list} = this.props
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
                                    <NavLink to ={"/classgoods?id="+item.id+"&name="+item.catename}>
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
const mapStateToProps=(state)=>{
    console.log(state)   
    return  {
        list:listfenlei(state)
    }
}
const mapDispatchToProps=dispatch=>{
    return {
       requestFenlei:()=>dispatch(requestFenleiAction())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Fenlei)
