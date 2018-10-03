import React, {Component} from 'react'
import '../css/signup.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from "axios";
import {API_ROOT} from "../Config";

const SIGNUP_API = 'users/signup/';

export default class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
        this.handlenameChange = this.handlenameChange.bind(this);
        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlepasswordChange = this.handlepasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlenameChange(e){
        this.setState({name: e.target.value });
    }
    handleemailChange(e){
        this.setState({email: e.target.value });
    }
    handlepasswordChange(e){
        this.setState({password: e.target.value });
    }



    handleSubmit() {
        {
            var payload = {
                name: this.state.Name,
                email: this.state.email,
                password: this.state.password,

            };


            console.log(payload);
            axios
                .post(API_ROOT + SIGNUP_API, payload)
                .then((response) => {
                    console.log(response);
                    window.location.href = '/user/dashboard';

                })
                .catch(error => {alert(error)})
        }

    }

    render(){
        return(
            <div>
                <NavBar/>
            <div className= "signup-box">
                <h1> Sign up Rangkshetra </h1>
            <div className = "right">

        <label>Name</label>
        <input type = "text" name = "Full Name" value={this.state.Name} placeholder = "Full Name" required/> <br/>

        <label> Email - Id </label>
        <input type="text" name="email" onChange={this.handleemailChange} placeholder="E-mail"/> < br/>

        <label> Password </label>
        <input type="password" name="password" value={this.state.password}
               onChange={this.handlepasswordChange}
                placeholder="Password" required/> < br/>

        <label> Confirm Password </label>
        <input type="password" name="password2" placeholder="Retype password" required/> < br/>

        <input type = "submit" onClick={this.handleSubmit} name = "signup_submit" value = "Sign me up"/>

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
