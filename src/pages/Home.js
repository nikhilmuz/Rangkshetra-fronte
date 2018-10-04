import React,{Component} from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default class Home extends Component{
    render(){
        return(<div>
            <div>
                <NavBar/></div>
        <div>
                <Footer/>
            </div>
            </div>
        )
    }
}