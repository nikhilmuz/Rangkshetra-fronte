import React,{Component} from 'react'
import './../css/dashboard-sidebar.css'
export default class DashboardSidebar extends Component{
    render(){
        return(
            <div>
                <div className="dashboardnavbar" role="navigation">
                    <div className="navbar-header">
                        <div className="logo"><a><h1 style={{ textAlign: 'center'}}>Rangkshetra</h1></a></div>
                    </div>
                </div>

                <div className = "navbar-collapse collapse sidebar">
                    <ul className = "sidebar-menu">
                        <li className = "active"> <a href = "dashboard"> <i className = "fa fa-home"> </i>Home</a> </li>

                        <li> <a href ='upload'> <i className = "fa fa-upload"/>Upload</a></li>
                        <li><a><i className = "fa fa-sign-out"/>Log Out</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}