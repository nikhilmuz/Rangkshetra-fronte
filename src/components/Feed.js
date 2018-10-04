import React, {Component} from "react";
import "../css/feed.css"

export default class Feed extends Component{
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