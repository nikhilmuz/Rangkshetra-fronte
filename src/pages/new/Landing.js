import React, {Component} from 'react'
import nav from '../../css/New/nav.css'
import {SectionsContainer, Section} from 'react-fullpage';
// import {Tabs, Tab , AppBar} from '@material-ui/core';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Slider from "../../components/new/Slider";
import ComicLanding from "./ComicLanding";
import VideoLanding from "./VideoLanding";
import LandingTopNav from "../../components/new/LandingTopNav";
import LandingComic from "./LandingComic";

export default class Landing extends Component{
    render(){
        let fullpageOptions = {
            anchors:['intro', 'products'],
            scrollBar:false,
            navigation:false,
            sectionPaddingTop:'70px',
        };
        return (
            <div >
            <LandingTopNav/>
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
