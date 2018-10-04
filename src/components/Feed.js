import React, {Component} from "react";
import "../css/feed.css"

export default class Feed extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return(
            <div className="feedBox">
                <h3>{this.props.name}</h3>
                <p>{this.props.caption}</p>
                <img  className='image' src={this.props.img} />
            </div>
        )
    }
}