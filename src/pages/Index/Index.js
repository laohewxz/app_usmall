import React, { Component } from 'react'
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"
import { getBanner, getIndexGoods } from "../../utils/request"

export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            banner: []
        }
    }
    componentDidMount() {
        //获取到banner图
        getBanner().then(res => {
            var arr = res.data.list;
            arr.forEach(item => {
                // 给banner图地址加上http://localhost:3000
                item.img = this.$img + item.img
            })
            this.setState({
                banner: arr
            })
        })
    }
    render() {
        const { banner } = this.state
        return (
            <div>
                <Header></Header>
                <Banner banner={banner}></Banner>
                <Nav></Nav>
                <List></List>
            </div>
        )
    }
}
