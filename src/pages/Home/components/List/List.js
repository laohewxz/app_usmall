import React from 'react'
import "./List.css"
import {  NavLink } from "react-router-dom"


export default function List(props) {
    const { list } = props
    return (
        <div className="list">

            

            <ul>
                {
                    list.map(item => {
                        return (
                            <li key={item.id}>
                                <NavLink to={"/detail?id="+item.id}>
                                    <img src={item.img} alt="" />
                                    <div className="right">
                                        <p>{item.goodsname}</p>
                                        <span>￥{item.price}</span>
                                        <div className="btn">立即抢购</div>
                                    </div>
                                </NavLink>
                            </li>)

                    })
                }
            </ul>
        </div>
    )
}
