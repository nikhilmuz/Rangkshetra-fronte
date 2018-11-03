import React,{Component} from 'react'
import DashboardSidebar from '../../components/DashboardSidebar'
import Footer from "../../components/Footer"
import Userhome from "./Userhome"
import DashboardTitlebar from "../../components/DashboardTitlebar"


export default class Dashboard1 extends Component{
    render(){
        return (
            <div>
                <DashboardTitlebar/>
                <DashboardSidebar/>
                <div className="content-wrapper">
                    <div className="content">
                        <Userhome/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}