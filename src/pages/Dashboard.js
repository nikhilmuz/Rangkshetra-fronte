import React,{Component} from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import './../css/dashboard.css'
import Footer from "../components/Footer";
export default class Dashboard extends Component{
    render(){
        return(
            <div>
                <DashboardSidebar/>
        <div className = "content-wrapper">
            <div className = "content">
            </div>
        <footer className = "dashboard-footer">
            <div className = "copyright">
            <p> Copyright & copy; 2018 Rangkshetra.com </p>
    </div>
    </footer>
    </div>
                <Footer/>
        </div>
        );
    }
}