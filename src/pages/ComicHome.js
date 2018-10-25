import React,{Component} from 'react'
import {Tabs,Tab} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import comicHome from './../css/New/comicHome.css'
import ComicGenre from "./ComicGenre";

function Product(props){
    switch(props.product){
        case 0:
            return <div>1</div>;
        case 1:
            return <div>2</div>;
        case 2:
            return <ComicGenre/>;

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
    getStyles(){
        return {
            comicHead: {

                fontColor:'#ffffff',
                textTransform:'unset'
            }
        }
    }
    render() {
        return (
            <div>
                <Tabs fullWidth={1}
                      className="comicNav"
                      value={this.state.active_product}
                      onChange={this.handleProductChange}
                >
                    <Tab style={this.getStyles().comicHead}  label="Featured"/>
                    <Tab style={this.getStyles().comicHead}  label="Language"/>
                    <Tab style={this.getStyles().comicHead}  label="Genre"/>
                    <Tab style={this.getStyles().comicHead}  href='/' icon={<HomeIcon/>}/>
                    <Product product={this.state.active_product}/>
                </Tabs>
            </div>
        )
    }
}

