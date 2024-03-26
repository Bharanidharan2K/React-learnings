import React, { Component } from "react";
import {connect} from "react-redux"
import clearInventory from '../actions/clearInv'
import { bindActionCreators } from "redux";

class Main extends Component{

    clearInventoryAction =() =>{
        this.props.clearInventory();
    }

    render(){
        const frozenQuantity = this.props.frozenData.reduce((accum, frozenItem) =>
            accum+frozenItem.quantity,0)
        const meatQuantity = this.props.meatData.reduce((accum, meatItem) =>
            accum+meatItem.quantity,0)
        return(
            <div>
                <h1>Frozen quantity : {frozenQuantity} </h1>
                <h1>Meat quantity : {meatQuantity} </h1>
                <button onClick={this.clearInventoryAction}>Clear All Inventory</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        frozenData : state.frozen,
        meatData : state.meat
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearInventory : clearInventory
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);