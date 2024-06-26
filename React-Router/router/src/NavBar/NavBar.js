import React from "react";
import { NavLink } from "react-router-dom"
import './NavBar.css';

function NavBar(props) {
    console.log(props)
    return (
        <nav className="black">
            <div className="nav-wrapper">
                <NavLink exact to="/" className="brand-logo">AirBnb</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/host">Become a Host</NavLink></li>
                    <li><NavLink to="/help">Help</NavLink></li>
                    <li><NavLink to="/sign-up">Sign up</NavLink></li>
                    <li><NavLink to="/login">Log in</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;