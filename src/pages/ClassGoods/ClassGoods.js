import React, { Component } from 'react'
import querystring from "querystring"
import { getClassgoods ,getCate} from "../../utils/request"
import "./ClassGoods.css"
import GoBack from "../../components/GoBack"

export default class ClassGoods extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            name:''
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1))
        console.log(id,'ppppppp')
        this.setState({
            name:id.name
        })
        getClassgoods({ fid: id.id }).then(res => {
            this.setState({
                list: res.data.list
            })

        })
    }
    render() {
        const { list ,name} = this.state
        return (
            <div className="ClassGoods">
                <nav>
                    <GoBack className="back"></GoBack>
                    {name}
                </nav>
                <ul>
                    {
                        list.map(item => {
                            return (
                                <li key={item.id}>
                                    <img src={item.img} alt="" />
                                    <div>
                                        <p>{item.goodsname}</p>
                                        <p className="price">￥{item.price}</p>
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
