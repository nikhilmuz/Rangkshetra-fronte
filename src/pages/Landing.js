import React, {Component} from 'react'
import {SectionsContainer, Section} from 'react-fullpage';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";
import ComicNav from "./ComicNav";
import Slider from "./Slider";
import ComicPage from "./ComicPage";
import VideoCard from "./VideoCard";
import teal200 from '@material-ui/core/colors/teal'

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
/**
 * @return {null}
 */

function Product(props){
    switch(props.product){
        case 0:
            return <ComicPage/>;
        case 1:
            return <VideoCard/>;
        case 2:
            return <div>hi</div>;
        default:

    }
}

export default class Landing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active_product: 0,
        };
        this.handleProductChange = this.handleProductChange.bind(this);
    }
    handleProductChange(event, value){
        this.setState({active_product : value})
    }
    getStyles(){
        return {

            tabs: {
                backgroundColor: teal200,
            },

            headline: {
                scrollButtons:'on',
                indicatorColor:'#0000ff',
                fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: '24px',
                height: '100px',
                border:'4px',
            }
        }
    }
    render(){
        let fullpageOptions = {
            anchors:['intro', 'products','blog'],
            scrollBar:false,
            navigation:false,
        };
        return(
            <SectionsContainer {...fullpageOptions}>
                <Section>
                    <Slider/>
                </Section>
                <Section>
                    <div>
                    <AppBar className="navBar" position="relative">
                        <Tabs fullWidth="40" className="navContainer" value={this.state.active_product} onChange={this.handleProductChange}>
                       <Tab style={this.getStyles().headline}  tabItemContainerStyle={{color:'#red200'}} label="Comics"/>
                        <Tab style={this.getStyles().headline}   label="Videos"/>
                        <Tab style={this.getStyles().headline}   label="Arts"/>
                        </Tabs>
                    </AppBar>
                    </div>
                    {/*<div className="navContainer">*/}
                        {/*<div className="navBox" >*/}

                                 {/*<a value={this.state.active_product} onChange={this.handleProductChange}>Comics</a>*/}
                                 {/*<a  onChange={this.handleProductChange}>Videos</a>*/}
                                 {/*<a  onChange={this.handleProductChange}>Arts</a>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <Product product={this.state.active_product}/>

                </Section>
                <Section>
                    section 3
                </Section>
            </SectionsContainer>
        );
    }
}
