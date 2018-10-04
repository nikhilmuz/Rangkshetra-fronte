import React,{Component} from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ArtCard from "../components/ArtCard";

export default class Home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <ArtCard name="Nikhil" caption="Caption" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <ArtCard name="Nikhil" caption="Caption" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <ArtCard name="Nikhil" caption="Caption" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <ArtCard name="Nikhil" caption="Caption" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <ArtCard name="Nikhil" caption="Caption" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <ArtCard name="Nikhil" caption="Caption" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <ArtCard name="Nikhil" caption="Caption" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <ArtCard name="Nikhil" caption="Caption" img="https://usercontent.rangkshetra.com/arts/1/20180914172757.jpg" />
                <Footer/>
            </div>
        )
    }
}