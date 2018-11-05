import React, {Component} from 'react'
import nav from '../../css/New/nav.css'
import {SectionsContainer, Section} from 'react-fullpage';
import Slider from "../../components/new/Slider";
import VideoLanding from "./VideoLanding";
import LandingTopNav from "../../components/new/LandingTopNav";
import LandingComic from "./LandingComic";

export default class Landing extends Component{
    render(){
        let fullpageOptions = {
            anchors:['intro', 'comics'],
            scrollBar:false,
            navigation:false,
        };
        return (
            <div >
            <SectionsContainer {...fullpageOptions}>
                <Section>
                    <Slider/>
                </Section>
                <Section>
                    <LandingComic/>
                </Section>
            </SectionsContainer>
            </div>
        );
    }
}
