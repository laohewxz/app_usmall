import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

 class GoBack extends Component {
    goback(){
        this.props.history.go(-1)
    }
    render() {
        return (
            
                <div onClick={()=>this.goback()}>返回</div>
            
        )
    }
}
export default withRouter(GoBack)