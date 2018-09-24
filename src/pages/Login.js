import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import '../css/login.css'
import Footer from './../components/Footer'
export default class Login extends Component{
    render(){
        return(
    <div>
                <NavBar/>
        <div className="container">

             <label htmlFor="Email Id" ><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
               <button type="submit" className="loginbtn">Login</button>

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