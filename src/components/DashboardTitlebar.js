import React, {Component} from "react";
import "../css/rangkshetra/dashboard.css"
import logo from "../assets/logo.png";
import tbs_logo from "../assets/tbs_logo.png"

export default class DashboardTitlebar extends Component{
    render(){
        return(


                <div>
                    <div className="logo">
                        <a href='/'><img src={logo} alt="Rangkshetra" height="100px"/></a>
                    </div>
                    <div className='site-title' ><a ><span >Rangkshetra</span> </a></div>
                    <div className="tbsLogo">
                        <a href="http://www.tbsplanet.com"> <img src={tbs_logo} alt="TBS PLANET" height="80px"/></a>
                    </div>
                </div>
        )
    }
}