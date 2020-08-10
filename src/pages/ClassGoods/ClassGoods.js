import React, { Component } from 'react'
import querystring from "querystring"
import { getClassgoods ,getCate} from "../../utils/request"
import "./ClassGoods.css"

export default class ClassGoods extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            name:''
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        getClassgoods({ fid: id }).then(res => {
            this.setState({
                list: res.data.list
            })
            console.log(this.state.list)


            // getCate().then(res => {
            //     this.setState({
            //         name: res.data.list[id]
            //     })
            //     console.log(this.state.name)
            // })

        })
    }
    render() {
        const { list } = this.state
        return (
            <div className="ClassGoods">
                <ul>
                    {
                        list.map(item => {
                            return (
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <div>
                                        <p>{item.goodsname}</p>
                                        <p>￥{item.price}</p>
                                        <span>立即抢购</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
