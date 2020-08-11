import React, { Component } from 'react'
import "./Car.css"
import house from "../../assets/img/store.png"
import { connect } from "react-redux"
import nosel from "../../assets/img/radio_nor.png"
import sel from "../../assets/img/radio_hig.png"
import edit from "../../assets/img/editor_hig.png"
import noedit from "../../assets/img/editor_nor.png"
import {successAlert} from "../../utils/Alert"
import GoBack from "../../components/GoBack"
import { carList, requestCarListAction, changeIsEditoraction, isEditor, isAll, changeIsAllaction, changeOneAction, requestEditAction ,Allprice,requestDelAction} from "../../store"

class Car extends Component {
    componentDidMount() {
        const uid = sessionStorage.getItem('uid')
        this.props.requestCarList(uid)
    }
    less(item) {
         if(item.num <=1){
            successAlert("不能再少了")
         }else{
             this.props.requestEditAction({id:item.id,type:1})
         }
    }
    del(item){
        successAlert("删除成功")
        this.props.requestDelAction(item.id)
    }
    render() {
        const { carList, changeIsEditor, isEditor, isAll, changeIsAll, changeOne, requestEditAction,Allprice,requestDelAction } = this.props
        return (
            <div className="car">
                <nav>
                    <GoBack></GoBack>
                    购物车
                </nav>
                <ul>
                    {/* 一条数据 */}
                    {
                        carList.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <div className="inner">
                                        <p className="tit"><img src={house} alt="" />杭州保税区仓库</p>

                                        <div className={isEditor ? "box box-del" : "box"}>
                                            <img src={item.checked ? sel : nosel} alt="" className="pic"
                                                onClick={() => changeOne(index)} />
                                            <img src={item.img} alt="" className="one" />
                                            <div className="des">
                                                <p>{item.goodsname}</p>
                                                <p>
                                                    <span onClick={()=>this.less(item)}>-</span>
                                                    <span>{item.num}</span>
                                                    <span onClick={() => requestEditAction({ id: item.id, type: 2 })}>+</span>
                                                </p>
                                                <p>总价：￥{item.price * item.num}</p>
                                            </div>
                                            <span className="price">￥{item.price}</span>
                                            <span className="del" onClick={()=>this.del(item)}>删除</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

              

                {/* 底部 */}
                <div className="footer">
                    <div className="all" onClick={() => changeIsAll()}>
                        <img src={isAll ? sel : nosel} alt="" />
                        <div>全选</div>
                    </div>
                    <div className="all" onClick={() => changeIsEditor()}>
                        <img src={isEditor ? edit : noedit} alt="" />
                        <div>编辑</div>
                    </div>
                <div className="all">合计：{Allprice}</div>
                    <div className="sum">去结算</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        carList: carList(state),
        isEditor: isEditor(state),
        isAll: isAll(state),
        Allprice:Allprice(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestCarList: (uid) => dispatch(requestCarListAction(uid)),
        changeIsEditor: () => dispatch(changeIsEditoraction()),
        changeIsAll: () => dispatch(changeIsAllaction()),
        changeOne: (index) => dispatch(changeOneAction(index)),
        requestEditAction: (data) => dispatch(requestEditAction(data)),
        requestDelAction: (id) => dispatch(requestDelAction(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Car)
