import React, {Component} from "react";
import "../css/feed.css"

export default class ArtCard extends Component{
    render(){
        return(
            <div key={this.props.key} className="feedBox">
                <h3>{this.props.name}</h3>
                <p>{this.props.caption}</p>
                <img  className='image' src={this.props.img} />
            </div>
        )
    }
}