import React,{Component} from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Feed from "../components/Feed";

export default class Home extends Component{
    render(){
        return(<div>

                <NavBar/>
                <Feed name="Nikhil" caption="ghdf" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <Feed name="Nikhil" caption="ghdf" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <Feed name="Nikhil" caption="ghdf" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <Feed name="Nikhil" caption="ghdf" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <Feed name="Nikhil" caption="ghdf" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <Feed name="Nikhil" caption="ghdf" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <Feed name="Nikhil" caption="ghdf" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <Feed name="Nikhil" caption="ghdf" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <Footer/>

            </div>
        )
    }
}