
import React, {Component} from "react";
import "./../css/navbar.css"
import logo from "../assets/logo.png";

export default class NavBar extends Component{
    render(){
        return(

    <div className="box">
        <div>
            <div className="logo">
                <img src={logo} alt="Rangkshetra" height="140px"/>

            </div>
            <div className='site-title' ><span >RangKshetra</span> </div>
           <ul id="nav" className="navbar">
                <li><a href="/">Home</a></li>
                {/*<li className="dropdown">*/}
                    {/*<button className="dropbtn">Events</button>*/}
                {/*</li>*/}
                <li><a href="/login">Account</a></li>
               <li><a href="/about">About Us</a></li>
                <li><a href="/contact"> Contact Us</a></li>
            </ul>
        </div>
    </div>
        )
    }
}