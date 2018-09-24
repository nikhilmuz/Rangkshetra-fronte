import React, {Component} from 'react'
import '../css/signup.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
export default class Signup extends Component{
    render(){
        return(
            <div>
                <NavBar/>
            <div className= "signup-box">
                <h1> Sign up Rangkshetra </h1>
            <div className = "right">

        <label>Name</label>
        <input type = "text" name = "Full Name" placeholder = "Full Name" required/> <br/>

        <label> Email - Id </label>
        <input type="text" name="email" placeholder="E-mail"/> < br/>

        <label> Password </label>
        <input type="password" name="password" placeholder="Password" required/> < br/>

        <label> Confirm Password </label>
        <input type="password" name="password2" placeholder="Retype password" required/> < br/>

        <input type = "submit" name = "signup_submit" value = "Sign me up"/>

                <p align="center">or <a href='/login'>login</a>instead.</p>
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