import React,{Component} from 'react'
import {Tab, Tabs} from "@material-ui/core";
import videoHome from '../../css/New/videoHome.css'
import VideoLanding from "./VideoLanding";

function Product(props){

    switch(props.product){
        case 1:
            return <VideoLanding/> ;
        case 2:
            return <div><iframe src="https://player.vimeo.com/video/295525907" width="320" height="" frameBorder="0"
                                allowFullScreen/></div> ;
        case 3:
            return <VideoLanding/> ;
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

                <a><li onClick={this.selectFirst}>Featured</li></a>
                    <a> <li onClick={this.selectSecond}>Jokes</li></a>
                    <li onClick={this.selectThird}>Trailers</li>
                    {/*<li className="videoTab" onClick={this.selectSecond}>Select Second</li>*/}
                    <a style={{fontSize:'20px'}} href='/'><li ><i className="fa fa-home"/></li></a>
                </ul>
                <Product product={this.state.active_product}/>
            </div>
        )
    }
}

