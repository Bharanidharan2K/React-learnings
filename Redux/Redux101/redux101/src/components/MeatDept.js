import React, {Component} from "react";
import { connect } from "react-redux"
import updateMeat from "../actions/meatInvUpdate";
import { bindActionCreators } from "redux";

class MeatDept extends Component{

    increment(operation, index){
        this.props.updateMeat(operation, index);
    }

    render(){
        const meatInventory = this.props.meatData.map((item, i) =>{
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
                <h1>The Meat Food Department</h1>
                <ul>
                    {meatInventory}
                </ul>
            </div>   
        )
    }
    
}

function mapStateToProps(state){
    return{
        meatData : state.meat
    }
    
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateMeat : updateMeat
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);