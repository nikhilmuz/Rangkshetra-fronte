import React, {Component} from 'react'
import './../../css/New/slider.css'
import axios from 'axios';
import {API_ROOT} from "../../Config";
import Modal from "react-responsive-modal";

const LOGIN_API = 'users/login/';

export default class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isLogin: true,
            username: '',
            password: '',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    handleUsernameChange(e){
        this.setState({username: e.target.value });
    }
    handlePwdChange(e){
        this.setState({password: e.target.value });
    }
    handleSubmit(){
        axios
            .post(
                API_ROOT+LOGIN_API,
                {
                    username: this.state.username,
                    password: this.state.password,
                }
            )
            .then(
                response =>
                {
                    alert("Success")
                    // window.location.href = '/rangkshetra/user/dashboard';
                    // localStorage.setItem('Token', response.data.token );
                }
            )
            .catch(
                error =>
                {
                    alert(error);
                }
            )
    }
    render(){
        const { open } = this.state;
        if (this.state.isLogin) {
            return <div className="loginContainer">

                <i className="fa fa-user"/>&nbsp; <input onChange={this.handleUsernameChange} type="text"
                                                   placeholder="Enter Email"
                                                   name="email" required/>
                <br/>
                <i className="fa fa-unlock"/>&nbsp; <input onChange={this.handlePwdChange} type="password"
                                                   placeholder="Enter Password"
                                                   name="psw" required/>
                <button onClick={this.handleSubmit} type="submit" className="loginBtn">Login</button>
                <br/>
                <p align="center"> <span>
                    <a onClick={this.toggleForm}>create here</a>
                </span></p>
            </div>
        } else {
            return <div className="loginContainer" style={{width:'450px'}}>

                <i className="fa fa-user"/> &nbsp;<input onChange={this.handleUsernameChange} type="text"
                                                   placeholder="First Name"
                                                   required/>
                <br/>
                <i className="fa fa-user"/> &nbsp;<input onChange={this.handleUsernameChange} type="text"
                                                   placeholder="Last Name"
                                                   required/>
                <br/>
                <i className="fa fa-mobile-phone"/>&nbsp;&nbsp; <input onChange={this.handleUsernameChange} type="text"
                                                   placeholder="Phone Number"
                                                   required/>
                <br/>
                <i className="fa fa-user"/>&nbsp; <input onChange={this.handleUsernameChange} type="text"
                                                   placeholder="Enter Email"
                                                   required/>
                <br/>
                <i className="fa fa-lock"/>&nbsp; <input onChange={this.handlePwdChange} type="password"
                                                   placeholder="Create Password"
                                                   required/>
                <br/>
                <i className="fa fa-lock"/>&nbsp; <input onChange={this.handlePwdChange} type="password"
                                                   placeholder="Confirm Password"
                                                   required/>
                <button onClick={this.handleSubmit} type="submit" className="loginBtn">Signup</button>
                <br/>
                <p align="center"> <span>
                    <a onClick={this.toggleForm}>login here</a>
                </span></p>
            </div>
        }
    }
    toggleForm() {
        this.setState({isLogin: !this.state.isLogin});
    }
}