import React from 'react'
import "./Header.css"
import aa from '../../../../assets/img/img/home/logo.jpg'


export default function Header() {
    return (
        <div className="header">
            <header>
                <img src={aa} alt=""/>
                <span>寻找商品</span>
            </header>
        </div>
    )
}
