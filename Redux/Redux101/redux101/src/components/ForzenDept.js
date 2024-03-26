import React,{Component} from "react";
import {connect } from 'react-redux'
import updateFrozen from "../actions/frozenInvUpdate";
import { bindActionCreators } from "redux";


class FrozenDept extends Component{

    increment =(operation, index) =>{
        // console.log(operation, index);
        this.props.updateFrozen(operation,index)
    }

    render(){
        const frozenInventory = this.props.frozenData.map((item, i) => {
            return (
                <div key={i}>
                    <li>{item.food} - {item.quantity}</li>
                    <input type="button" onClick={() => this.increment('+',i)} value="+" />
                    <input type="button" onClick={() => this.increment('-',i)} value="-" />
                </div>
            )
        })
        return(
            <div>
                <h1>The Frozen Food Department</h1>
                <ul>
                    {frozenInventory}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        frozenData : state.frozen   
    }
}

// mapDispatchToProps is how we tie with our dispatcher
// it takes 1arg : dispatch
function mapDispatchToProps(dispatch){
    // this function return, bindActionCreators
    // amd we hand bindActionCreator an object each property will be a locall prop
    // each value will be a function
    return bindActionCreators({
        updateFrozen: updateFrozen
    }, dispatch)
}

// export default FrozenDept;
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);