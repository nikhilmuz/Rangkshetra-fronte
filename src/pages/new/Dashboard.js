import React,{Component} from 'react'
import DashboardDrawer from '../../components/DashboardDrawer'

export default class Dashboard extends Component{
    render(){
        return (
            <div>
                <div>
                    <DashboardDrawer/>
                    <div className="content-wrapper">
                        <div className="content">
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}