import React, {Component} from 'react'
import {SectionsContainer, Section} from 'react-fullpage';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";
import ComicNav from "./ComicNav";
import Slider from "./Slider";
import Comiccard from "./ComicPage";
/**
 * @return {null}
 */

function Product(props){
    switch(props.product){
        case 0:
            return <ComicNav/>;
        case 1:
            return <div>2</div>;
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
    render(){
        let fullpageOptions = {
            anchors:['intro', 'products'],
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
                        <Tab className="navBox" label="Comics"/>
                        <Tab className="navBox" label="Videos"/>
                        <Tab className="navBox" label="Arts"/>
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
            </SectionsContainer>
        );
    }
}