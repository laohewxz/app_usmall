import axios from "axios"
import qs from "qs"
import {successAlert} from "./Alert"


//请求拦截
axios.interceptors.request.use(config => {
    const token = sessionStorage.getItem("token")
    if (config.url != "http://localhost:3000/api/cartadd") {
        config.headers.authorization = token
    }
    return config
})

//响应拦截
axios.interceptors.response.use(res => {
    console.log(res)
    if(res.data.msg==="登录已过期或访问权限受限"){
        successAlert("登录已过期或访问权限受限")
       this.props.history.push('/login')
        return;
    }
    return res
})

//获取商品信息
export const getIndexGoods = () => {
    return axios({
        url: "/api/getindexgoods",
        method: "get"
    })
}

//获取轮播图图片
export const getBanner = () => {
    return axios({
        url: "/api/getbanner",
        method: "get"
    })
}

//获取分类
export const getCate = () => {
    return axios({
        url: "/api/getcatetree",
        method: "get"
    })
}

//获取详情
export const getDetail = (params) => {
    return axios({
        url: "/api/getgoodsinfo",
        params
    })
}

//获取分类商品
export const getClassgoods = (params) => {
    return axios({
        url: "/api/getgoods",
        params
    })
}
//登录
export const requestLogin = (params) => {
    return axios({
        url: "/api/login",
        method: "post",
        data: qs.stringify(params)
    })
}
//注册
export const requestReg = (params) => {
    return axios({
        url: "/api/register",
        method: "post",
        data: qs.stringify(params)
    })
}
//购物车添加
export const requestCaradd = (params) => {
    return axios({
        url: "/api/cartadd",
        method: "post",
        data: qs.stringify(params)
    })
}
//购物车列表
export const getCarList = (params) => {
    return axios({
        url: "/api/cartlist",
        params
    })
}

//修改数量
export const requestShopEdit = (data) => {
    return axios({
        url: "/api/cartedit",
        method: "post",
        data: qs.stringify(data)
    })
}
//点击删除
export const requestDel = (data) => {
    return axios({
        url: "/api/cartdelete",
        method: "post",
        data: qs.stringify(data)
    })
}