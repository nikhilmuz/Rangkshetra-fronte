import React,{Component} from 'react'
import '../css/rangkshetra/dashboard-sidebar.css'
import axios from "axios";
import {API_ROOT} from "../Config";

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
                    localStorage.clear();
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
            <div >
                <div className = "navbar-collapse collapse sidebar">
                    <ul className = "sidebar-menu">
                        <li className=""> <a href = "/user/dashboard"> <i className = "fa fa-home"> </i>Dashboard</a> </li>
                        <li> <a href ='/user/upload'> <i className = "fa fa-upload"/>Upload</a></li>
                        <li> <a href='/user/setting'><i className = "fa fa-gears"/>Settings</a></li>
                        <li onClick={this.logout}><a><i className = "fa fa-sign-out"/>Log Out</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}