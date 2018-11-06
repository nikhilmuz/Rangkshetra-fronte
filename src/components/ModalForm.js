import React, {Component} from 'react'
import '../css/New/slider.css'
import axios from 'axios';
import {API_ROOT} from "../Config";

const LOGIN_API = 'users/login/';
const SIGNUP_API = 'users/register/';

export default class ModalForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            username: '',
            password: '',
            fname: '',
            lname: '',
            phone: '',
            email: '',
            new_password: '',
            cnf_password: '',
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    handleLogin(){
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
                    localStorage.setItem('Token', response.data.token );
                    localStorage.setItem('short_name', response.data.short_name );
                    localStorage.setItem('full_name', response.data.full_name );
                    localStorage.setItem('email', response.data.email );
                    window.location.href = '/user/dashboard';
                }
            )
            .catch(
                error =>
                {
                    alert('Incorrect Credentials');
                }
            )
    }
    render(){
        const { open } = this.state;
        if (this.state.isLogin) {
            return <div className="loginContainer">
                <i className="fa fa-user"/>&nbsp;
                <input
                    onChange={(e)=>{this.setState({username: e.target.value})}}
                    type="text"
                    placeholder="Enter Email"
                    value={this.state.username}
                    required
                />
                <br/>
                <i className="fa fa-unlock"/>&nbsp;
                <input
                    onChange={(e)=>{this.setState({password: e.target.value})}}
                    value={this.state.password}
                    type="password"
                    placeholder="Enter Password"
                    required
                />
                <button onClick={this.handleLogin} type="submit" className="loginBtn">Login</button>
                <br/>
                <p align="center"> <span>
                    <a onClick={this.toggleForm}>create here</a>
                </span></p>
            </div>
        } else {
            return <div className="loginContainer" style={{width:'450px'}}>

                <i className="fa fa-user"/> &nbsp;
                <input
                    onChange={(e)=>{this.setState({fname: e.target.value})}}
                    value={this.state.fname}
                    type="text"
                    placeholder="First Name"
                    required
                />
                <br/>
                <i className="fa fa-user"/> &nbsp;
                <input
                    onChange={(e)=>{this.setState({lname: e.target.value})}}
                    value={this.state.lname}
                    type="text"
                    placeholder="Last Name"
                    required
                />
                <br/>
                <i className="fa fa-mobile-phone"/> &nbsp;
                <input
                    onChange={(e)=>{this.setState({phone: e.target.value})}}
                    value={this.state.phone}
                    type="text"
                    placeholder="Phone Number"
                    required/>
                <br/>
                <i className="fa fa-user"/>&nbsp;
                <input
                    onChange={(e)=>{this.setState({email: e.target.value})}}
                    value={this.state.email}
                    type="text"
                    placeholder="Enter Email"
                    required/>
                <br/>
                <i className="fa fa-lock"/>&nbsp;
                <input
                    onChange={(e)=>{this.setState({new_password: e.target.value})}}
                    value={this.state.new_password}
                    type="password"
                    placeholder="Create Password"
                    required
                />
                <br/>
                <i className="fa fa-lock"/>&nbsp;
                <input
                    onChange={(e)=>{this.setState({cnf_password: e.target.value})}}
                    value={this.state.cnf_password}
                    type="password"
                    placeholder="Confirm Password"
                    required
                />
                <button
                    onClick={this.handleSignup}
                    type="submit"
                    className="loginBtn"
                >
                    Sign up
                </button>
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

    handleSignup() {
        if(this.state.new_password===this.state.cnf_password){
        axios
            .post(
                API_ROOT+SIGNUP_API,
                {
                    'first_name':this.state.fname,
                    'last_name':this.state.lname,
                    'email':this.state.email,
                    'phone':this.state.phone,
                    'password':this.state.new_password,
                }
            )
            .then(
                response =>
                {
                    window.location.href = '/user/dashboard';
                    localStorage.setItem('Token', response.data.token );
                    localStorage.setItem('short_name', response.data.short_name );
                    localStorage.setItem('full_name', response.data.short_name );
                    localStorage.setItem('email', response.data.email );
                }
            )
            .catch(
                error =>
                {
                    if (error.response){
                        if(error.response.status===400){
                            alert(error.response.data[Object.keys(error.response.data)[0]])
                        }
                    }
                    else{
                        alert('Internet Disconnected')
                    }
                }
            )
        }
        else {
            alert('Passwords didn\'t match');
        }
    }
}