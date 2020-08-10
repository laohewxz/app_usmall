import React, { Component } from 'react'
import querystring from "querystring"
import {connect} from "react-redux"
import {goodsdetail,requestDetailAction} from "../../store"
 
 class Detail extends Component {
     componentDidMount(){
        const id=querystring.parse(this.props.location.search.slice(1)).id
        this.props.requestDetail(id)
        
     }
    render() {
        const {goodsdetail}=this.props
        return (
            <div>
                Detail
                {/* {goodsdetail[0].id} */}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {
        goodsdetail:goodsdetail(state)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        requestDetail:(id)=>dispatch(requestDetailAction(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)
