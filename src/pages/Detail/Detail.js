import React, { Component } from 'react'
import querystring from "querystring"
import { connect } from "react-redux"
import { goodsdetail, requestDetailAction } from "../../store"
import "./Detail.css"
import dd from ".././../assets/img/img/cart_on.png"

class Detail extends Component {
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.requestDetail(id)

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
                                <div>
                                    <img src={item.img} alt="" className="img" /><br />
                                    <div className="des">
                                        <p className="name"> {item.goodsname} <span><img src={dd} alt="" className="like" />收藏</span></p>
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                <div className="footer">
                                    <span >加入购物车</span>
                                </div>

                                <div className="goods">
                                    <div>
                                        <img src={item.img} alt="" />
                                        <span className="name">{item.goodsname}</span>
                                    </div>
                                    <div className="size">
                                        <p>{item.specsname}</p>
                                       <p>
                                           {
                                               JSON.parse(item.specsattr).map(i=>{
                                               return <span key={i} >{i}</span>
                                               })
                                           }
                                       </p>
                                       <p className="car">
                                           <span>加入购物车</span>
                                       </p>
                                    </div>
                                </div>
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
