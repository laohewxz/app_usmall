import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { getBanner, getIndexGoods, getDetail, getCate,getCarList,requestShopEdit,requestDel } from "../utils/request"
//初始状态
const initState = {
    banner: [],//轮播图
    list: [],//获取列表
    goodsdetail: [],//列表详情
    listfenlei: [],//分类列表
    carList:[],//购物车列表
    isEditor:false,//是否编辑
    isAll:false,//是否全选
}

//========================轮播图============================
//action creators
const changeBannerAction = (arr) => {//轮播图
    return { type: "changeBanner", list: arr }
}
//页面一进来就发请求
export const requestBannerAction = () => {
    return (dispatch, getState) => {
        //缓存层 有数据了就不再二次发起请求
        const { banner } = getState()
        if (banner.length > 0) {
            return;
        }
        //
        getBanner().then(res => {
            dispatch(changeBannerAction(res.data.list))
        })
    }
}
//=========================列表=============================
//action creators
const changeListAction = (arr) => {
    return { type: "changeList", list: arr }
}
//页面一进来就发请求
export const requestListAction = () => {
    return (dispatch, getState) => {
        //缓存层 有数据了就不再二次发起请求
        const { list } = getState()
        if (list.length > 0) {
            return;
        }
        getIndexGoods().then(res => {
            dispatch(changeListAction(res.data.list[0].content))
        })
    }
}

//============================home商品列表详情===========================
//action creators
const changeDatilAction = (arr) => {
    return { type: "changegoodsDatil", detail: arr }
}
//打开页面获取数据
export const requestDetailAction = (id) => {
    return (dispatch, getState) => {
        getDetail({ id: id }).then(res => {
            dispatch(changeDatilAction(res.data.list))
        })
    }
}
//=====================分类列表=========================
const changeFenlei = (arr) => {
    return { type: "changefenlei", list: arr }
}
//打开页面获取数据
export const requestFenleiAction = () => {
    return (dispatch, getState) => {
        const { listfenlei } = getState()
        if (listfenlei.length > 0) {
            return;
        }
        getCate().then(res => {
            // console.log(res.data.list, 'ppp')
            dispatch(changeFenlei(res.data.list))
        })
    }
}
//====================购物车列表=============================
const changCarList = (arr)=>{
    return {type:"changCarList",list:arr} 
}
//打开页面就获取数据
export const requestCarListAction=(uid)=>{
    return (dispatch,getState)=>{
        getCarList({uid:uid}).then(res=>{
            const list = res.data.list?res.data.list:[]
            list.forEach(item=>{
                item.checked = false
            })
            dispatch(changCarList(list))
        })
    }
}
//修改编辑
export const changeIsEditoraction=()=>({
    type:"changeIsEditor"
})
export const changeIsAllaction=()=>({
    type:"changeIsAll"
})
//修改某条数据的checked
export const changeOneAction=(index)=>({
    type:"changeOne",index
})
//点击- +
export const requestEditAction=(data)=>{
    return (dispatch,getState)=>{
        requestShopEdit(data).then(res=>{
            const uid = sessionStorage.getItem("uid")
            dispatch(requestCarListAction(uid))
        })
    }
}
//点击删除
export const requestDelAction=(id)=>{
    return (dispatch)=>{
        requestDel({id:id}).then(res=>{
            const uid = sessionStorage.getItem("uid")
            dispatch(requestCarListAction(uid))
        })
    }
}





//reducer 修改state
const reducer = (state = initState, action) => {
    switch (action.type) {
        //修改轮播图
        case "changeBanner":
            //{type:"changeBanner",list:[]}
            return {
                ...state,
                banner: action.list
            }
        //修改列表
        case "changeList":
            //{type:"changeList",list:[]}
            return {
                ...state,
                list: action.list
            }
        //修改列表详情
        case "changegoodsDatil":
            //{type:"changegoodsDatil",detail:[]}
            return {
                ...state,
                goodsdetail: action.detail
            }
        //修改分类列表
        case "changefenlei":
            //{type:"changefenlei",list:[]}
            return {
                ...state,
                listfenlei: action.list
            }
        //修改购物车列表
        case "changCarList":
            //{type:"changCarList",list:[]} 
            return {
                ...state,
                carList:action.list
            }
        //修改编辑
        case "changeIsEditor":
            return {
                ...state,
                isEditor:!state.isEditor
            }
        //修改全选
        case "changeIsAll":
            return {
                ...state,
                isAll:!state.isAll,
                carList:state.carList.map(item=>{
                    item.checked = !state.isAll;
                    return item
                })
            }
        //修改某条数据的checked
        case "changeOne":
            const {carList} = state
            carList[action.index].checked=!carList[action.index].checked
            return {
                ...state,
                carList:[...carList],
                isAll:carList.every(item=>item.checked)
            }
        default:
            return state;
    }
}

//创建仓库
const store = createStore(reducer, applyMiddleware(thunk))
//导出
export const banner = (state) => state.banner
export const list = (state) => state.list
export const goodsdetail = (state) => state.goodsdetail
export const listfenlei = (state) => state.listfenlei
export const carList = (state) => state.carList
export const isEditor = (state) => state.isEditor
export const isAll = (state) => state.isAll
export const Allprice = (state)=>{
    var sum =0;
    const {carList} = state
    carList.forEach(item=>{
        sum +=item.price*item.num
    })
    return sum
}

export default store