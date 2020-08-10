import React, { Component } from 'react'
import querystring from "querystring"
import { connect } from "react-redux"
import { goodsdetail, requestDetailAction } from "../../store"
import "./Detail.css"
import dd from ".././../assets/img/img/cart_on.png"
import {requestCaradd} from "../../utils/request"

class Detail extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.requestDetail(id)

    }
    hide() {
        this.setState({
            show: true
        })
    }
    isnone(e){
        if(e.target.className==="cover"){
        this.setState({
            show: false
        })
        }
    }

    add(){
        const uid =sessionStorage.getItem('uid')
        let obj={
            uid:uid,
            goodsid:this.props.goodsdetail[0].id,
            num:'1',
        }
        requestCaradd(obj).then(res=>{
        })
    }

    render() {
        const { goodsdetail } = this.props
        return (
            <div className="detail">
                <nav>商品详情</nav>
                {
                    goodsdetail.map(item => {
                        return (
                            <div key={item.id}>
                                <div className="imgbox">
                                    <img src={item.img} alt="" className="img" /><br />
                                    <div className="des">
                                        <p className="name"> {item.goodsname} <span><img src={dd} alt="" className="like" />收藏</span></p>
                                        <p className="hot">
                                           <i> ￥{item.price}</i>
                                            {
                                                item.ishot===1?
                                                (<em>热卖</em>):null
                                            }
                                            {
                                                item.isnew===1?
                                                (<em>新品</em>):null
                                            }
                                        </p>
                                        <p><del>￥{item.market_price}</del></p>
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                <div className="footer">
                                    <span onClick={() => this.hide()}>加入购物车</span>
                                </div>

                                {this.state.show ?
                                    (
                                        <div className="cover" onClick={(e)=>this.isnone(e)}>
                                            <div className="goods">
                                                <div className="pic">
                                                    <img src={item.img} alt="" />
                                                    <span className="name">{item.goodsname}</span>
                                                </div>
                                                <div className="size">
                                                    <p>{item.specsname}</p>
                                                    <p>
                                                        {
                                                            JSON.parse(item.specsattr).map(i => {
                                                                return <span key={i} >{i}</span>
                                                            })
                                                        }
                                                    </p>
                                                    <p className="car">
                                                        <span onClick={()=>this.add()}>加入购物车</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }


                            </div>
                        )
                    })
                }
                {/* <Footer></Footer> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        goodsdetail: goodsdetail(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestDetail: (id) => dispatch(requestDetailAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
