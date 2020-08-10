import React, { Component } from 'react'

import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"

import {connect} from "react-redux"
import {banner,requestBannerAction,list,requestListAction} from "../../store"

class Home extends Component {
    componentDidMount() {
        this.props.getBanner()//获取轮播图
        this.props.getIndexGoods()//获取轮播图
    }
    render() {
        const {banner,list} = this.props
        return (
            <div className="home">
                  
                <Header></Header>
                <Banner banner={banner}></Banner>
                <Nav></Nav>
                <List list={list}></List>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return  {
       banner:banner(state),
       list:list(state)
    }
}
const mapDispatchToProps=dispatch=>{
    return {
       getBanner:()=>dispatch(requestBannerAction()),
       getIndexGoods:()=>dispatch(requestListAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
