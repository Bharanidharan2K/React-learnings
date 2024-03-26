import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/main'>Entire Store</Link></li>
                    <li><Link to='/frozen'>Frozen Department</Link></li>
                    <li><Link to='/meat'>Meat Department</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;