import React,{Component} from 'react'
import {Tab, Tabs} from "@material-ui/core";
import ComicCard from "./ComicCard";
import videoHome from './../css/New/videoHome.css'

function Product(props){

    switch(props.product){
        case 1:
            return <div>
                        hy
            </div>;
        case 2:
            return <div>Second</div>;
    }
}

export default class VideoHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_product: 1,
        };
        this.selectFirst = this.selectFirst.bind(this);
        this.selectSecond = this.selectSecond.bind(this);
        this.selectThird = this.selectThird.bind(this);
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
    render() {
        return (
            <div className="videoBck">
                <ul >
                <li onClick={this.selectFirst}>Select First</li>
                <li onClick={this.selectSecond}>Select Second</li>
                    {/*<li className="videoTab" onClick={this.selectFirst}>Select First</li>*/}
                    {/*<li className="videoTab" onClick={this.selectSecond}>Select Second</li>*/}
                </ul>
                <Product product={this.state.active_product}/>
            </div>
        )
    }
}

