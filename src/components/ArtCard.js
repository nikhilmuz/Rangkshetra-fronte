import React, {Component} from "react";
import "../css/rangkshetra/feed.css"
import axios from "axios";
import {API_ROOT} from "../Config";

const LIKE_API = 'arts/like/';

export default class ArtCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            likes: this.props.likes,
        };
        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(){
        const payload = new FormData();
        payload.append('id', this.state.id);
        axios
            .post(
                API_ROOT+LIKE_API,
                payload,
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('Token')
                    }
                },
            )
            .then(
                response =>
                {
                    this.setState({likes: response.data.likes});
                }
            )
            .catch(
                error =>
                {
                    alert(error);
                }
            );
    }
    render(){
        return(
            <div className="feedBox">
                <h3>{this.props.name}</h3>
                <p>{this.props.caption}</p>
                <img alt={this.props.caption} className='image' src={this.props.img} />
                <br/>
                <button onClick={this.handleLike} type='submit' className='likebutton'>
                    <i className='fa fa-heart'/> {this.state.likes} likes</button>
            </div>
        )
    }
}