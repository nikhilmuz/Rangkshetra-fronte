import React, {Component} from "react";
import "./../css/feed.css"

export default class Feed extends Component{
    render(){
        return(
           <div className="row">
            <div className="feedBox">
                <h3>Name of uploader</h3>
                <p>Caption </p>
                <img  className='image' src=""/>
            </div>

            <div className="feedBox">
            <h3>Name of uploader</h3>
        <p>Caption </p>
        <img src=""/>
            </div>
        <div className="feedBox">
            <h3>Name of uploader</h3>
            <p>Caption </p>
            <img src=""/>
        </div>
        <div className="feedBox">
            <h3>Name of uploader</h3>
        <p>Caption </p>
        <img src=""/>
            </div>
        </div>

        )
    }
}
