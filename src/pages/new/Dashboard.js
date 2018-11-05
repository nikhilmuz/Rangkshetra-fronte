import React,{Component} from 'react'
import DashboardSidebar from '../../components/DashboardSidebar'
import Footer from "../../components/Footer"
import LandingTopNav from "../../components/new/LandingTopNav";

export default class Dashboard extends Component{
    render(){
        return (
            <div>
                <div>
                    <DashboardSidebar/>
                    <div className="content-wrapper">
                        <div className="content">
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}