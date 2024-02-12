import React from "react";
import { Route, Link } from 'react-router-dom'


const HelpCustomer = () => {
return(
    <h1>Help Customer</h1>
)
}
const HelpHost = () => <h1>Help Host</h1>

function Help(){
    return(
        <div>
            <div>
                <Link to="/help/customer">I'm a Customer</Link> | 
                <Link to="/help/host">I'm a Host</Link>
            </div>
            <p>An Image goes here</p>
            <Route path="/help/customer" component={HelpCustomer} />
            <Route path="/help/host" component={HelpHost} />
            <h3>Footer for Help</h3>
        </div>
    )
}

export default Help;