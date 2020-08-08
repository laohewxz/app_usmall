import React from 'react'
import "./List.css"

export default function List(props) {
    const { list } = props
    return (
        <div className="list">
            <ul>
                {
                    list.map(item => {
                        return (
                            <li key={item.id}>
                                <img src={item.img} alt="" />
                                <div className="right">
                                    <p>{item.goodsname}</p>
                                    <span>￥{item.price}</span>
                                    <div className="btn">立即抢购</div>
                                </div>
                            </li>)

                    })
                }
            </ul>
        </div>
    )
}
