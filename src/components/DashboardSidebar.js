import React,{Component} from 'react'
import './../css/dashboard-sidebar.css'
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
                <div className = "navbar-collapse collapse sidebar">
                    <ul className = "sidebar-menu">
                        <li className = "active"> <a href = "dashboard"> <i className = "fa fa-home"> </i>Dashboard</a> </li>
                        <li> <a href ='upload'> <i className = "fa fa-upload"/>Upload</a></li>
                        <li> <a href='setting'><i className = "fa fa-gears"/>Preferences</a></li>
                        <li onClick={this.logout}><a><i className = "fa fa-sign-out"/>Log Out</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}