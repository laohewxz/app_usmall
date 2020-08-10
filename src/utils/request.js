import axios from "axios"
import qs from "qs"

//响应拦截
axios.interceptors.response.use(res=>{
    console.log(res)
    return res
})

//获取商品信息
export const getIndexGoods=()=>{
   return axios({
       url:"/api/getindexgoods",
       method:"get"
   })
}

//获取轮播图图片
export const getBanner=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
 }

 //获取分类
 export const getCate=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
 }

 //获取详情
 export const getDetail=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        params
    })
}

//获取分类商品
export const getClassgoods=(params)=>{
    return axios({
        url:"/api/getgoods",
        params
    })
}
//登录
export const requestLogin=(params)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(params)
    })
}
//注册
export const requestReg=(params)=>{
    return axios({
        url:"/api/register",
        method:"post",
        data:qs.stringify(params)
    })
}
//购物车添加
export const requestCaradd=(params)=>{
    return axios({
        url:"/api/cartadd",
        method:"post",
        data:qs.stringify(params)
    })
}
