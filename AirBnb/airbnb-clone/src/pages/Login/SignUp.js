import React, {Component} from "react";
import './Login.css';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import Login from "./Login";
import axios from 'axios';
import swal from "sweetalert";
import regAction from "../../actions/regAction";

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

    submitLogin = async(e) =>{
        e.preventDefault();
        // console.log("Email ", this.state.email)
        // console.log("Password ", this.state.password)
        if(!this.state.email || !this.state.password){
            swal({
                title: "Invalid email/password",
                text: "Please provide a valid email and password",
                icon: "warning"
              });
        }
        else{
            const url = `${window.apiHost}/users/signup`;
            const data = {
                email : this.state.email,
                password : this.state.password
            }
            const resp = await axios.post(url,data);  
            const token = resp.data.token;
            if(resp.data.msg === "userExists"){
                swal({
                    title: "Email exist",
                    text: "The Email you provided is already registered",
                    icon: "error"
                  });
            }
            else if(resp.data.msg === "invalidData"){
                swal({
                    title: "Invalid email/password",
                    text: "Please provide a valid email and password",
                    icon: "warning"
                  });
            }
            else if(resp.data.msg === "userAdded"){
                swal({
                    title: "Success!",
                    icon: "success"
                  });
                this.props.regAction(resp.data)
            }

        }
    }
    render(){
        console.log(this.props.auth)
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
                    <div>Already have an account? <span className="pointer"><a onClick={()=>{this.props.openModal('open', <Login />)}}>Login</a></span></div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth : state.auth
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal : openModal,
        regAction : regAction,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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