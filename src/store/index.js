import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {getBanner,getIndexGoods,getDetail} from "../utils/request"
//初始状态
const initState={
    banner:[],//轮播图
    list:[],//获取列表
    goodsdetail:[]//列表详情
}

//========================轮播图============================
//action creators
const changeBannerAction=(arr)=>{//轮播图
    return {type:"changeBanner",list:arr}
}
//页面一进来就发请求
export const requestBannerAction=()=>{
    return(dispatch,getState)=>{
         //缓存层 有数据了就不再二次发起请求
         const { banner } = getState()
         if (banner.length > 0) {
             return;
         }
         //
        getBanner().then(res=>{
            dispatch(changeBannerAction(res.data.list))
        })
    }
}
//=========================列表=============================
//action creators
const changeListAction=(arr)=>{
    return {type:"changeList",list:arr}
}
//页面一进来就发请求
export const requestListAction=()=>{
    return (dispatch,getState)=>{
         //缓存层 有数据了就不再二次发起请求
         const { list } = getState()
         if (list.length > 0) {
             return;
         }
        getIndexGoods().then(res=>{
            dispatch(changeListAction(res.data.list[0].content))
        })
    }
}

//============================home商品列表详情===========================
//action creators
const changeDatilAction=(arr)=>{
    return {type:"changegoodsDatil",detail:arr}
}
//打开页面获取数据
export const requestDetailAction = (id)=>{
    return (dispatch,getState)=>{
           getDetail({id:id}).then(res=>{
               dispatch(changeDatilAction(res.data.list))
           })
    } 
}





//reducer 修改state
const reducer =(state=initState,action)=>{
    switch(action.type){
        //修改轮播图
        case "changeBanner":
            //{type:"changeBanner",list:[]}
            return{
                ...state,
                banner:action.list
            }
            //修改列表
        case "changeList":
           //{type:"changeList",list:[]}
           return {
               ...state,
               list:action.list
           }
           //修改列表详情
        case "changegoodsDatil":
              //{type:"changegoodsDatil",detail:[]}
              return {
                  ...state,
                  goodsdetail:action.detail
              }
        default:
            return state;
    }
}

//创建仓库
const store =createStore(reducer,applyMiddleware(thunk))
//导出
export const banner = (state)=>state.banner
export const list = (state)=>state.list
export const goodsdetail = (state)=>state.goodsdetail

export default store