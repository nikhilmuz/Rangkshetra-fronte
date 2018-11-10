import React, {Component} from 'react'
import Slider from "../components/Slider";
import LandingComic from "./LandingComic";

export default class Landing extends Component{
    render(){
        return (
            <div>
                <div>
                    <Slider/>
                </div>
                <a name="comics"/>
                <div>
                    <LandingComic/>
                </div>
            </div>
        );
    }
}
