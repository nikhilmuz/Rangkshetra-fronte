import React,{Component} from 'react'
import '../css/rangkshetra/setting.css'
import DashboardSidebar from './DashboardDrawer'
import Footer from './../components/Footer'
import DashboardTitlebar from "../components/DashboardTitlebar"

export default class Setting extends Component{

    render(){
        return(
            <div>
                <DashboardTitlebar/>
                <DashboardSidebar/>
                <div className = "content-wrapper">
                    <div className = "content">
                       * <a href='/user/password'> Change Password</a>
                </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
