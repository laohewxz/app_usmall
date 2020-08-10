import axios from "axios"

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