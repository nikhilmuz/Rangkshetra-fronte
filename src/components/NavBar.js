
import React, {Component} from "react";
import "./../css/navbar.css"
import logo from "../assets/logo.png";
import tbs_logo from "../assets/tbs_logo.png"

export default class NavBar extends Component{
    render(){
        return(

    <div className="box">
        <div>
            <div className="logo">
                <img src={logo} alt="Rangkshetra" height="100px"/>

            </div>
            <div className='site-title' ><span >Rangkshetra</span> </div>
            <div className="tbsLogo">
                <a href="http://www.tbsplanet.com"> <img src={tbs_logo} alt="TBS PLANET" height="80px"/></a>

            </div>
           <ul id="nav" className="navbar">
                <li><a href="/rangkshetra">Home</a></li>
                <li><a href="/login">Account</a></li>
                <li><a href="/rangkshetra/about">About Us</a></li>
                <li><a href="/contact"> Contact Us</a></li>
            </ul>
        </div>
    </div>
        )
    }
}