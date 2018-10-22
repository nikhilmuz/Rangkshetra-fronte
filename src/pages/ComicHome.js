import React,{Component} from 'react'
import {Tabs,Tab} from '@material-ui/core';
import ComicPage from "./ComicPage";
import VideoCard from "./VideoCard";

function Product(props){
    switch(props.product){
        case 0:
            return;
        case 1:
            return ;
        case 2:
            return ;
        default:

    }
}
export default class ComicHome extends Component {
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
    render() {
        return (
            <div>
                <Tabs value={this.state.active_product} onChange={this.handleProductChange}>
                    <Tab style={{color:'#ffffff'}} label="featured"/>
                    <Tab style={{color:'#ffffff'}} label="language"/>
                    <Tab style={{color:'#ffffff'}} label="genre"/>
                    <Tab style={{color:'#ffffff'}} label="featured"/>
                    <Product product={this.state.active_product}/>
                </Tabs>
            </div>
        )
    }
}
