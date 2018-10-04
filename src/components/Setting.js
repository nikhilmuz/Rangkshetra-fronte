import React,{Component} from 'react'
import './../css/setting.css'
import DashboardSidebar from './../components/DashboardSidebar'
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
                </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
