
import React, {Component} from "react";
import "./../css/dashboard.css"
import logo from "../assets/logo.png";
import tbs_logo from "../assets/tbs_logo.png"

export default class DashboardTitlebar extends Component{
    render(){
        return(

            <div >
                <div>
                    <div className="logo">
                        <img src={logo} alt="Rangkshetra" height="100px"/>

                    </div>
                    <div className='site-title' ><a><span >Rangkshetra</span> </a></div>
                    <div className="tbsLogo">
                        <a href="http://www.tbsplanet.com"> <img src={tbs_logo} alt="TBS PLANET" height="80px"/></a>

                    </div>

                </div>
            </div>
        )
    }
}