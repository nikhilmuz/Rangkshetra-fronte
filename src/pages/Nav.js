import React,{Component} from 'react'
import '../css/New/nav.css'

export default class Nav extends Component {

    render() {
        return (
            <div>
            <div className="navContainer">
                <div className="navBox">
                    <ul>
                        <li onClick={this.selectFirst}>Select First</li>
                         <li onClick={this.selectSecond}>Select Second</li>
                        <li onClick={this.selectThird}>Select Third</li>
                    </ul>
                </div>
            </div>

            </div>
        )
    }
}

