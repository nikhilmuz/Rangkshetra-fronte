import React,{Component} from 'react'
import {Tabs,Tab} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import comicGenre from '../../css/New/comicGenreNav.css'
import Horror from "./Horror";

function Product(props){

    switch(props.product) {
        case 1:
            return <Horror/>;
        case 2:
            return <div>Second</div>;
        case 3:
            return <div>3rd </div>;
    }
}

export default class ComicGenreNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_product: 1,
        };
        this.selectFirst = this.selectFirst.bind(this);
        this.selectSecond = this.selectSecond.bind(this);
        this.selectThird = this.selectThird.bind(this);
        // this.selectFourth = this.selectFourth.bind(this);
    }
    onLeave(origin, destination, direction) {
        // arguments are mapped in order of fullpage.js callback arguments
        // do something with the event
    }
    selectFirst(){
        this.setState({active_product : 1})
    }
    selectSecond(){
        this.setState({active_product : 2})
    }
    selectThird(){
        this.setState({active_product : 3})
    }
    // selectFourth(){
    //     this.setState({active_product : 4})
    // }
    render() {
        return (
            <div>
                <div className="comicGenre">
                    <ul >
                        <li> <a href='#horror'>horror</a></li>
                           <li><a href='#superhero'>superhero</a></li>
                       <li><a onClick={this.selectThird}>mythology</a></li>
                    </ul>
                </div>
                <Product product={this.state.active_product}/>
            </div>
        )
    }
}

