import React,{Component} from 'react'
import '../../css/rangkshetra/passwordchange.css'
import DashboardSidebar from './../../components/DashboardSidebar'
import Footer from './../../components/Footer'
import DashboardTitlebar from "../../components/DashboardTitlebar"

export default class PasswordChange extends Component{

    render(){
        return(
            <div>
                <DashboardTitlebar/>
                <DashboardSidebar/>
                <div className = "content-wrapper">
                    <div className = "content">
                       <p>Old password: <input type="text"/>
                        New password: <input type="text"/>
                        Confirm password: <input type="text"/></p>

                        <input type="submit"/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
