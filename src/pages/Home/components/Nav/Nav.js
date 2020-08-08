import React from 'react'
import bb from "../../../../assets/img/img/home/1.jpg"
import "./Nav.css"

export default function Nav() {
    return (
        <div className="nav">
             <ul>
                    <li>
                        <img src={bb} alt="" className="img"/>
                        <p>限时抢购</p>
                    </li>
                    <li>
                        <img src={bb} alt="" className="img"/>
                        <p>限时抢购</p>
                    </li>
                    <li>
                        <img src={bb} alt="" className="img"/>
                        <p>限时抢购</p>
                    </li>
                    <li>
                        <img src={bb} alt="" className="img"/>
                        <p>限时抢购</p>
                    </li>
                </ul>
        </div>
    )
}
