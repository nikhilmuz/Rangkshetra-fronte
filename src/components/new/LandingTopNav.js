import React, {Component} from "react";

import './../../css/New/landingtopnav.css'
import tbs_logo from './../../assets/tbs_logo.png'

export default class LandingTopNav extends Component {
    render() {
        return (
            <div className="landingTopNav" >
                <img className="brandLogo" src={tbs_logo}  />
                <ul>
                  <li><a>ABCD</a></li>
                    <li><a>XYZA</a></li>
                    <li><a>About</a></li>
                    <li><a>login/signup</a></li>
                </ul>
            </div>
        )
    }
}