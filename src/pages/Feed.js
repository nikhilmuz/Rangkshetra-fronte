import React, {Component} from "react";
import "./../css/feed.css"

import axios from "axios";
import {API_ROOT} from "../Config";

const = '';

export default class Feed extends Component{
    constructor(props) {
        super(props);
        this.state = {
            uploader:',',
            caption: '',
            img:'url',



        };

    }

    handle() {
         {
            axios
                .get(

                )
                .then(
                    response =>
                    {
                        console.log(response);

                    }
                )
        }
    }
    render(){
        return(
           <div className="row">
            <div className="feedBox">
                <h3>Name of uploader</h3>
                <p>Caption </p>
                <img  className='image' src=""/>
            </div>
            </div>

        )
    }
}
