import React,{Component} from "react";
import {connect } from 'react-redux'


class FrozenDept extends Component{
    render(){
        console.log(this.props.frozenData)
        return(
            <h1>The Frozen Food Department</h1>
        )
    }
}


function mapStateToProps(state){
    return{
        frozenData : state.frozen
    }
}

// export default FrozenDept;
export default connect(mapStateToProps)(FrozenDept);