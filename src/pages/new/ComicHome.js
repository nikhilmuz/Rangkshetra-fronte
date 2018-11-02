import React,{Component} from 'react'
import {Tabs,Tab} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import comicHome from '../../css/New/comicHome.css'
import ComicGenreNav from "./ComicGenreNav";


function Product(props){
    switch(props.product){
        case 0:
            return <div>1</div>;
        case 1:
            return <div>2</div>;
        case 2:
            return <ComicGenreNav/>;

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
                scrollButtons:'on',
                inkBarStyle:'#0000ff',
                fontFamily:'"Helvetica Neue", Helvetica, Arial, sans-serif',
                textTransform:'unset'
            }
        }
    }
    render() {
        return (
            <div>
                <Tabs fullWidth="40" className="comicNav" value={this.state.active_product}
                      onChange={this.handleProductChange}>
                    <Tab style={this.getStyles().comicHead}  label="Featured"/>
                    <Tab style={this.getStyles().comicHead}  label="Language"/>
                    <Tab style={this.getStyles().comicHead}  label="Genre"/>
                    <Tab style={this.getStyles().comicHead}  href='/' icon={<HomeIcon/>}/>

                </Tabs>

                <Product product={this.state.active_product}/>
            </div>
        )
    }
}

