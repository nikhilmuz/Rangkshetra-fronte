import React,{Component} from 'react'
import DashboardSidebar from '../../components/DashboardSidebar'
import Footer from "../../components/Footer"
import Userhome from "./../rangkshetra/Userhome"
import LandingTopNav from "../../components/new/LandingTopNav";

export default class Dashboard extends Component{
    render(){
        return (
            <div>
                <LandingTopNav/>
                <div style={{paddingTop:'80px'}}>
                    <DashboardSidebar/>
                    <div className="content-wrapper">
                        <div className="content">
                            <Userhome/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}