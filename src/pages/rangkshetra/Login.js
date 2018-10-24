import React, {Component} from 'react'
import NavBar from '../../components/NavBar'
import '../../css/login.css'
import Footer from './../../components/Footer'
import axios from 'axios';
import {API_ROOT} from "../../Config";

const LOGIN_API = 'users/login/';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        let storageToken=localStorage.getItem('Token');
        if(storageToken!=null){
            window.location.href='/rangkshetra/user/dashboard';
        }
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
                    window.location.href = '/rangkshetra/user/dashboard';
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
    render(){
        return(
    <div>
                <NavBar/>
        <div className="container">

             <label htmlFor="Email Id" ><b>Email</b></label>
            <input onChange={this.handleUsernameChange} type="text" placeholder="Enter Email" name="email" required/>
            <label><b>Password</b></label>
            <input onChange={this.handlePwdChange} type="password" placeholder="Enter Password" name="psw" required/>
               <button onClick={this.handleSubmit} type="submit" className="loginbtn">Login</button>
            <br/>
            <p align="center">Don't have an account? Create <a href='/signup'>here</a></p>
         </div>
        <div>
            <br/><br/>
            <Footer/>
        </div>
    </div>

    )
    }
}