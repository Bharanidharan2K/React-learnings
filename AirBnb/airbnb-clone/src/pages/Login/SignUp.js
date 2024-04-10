import React, {Component} from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import Login from "./Login";

class SignUp extends Component{
    state = {
        lowerPartOfForm : "",
        email : "",
        password : ""
    }

    componentDidMount(){
        this.setState({
            lowerPartOfForm : <button type="button" onClick={this.showInput} className="sign-up-button">Sign up with email</button>
        })
    }

    changeEmail = (e) =>{
        this.setState({email: e.target.value})
    }
    changePassword = (e) =>{
        this.setState({password: e.target.value})
    }

    showInput = () =>{
        this.setState({
            lowerPartOfForm : <SignUpInputFields changeEmail={this.changeEmail} 
            changePassword={this.changePassword} />
        })
    }

    submitLogin = (e) =>{
        e.preventDefault();
        console.log("Email ", this.state.email)
        console.log("Password ", this.state.password)
    }
    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect with facebook</button>
                    <button className="google-login">Connect with Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="divider"></div>
                    </div>
                    {this.state.lowerPartOfForm}
                    <div className="divider"></div>
                    <div>Already have an account? <span><a onClick={()=>{this.props.openModal('open', <Login />)}}>Login</a></span></div>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal : openModal
    }, dispatcher)
}

export default connect(null, mapDispatchToProps)(SignUp);

const SignUpInputFields = (props) =>{
    return(
        <div className="sign-up-wrapper">
            <div className="col m12">
                <div className="input-field" id="email">
                    <div className="form-label">Email</div>
                    <input type="text" placeholder="Email" onChange={props.changeEmail} />
                </div>
            </div>
            <div className="col m12">
                <div className="input-field" id="password">
                    <div className="form-label">Password</div>
                    <input type="password" placeholder="Password" onChange={props.changePassword} />
                </div>
            </div>
            <div className="col m12">
                <button type="submit" className="btn red accent-2">Sign Up </button>

            </div>
        </div>
    )
}