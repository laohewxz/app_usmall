import React from 'react'
import "./Banner.css"
import { Carousel, WingBlank } from 'antd-mobile'

export default function Banner(props) {
    const {banner} = props
    return (
        <div className="banner">
           <Carousel>
               {
                   banner.map(item=>{
                       return <img src={item.img} key={item.id} alt=""/>
                   })
               }
           </Carousel>
        </div>
    )
}
