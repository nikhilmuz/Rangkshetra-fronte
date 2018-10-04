import React,{Component} from 'react'
import './../css/dashboard-sidebar.css'
import axios from "axios";
import {API_ROOT} from "../Config";
import tbs_logo from "../assets/tbs_logo.png";
import logo from "../assets/logo.png";

const LOGOUT_API = 'users/logout';
export default class DashboardSidebar extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.logout = this.logout.bind(this);
    }
    logout(){
        axios
            .get(
                API_ROOT+LOGOUT_API,
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('Token')
                    }
                },
            )
            .then(
                response =>
                {
                    localStorage.removeItem('Token');
                    window.location.href='/'
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
                {/*<div className="dashboardnavbar" role="navigation">*/}
                    {/*<div className="navbar-header">*/}
                        {/*<div className="dashboard-logo">*/}
                            {/*<img src={logo} alt="Rangkshetra" height="100px"/>*/}
                            {/*<a><h1 style={{ textAlign: 'center'}}>Rangkshetra</h1></a>*/}

                            {/*<a href="http://www.tbsplanet.com"> <img src={tbs_logo} alt="TBS PLANET" height="80px"/></a>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}

                <div className = "navbar-collapse collapse sidebar">
                    <ul className = "sidebar-menu">
                        <li className = "active"> <a href = "dashboard"> <i className = "fa fa-home"> </i>Home</a> </li>

                        <li> <a href ='upload'> <i className = "fa fa-upload"/>Upload</a></li>
                        <li onClick={this.logout}><a><i className = "fa fa-sign-out"/>Log Out</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}