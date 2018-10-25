import React, {Component} from 'react'
import nav from './../css/New/nav.css'
import {SectionsContainer, Section} from 'react-fullpage';
import {Tabs, Tab , AppBar} from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ComicNav from "./ComicNav";
import Slider from "./Slider";
import ComicPage from "./ComicPage";
import VideoCard from "./VideoCard";
import ComicHome from "./ComicHome";
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
            return <div>3rd</div>;
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
    Styles(){
        return {
            headline: {
                scrollButtons:'on',
                inkBarStyle:'#0000ff',
                fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: '24px',
                height: '100px',
                border:'4px',
                textTransform:'unset'
            }
        }
    }
    render(){
        let fullpageOptions = {
            anchors:['intro', 'products','blog'],
            scrollBar:false,
            navigation:false,
        };
        return (
            <SectionsContainer {...fullpageOptions}>
                <Section>
                    <Slider/>
                </Section>
                <Section>
                    <div>
                        <AppBar position="relative">
                                <MuiThemeProvider>
                                    <Tabs fullWidth="40" className="navContainer" value={this.state.active_product}
                                          onChange={this.handleProductChange}>
                                        <Tab style={this.Styles().headline} label="Comics"/>
                                        <Tab style={this.Styles().headline} label="Videos"/>
                                        <Tab style={this.Styles().headline} label="Arts"/>
                                    </Tabs>
                                </MuiThemeProvider>
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
                    <p style={{color:'#ffffff',textAlign:'center'}}>Blog</p>
                </Section>
            </SectionsContainer>
        );
    }
}
