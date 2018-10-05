import React, {Component} from 'react'
import '../css/signup.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from "axios";
import {API_ROOT} from "../Config";

const SIGNUP_API = 'users/register/';

export default class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            pwd: '',
            confPwd: '',
        };
        this.handleFnameChange = this.handleFnameChange.bind(this);
        this.handleLnameChange = this.handleLnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleConfPwdChange = this.handleConfPwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        let storageToken=localStorage.getItem('Token');
        if(storageToken!=null){
            window.location.href='/user/dashboard';
        }
    }
    handleFnameChange(e){
        this.setState({fname: e.target.value });
    }
    handleLnameChange(e){
        this.setState({lname: e.target.value });
    }
    handleEmailChange(e){
        this.setState({email: e.target.value });
    }
    handlePwdChange(e){
        this.setState({pwd: e.target.value });
    }
    handleConfPwdChange(e){
        this.setState({confPwd: e.target.value });
    }

    handleSubmit(){
        if(this.state.pwd==this.state.confPwd){
            axios
                .post(
                    API_ROOT+SIGNUP_API,
                    {
                        email: this.state.email,
                        first_name: this.state.fname,
                        last_name: this.state.lname,
                        password: this.state.pwd,
                    }
                )
                .then(
                    response =>
                    {
                        console.log(response);
                        window.location.href = '/user/dashboard';
                        localStorage.setItem('Token', response.data.token );
                    }
                )
                .catch(
                    error =>
                    {
                        alert(error);
                    }
                )
        }
        else {
            alert('Passwords doesn\'t match');
        }
    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className= "signup-box">
                    <h1> Sign up Rangkshetra </h1>
                    <div className = "right">

                        <input type = "text" onChange={this.handleFnameChange} placeholder = "First Name" required />
                        <input type = "text" onChange={this.handleLnameChange} placeholder = "Last Name"/> <br/>
                        <input type="text" onChange={this.handleEmailChange} placeholder="E-mail" required /> < br/>
                        <input type="password" onChange={this.handlePwdChange} placeholder="Password" required /> < br/>
                        <input type="password" onChange={this.handleConfPwdChange} placeholder="Retype password" required/> < br/>
                        <input type = "submit" onClick={this.handleSubmit} value = "Sign me up"/>

                        <p align="center">or <a href='/login'>login</a> instead.</p>
                    </div>
                </div>

                {/* <div className="left">
            <span className="loginwith">Sign in with<br/>social network</span>
            <br/><br/><br/>
            <button className="social-signin facebook">Log in with facebook</button>
            <button className="social-signin google">Log in with Gmail</button>
        </div>
        < div className = "or" > OR </div>*/}
                <Footer/>
            </div>
        )
    }
}
