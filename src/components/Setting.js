import React,{Component} from 'react'
import '../css/rangkshetra/setting.css'
import Footer from './../components/Footer'
import DashboardTitlebar from "../components/DashboardTitlebar"

export default class Setting extends Component{

    render(){
        return(
            <div>
                <DashboardTitlebar/>
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
