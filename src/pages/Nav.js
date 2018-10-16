import React,{Component} from 'react'
import '../css/New/nav.css'

export default class Nav extends Component {

    render() {
        return (
            <div>
            <div className="navContainer">
                <div className="navBox">
                    <ul>
                        <li>Select First</li>
                         <li >Select Second</li>
                        <li>Select Third</li>
                    </ul>
                </div>
            </div>

            </div>
        )
    }
}

