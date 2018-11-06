import React, {Component} from 'react'
import {SectionsContainer, Section} from 'react-fullpage';
import Slider from "../components/Slider";
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
